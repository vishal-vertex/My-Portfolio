// Web Audio API Synthesizer for subtle GTA-style UI feedback sounds
// Zero external audio files needed; lightweight and instantly responsive

class SoundSystem {
  constructor() {
    this.audioCtx = null;
    this.muted = false; // The first visitor click satisfies browser audio-playback rules.
    this.lastClickAt = 0;
    this.handleGlobalClick = this.handleGlobalClick.bind(this);

    if (typeof document !== 'undefined') {
      document.addEventListener('click', this.handleGlobalClick);
    }
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    this.init();
    if (!this.muted && this.audioCtx?.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playHover() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.02, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.04);
    } catch {
      // Audio context silently handled
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const now = this.audioCtx.currentTime;
      const elapsed = performance.now() - this.lastClickAt;
      if (elapsed < 55) return;
      this.lastClickAt = performance.now();

      // A compact synthetic tactical "rifle" click: noise burst + low electronic snap.
      const buffer = this.audioCtx.createBuffer(1, Math.floor(this.audioCtx.sampleRate * 0.055), this.audioCtx.sampleRate);
      const noise = buffer.getChannelData(0);
      for (let i = 0; i < noise.length; i += 1) noise[i] = (Math.random() * 2 - 1) * (1 - i / noise.length);

      const noiseSource = this.audioCtx.createBufferSource();
      const noiseFilter = this.audioCtx.createBiquadFilter();
      const noiseGain = this.audioCtx.createGain();
      noiseSource.buffer = buffer;
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(1250, now);
      noiseFilter.Q.value = 0.8;
      noiseGain.gain.setValueAtTime(0.07, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
      noiseSource.connect(noiseFilter).connect(noiseGain).connect(this.audioCtx.destination);

      const snap = this.audioCtx.createOscillator();
      const snapGain = this.audioCtx.createGain();
      snap.type = 'square';
      snap.frequency.setValueAtTime(180, now);
      snap.frequency.exponentialRampToValueAtTime(70, now + 0.07);
      snapGain.gain.setValueAtTime(0.045, now);
      snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      snap.connect(snapGain).connect(this.audioCtx.destination);

      noiseSource.start(now);
      noiseSource.stop(now + 0.055);
      snap.start(now);
      snap.stop(now + 0.07);
    } catch {
      // Audio context silently handled
    }
  }

  handleGlobalClick(event) {
    const target = event.target;
    if (target?.closest?.('button, a, [role="button"]')) this.playClick();
  }

  playMissionPassed() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 chime
      freqs.forEach((f, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(f, this.audioCtx.currentTime + idx * 0.07);

        gain.gain.setValueAtTime(0.03, this.audioCtx.currentTime + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + idx * 0.07 + 0.2);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(this.audioCtx.currentTime + idx * 0.07);
        osc.stop(this.audioCtx.currentTime + idx * 0.07 + 0.2);
      });
    } catch {
      // Audio context silently handled
    }
  }
}

export const soundFx = new SoundSystem();

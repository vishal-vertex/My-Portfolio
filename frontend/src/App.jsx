import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/character" element={<Character />} />
        {/* <Route path="/about" element={<AboutFunc />} />
        <Route path="/services" element={<ServicesFunc />} />
        <Route path="/projects" element={<ProjectFunc />} />
        <Route path="/contact" element={<ContactFunc />} /> */} 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

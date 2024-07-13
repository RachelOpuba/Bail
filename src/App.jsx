import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Careers from "./pages/Careers"
import Culture from "./pages/Culture"


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/culture" element={<Culture/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

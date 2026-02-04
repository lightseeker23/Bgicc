import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Home from "../pages/Home.jsx";
import Programmes from "../pages/Programmes.jsx";
import OurVision from "../pages/Our_Vision.jsx";
import Who_we_are from "../pages/Who_we_are.jsx";
import OurMandate from "../pages/Our_Mandate.jsx";
import ContactUs from "../pages/contactUs.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Programmes" element={<Programmes />} />
        <Route path="/Our_Vision" element = {<OurVision/>}/>
        <Route path="/Who_we_are" element = {<Who_we_are/>}/>
        <Route path="/Our_Mandate" element = {<OurMandate/>}/>
        <Route path="/contact" element = {<ContactUs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

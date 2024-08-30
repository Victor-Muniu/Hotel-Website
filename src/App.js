import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import './App.css'
import Restaurant from "./pages/Restaurant";
import Footer from "./components/Footer";
import Confrences from "./pages/Confrences";
import Rooms from "./pages/Rooms";
import Destinations from "./pages/Destinations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restaurant" element={<Restaurant />}/>
          <Route path="/conferences" element={<Confrences />}/>
          <Route path="/rooms" element={<Rooms />}/>
          <Route path="/destinations" element={<Destinations />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path= '/services' element={<ServicesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Header from "./header"
import Footer from "./footer"
import Contact from './contact';

function App() {
  return( 
    <>
     <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;

import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Footer from "./components/footer/footer";
import "./styles/floating-button.css";


function scrollToTop() { window.scrollTo({top: 0, behavior: 'smooth'}); }

function App() {
  return (
    <>
      <Router> 
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>

      {/* <div class="dark-mode-button">
        ☀️🌑
      </div> */}

      <div
        class="to-top-button"
        onClick={scrollToTop}>
        To Top
      </div>

      <Footer /> 

    </>


    );
}

export default App;

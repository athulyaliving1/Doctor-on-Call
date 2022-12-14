import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Athulya from "./components/Athulya.js";
import Testimonial from "./components/Testimonial.js";
import Footer from "./components/Footer.js";
import MbNav from "./components/MbNav.js";
// import Header from "./components/Header.js";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <MbNav />

        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="athulya" element={<Athulya />} />
          <Route path="testimonal" element={<Testimonial />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

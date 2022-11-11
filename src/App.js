import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import Footer from "./components/Basic/Footer.js";
import Thankpage from "./components/Basic/Thankpage.js";
import Navbar from "./components/Basic/Navbar";
import NavbarXl from "./components/Basic/NavbarXl";

loadProgressBar();

function App() {
  return (
    <>
      <Navbar />
      <NavbarXl />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="tkpage" element={<Thankpage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;

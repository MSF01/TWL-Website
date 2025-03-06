import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/apps" element={<Apps />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

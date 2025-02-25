import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar/>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setShowIntro(true);
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {showIntro ? (
        <Introduction />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}

export default App;

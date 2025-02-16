import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element = {<Faq />} />
        <Route path="/products" element = {<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

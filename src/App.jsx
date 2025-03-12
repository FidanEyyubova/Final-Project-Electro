import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import Blog from "./pages/Blog";
import Wishlist from "./pages/Wishlist";
import AddtoCart from "./pages/AddtoCart";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element = {<Faq />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/products" element = {<Products />} />
        <Route path="/products/:id" element = {<ProductDetails />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/admin" element = {<AdminLogin />} />
        <Route path="/signup" element = {<Register />} />
        <Route path="/blog" element = {<Blog />} />
        <Route path="/wishlist" element = {<Wishlist />} />
        <Route path="/cart" element = {<AddtoCart />} />
        <Route path="/admin-dashboard" element = {<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

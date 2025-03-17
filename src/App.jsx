import {
  Navigate,
  Route,
  Routes,
  useLoaderData,
  useLocation,
} from "react-router-dom";
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
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import UserDashboard from "./pages/UserDashboard";
import TopPicks from "./pages/TopPicks";

function App() {
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole") || ""
  );

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  // const location = useLocation();
  // const pagePaths = [
  //   "/",
  //   "/about",
  //   "/faq",
  //   "/products",
  //   "/contact",
  //   "/products/:id",
  //   "/login",
  //   "/admin",
  //   "/signup",
  //   "/blog",
  //   "/wishlist",
  //   "/cart",
  //   "/admin-dashboard",
  //   "/user-dashboard",
  // ];

  // const isNotFoundPage = !pagePaths.includes(location.pathname);

  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />

        <Route
          path="/admin"
          element={<AdminLogin setUserRole={setUserRole} />}
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<AddtoCart />} />

        <Route
          path="/admin-dashboard"
          element={
            userRole === "admin" ? (
              <AdminDashboard setUserRole={setUserRole} />
            ) : (
              <Navigate to="/admin" />
            )
          }
        />
        <Route
          path="/user-dashboard"
          element={
            userRole === "user" ? <UserDashboard /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

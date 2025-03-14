import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

const base_URL = "https://hokbeofsgmalcjswozgt.supabase.co/rest/v1/electronics";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhva2Jlb2ZzZ21hbGNqc3dvemd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM5NTIsImV4cCI6MjA1Mzk3OTk1Mn0.G9mb4Ydti4GMGWId2wsVr3DBnL8dx9vyDIGATDhgST8";

const MyProvider = ({ children }) => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [filteredBrand, setFilteredBrand] = useState("All");
  const [filteredStock, setFilteredStock] = useState("in stock");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [rate, setMaxRate] = useState(5);
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    axios
      .get(`${base_URL}?select=*`, {
        headers: {
          apikey,
          Authorization: `Bearer ${apikey}`,
        },
      })
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  const addToCart = (electro) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (!loggedInUser) {
      alert("You need to log in first!");
      navigate("/login");
      return;
    }
  
    if (cart.some((item) => item.id === electro.id)) {
      alert("This product is already in the cart!");
    } else {
      setCart([...cart, electro]);
    }
  };
  
  const addToWishlist = (electro) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (!loggedInUser) {
      alert("You need to log in first!");
      navigate("/login");
      return;
    }
  
    if (wishlist.some((item) => item.id === electro.id)) {
      alert("This product is already in the wishlist!");
    } else {
      setWishlist([...wishlist, electro]);
    }
  };
  

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <MyContext.Provider
      value={{
        product,
        setProduct,
        filteredCategory,
        filteredBrand,
        maxPrice,
        rate,
        setFilteredCategory,
        setFilteredBrand,
        setMaxRate,
        setMaxPrice,
        filteredStock,
        setFilteredStock,
        show, setShow,
        cart, setCart,
        wishlist, setWishlist,
        addToCart,addToWishlist,
        removeFromCart,removeFromWishlist,
        clearCart,clearWishlist

      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyProvider";

const Navbar = () => {
  const { show, setShow, wishlist, cart } = useContext(MyContext);
  const navigate = useNavigate();
  const handleShow = () => {
    setShow(true);
  };

  const logging = localStorage.getItem("loggedInUser");

  return (
    <div className="sticky-top">
      <nav
        className="navbar scrolled navbar-expand-lg"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../src/images/electro.png" alt="" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbarsExample05">
            <ul className="navbar-nav mx-auto d-flex gap-4">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " active" : " page"
                  }
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " active" : "page"
                  }
                  to="/products"
                >
                  PRODUCTS
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className=" page">BLOG</Link>
              </li>
              <li className="nav-item dropdown-center">
                <a
                  className=" page dropdown-toggle page"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                <ul className="dropdown-menu text-center">
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "page"
                      }
                      to="/about"
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "page"
                      }
                      to="/faq"
                    >
                      FAQ
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "page")}
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="icons d-flex gap-4 px-lg-2">
              <div className="icon">
                <Link
                  className="page"
                  to={logging ? "/user-dashboard" : "/login"}
                >
                  <FaRegUser />
                </Link>
              </div>
              <div className="icon">
                <button
                  className="page"
                  onClick={() => navigate("/products")}
                  style={{ background: "none", border: "none" }}
                >
                  <BsSearch />
                </button>
              </div>
              <div>
                <button type="button" className="position-relative icon">
                  <Link to={"/wishlist"} className="page">
                    <FaRegHeart />
                  </Link>
                  <span className="badge rounded-pill">
                    {wishlist.length}
                  </span>
                </button>
              </div>
              <div>
                <button type="button" className="position-relative icon">
                  <Link to={"/cart"} className="page">
                    <FiShoppingCart />
                  </Link>
                  <span className="badge rounded-pill">
                    {cart.length}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

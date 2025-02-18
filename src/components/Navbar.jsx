import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky-top">
    <nav className="navbar scrolled navbar-expand-lg" aria-label="Fifth navbar example">
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " active mt-2 mx-3" : " page mt-2 mx-3"
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className=" page mt-2 mx-3">PRODUCTS</Link>
            </li>
            <li className="nav-item">
              <Link className=" page mt-2 mx-3">BLOG</Link>
            </li>
            <li className="nav-item dropdown-center">
              <a
                className=" page dropdown-toggle page mx-3"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PAGES
              </a>
              <ul className="dropdown-menu text-center mx-2">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? "active" : "page")} to="/about">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? "active" : "page")} to="/faq">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className=" page mt-2 mx-3">CONTACT</Link>
            </li>
          </ul>
          <div className="icons d-flex gap-4 px-4">
            <div className="icon">
              <Link className="page">
                <FaRegUser />
              </Link>
            </div>
            <div className="icon">
              <Link className="page">
                <BsSearch />
              </Link>
            </div>
            <div>
              <button type="button" className="position-relative icon">
                <FaRegHeart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  0<span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
            <div>
              <button type="button" className="position-relative icon">
                <FiShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  0<span className="visually-hidden">unread messages</span>
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

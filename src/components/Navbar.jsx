import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav
        className="navbar scrolled navbar-expand-lg"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../src/images/modeluxe.png" alt="" />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <NavLink className={({isActive}) => 
              isActive ? "active mt-2" : "page mt-2"
              } to={"/"}>
                HOME
              </NavLink>
              <Link className="page mt-2">SHOP</Link>
              <Link className="page mt-2">PRODUCT</Link>
              <Link className="page mt-2">BLOG</Link>
              <li className="nav-item dropdown-center">
                <a
                  className="nav-link dropdown-toggle page"
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
                    <NavLink className={({isActive}) => 
                    isActive ? "active" : "page"
                    } to={"/faq"}>
                      FAQ
                    </NavLink>
                  </li>
                </ul>
              </li>
              <Link className="page mt-2">CONTACT</Link>
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

import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { RiTwitterXFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="row mx-3 border-bottom py-4">
          <img src="../src/images/logo.png" alt="" />
        </div>
        <div className="row mx-3 border-bottom py-3">
          <div className="col-lg-3 col-md-12 col-12 my-3">
            <div>
                <p><b>Modeluxe</b> furniture offers <br /> modern, stylish, and <br /> customizable furniture <br /> for every space.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 ">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 my-3">
                <Link className="menu">
                Home
                </Link>
                </li>
                <li className="nav-item mb-2 my-3">
                <Link className="menu">
                Shop
                </Link>
                </li>
                <li className="nav-item mb-2 my-3">
                <Link className="menu">
                Product
                </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
          <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 my-3">
                <Link className="menu">
                Blog
                </Link>
                </li>
                <li className="nav-item mb-2 my-3">
                <Link className="menu">
                Contact
                </Link>
                </li>
                <li className="nav-item mb-2 my-3">
                <Link className="menu">
                About
                </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 py-3">
            <div>
              <h5>Follow us</h5>
              <div className="d-flex gap-3">
                <a href="https://x.com/?lang=en" className="icon">
                  <RiTwitterXFill />
                </a>
                <a href="https://www.instagram.com/" className="icon">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/?locale=ru_RU" className="icon">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-3 d-flex justify-content-between py-3 text-center">
          <div className="col-12">
            <p>All Rights Reserved © 2025 Wedesigntech Pvt Ltd</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

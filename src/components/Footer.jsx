import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoMdReturnLeft } from "react-icons/io";
import { RiPriceTagLine, RiSecurePaymentLine, RiTwitterXFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <div className="container-fluid">
      <div className="row g-0 d-flex justify-content-center align-items-center del  border-bottom mx-3 pb-4">
          <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center pt-4"> 
            <div className="d-flex">
              <div>
                <TbTruckDelivery className="icon mt-3 mx-3" />
              </div>
              <div>
                <h5>Free shipping</h5>
                <p>Orders over $100</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center pt-4">
            <div className="d-flex">
              <div>
              <IoMdReturnLeft className="icon mt-3 mx-3" />
              </div>
              <div>
                <h5>Free returns</h5>
                <p>With in 30 days</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center pt-4">
            <div className="d-flex">
              <div>
              <RiSecurePaymentLine className="icon mt-3 mx-3" />
              </div>
              <div>
                <h5>100% Secure</h5>
                <p>Payment Online</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center pt-4">
            <div className="d-flex">
              <div>
              <RiPriceTagLine className="icon mt-3 mx-3" />
              </div>
              <div>
                <h5>Best Price</h5>
                <p>Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-3 border-bottom py-3">
          <div className="col-lg-3 col-md-12 col-12 my-3 d-flex justify-content-center">
            <div>
              <p>
                <b>Electro</b> is an innovative website <br /> for electronics,
                offering a <br /> one-stop platform for <br /> shopping and
                industry <br /> updates.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 d-flex justify-content-center ">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 my-3">
                  <Link className="menu">Home</Link>
                </li>
                <li className="nav-item mb-2 my-3">
                  <Link className="menu">FAQ</Link>
                </li>
                <li className="nav-item mb-2 my-3">
                  <Link className="menu">Products</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 d-flex justify-content-center">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 my-3">
                  <Link className="menu">Blog</Link>
                </li>
                <li className="nav-item mb-2 my-3">
                  <Link className="menu">Contact</Link>
                </li>
                <li className="nav-item mb-2 my-3">
                  <Link className="menu" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 py-3 d-flex justify-content-center">
            <div>
              <h5>Follow us</h5>
              <div className="d-flex gap-3">
                <a href="https://x.com/?lang=en" className="icon">
                  <RiTwitterXFill />
                </a>
                <a href="https://www.instagram.com/" className="icon">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/?locale=ru_RU"
                  className="icon"
                >
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
  );
};

export default Footer;

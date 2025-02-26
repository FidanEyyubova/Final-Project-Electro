import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaEnvelope, FaPhoneAlt, FaPhoneVolume } from "react-icons/fa";
import { GiConvergenceTarget } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container-fluid">
        <div className="row back-img">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h1>
              <i>CONTACT</i>
            </h1>
          </div>
        </div>
        <div className="row vision d-flex justify-content-center align-items-center py-5">
          <div
            className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center text-center"
            data-aos="fade-down"
          >
            <div>
              <div className="icon mx-4 my-3 d-flex justify-content-center align-items-center">
                <IoLocationSharp />
              </div>
              <div>
                <p>
                  {" "}
                  14 Ringe lane, las vegas, <br />
                  nv, 89156 united states
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center text-center"
            data-aos="fade-down"
          >
            <div>
              <div className="icon mx-4 my-3 d-flex justify-content-center align-items-center">
                <FaPhoneAlt />
              </div>
              <div>
                <p>
                  {" "}
                  +00-1234567890 <br />
                  (+1) 54626541 00
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center text-center"
            data-aos="fade-down"
          >
            <div>
              <div className="icon mx-4 my-3 d-flex justify-content-center align-items-center">
                <FaEnvelope />
              </div>
              <div>
                <p>
                  demo@support.com <br />
                  support@yourmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 g-0">
            <div>
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/contact-banner.jpg?v=1687412566&width=1920"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row conc d-flex justify-content-center align-items-center">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>Keep in touch with us</h3>
              <div className="d-flex">
                <div>
                  <form action="" className="d-flex flex-column">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                  </form>
                </div>
                <div>
                  <form action="" className="d-flex flex-column">
                    <textarea name="" id=""></textarea>
                    
                  </form>
                </div>
              </div>
              <div>
                <input type="checkbox" />
                <span>
                  I accept the terms & conditions and I understand that my data
                  will be <br /> hold securely in accordance with the privacy
                  policy.
                </span>
                <button className="btn btn-danger">Send </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

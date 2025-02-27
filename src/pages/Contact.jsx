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
        <div className="row vision vision-b d-flex justify-content-center align-items-center py-5">
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
        <div className="row conc d-flex justify-content-center align-items-center py-4">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-5">
              <h1 className="mb-4">Keep in touch with us</h1>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-6  d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column  d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column gap-4 ">
                      <input type="text" placeholder="Your full name" />
                      <input type="email" placeholder="Your email address" />
                      <input type="tel" placeholder="Your mobile number" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mt-1 pt-1">
                    <textarea
                      name=""
                      id=""
                      placeholder="Your message  here..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="form-check d-flex my-3 gap-1">
                      <input
                        type="checkbox"
                        className="check mt-2"
                        id="termsCheck"
                      />
                      <label
                        className="form-check-label ms-2"
                        htmlFor="termsCheck"
                      >
                        I accept the terms & conditions and I understand that my
                        data will be held securely in accordance with the
                        privacy policy.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="my-3">
                    <button className="btn btn-danger">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12 p-0">
            <div
              className="map-container"
              style={{ width: "100%", maxWidth: "1700px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12880.636965452359!2d-115.07830475045652!3d36.18700888383667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8dc928cfe64e7%3A0xa7db8399b4bb0217!2sN%20Ringe%20Ln%2C%20Sunrise%20Manor%2C%20NV%2C%20USA!5e0!3m2!1sen!2saz!4v1740653097852!5m2!1sen!2saz"
                style={{ border: 0, width: "100%", height: "400px" }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

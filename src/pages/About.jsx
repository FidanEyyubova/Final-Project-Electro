import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

 

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="about py-5">
      <div className="container-fluid">
        <div className=" p-md-5 mb-4 rounded bg-body-secondary header d-flex justify-content-center">
          <div className="col-lg-6 py-4 about-col d-flex justify-content-center align-items-center">
            <h1 className="display-4 fst-italic text-center">
              <p>About</p>
            </h1>
          </div>
        </div>
        <div className="row py-3 middle" data-aos="fade-down">
          <div className="col-12">
            <h3 className=" py-2 my-3">Moduluxe Furniture</h3>
            <p>
              The Moduluxe Furniture page features a modern, customizable
              collection designed for contemporary spaces. Prioritizing
              modularity, functionality, and aesthetics, it offers versatile
              solutions that adapt to various layouts and styles. Page is
              designed to provide a smooth and engaging shopping experience,
              helping users find the perfect modular furniture solutions for
              their needs.
            </p>
            <div className="my-3">
              <p className="key">
                <FaRegCheckCircle className="icon" />{" "}
                <small>
                  <b>Seamless Navigation:</b> Intuitive categories and filters
                  for easy browsing of different furniture collections.
                </small>
              </p>
              <p className="key py-2">
                <FaRegCheckCircle className="icon" />{" "}
                <small>
                  <b>Detailed Product Descriptions:</b> High-quality images,
                  dimensions, materials, and specifications to help customers
                  make informed decisions.
                </small>
              </p>
              <p className="key">
                <FaRegCheckCircle className="icon" />{" "}
                <small>
                  <b>User Reviews & Ratings:</b> Customer feedback and
                  testimonials for added trust and insight.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="row end text-center ">
          <h2 className="team text-center my-5 py-3">Our Team</h2>
          <div className="col-lg-4 col-12 my-2"   data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/well-dressed-young-businessman-portrait_1024356-1568.jpg"
                alt=""
              />
            </div>
            <div className="my-3">
              <h4>James Holloway</h4>
              <p>
                <i>CEO</i>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 my-2"   data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/woman-business-suit-gray-background_1106493-225464.jpg"
                alt=""
              />
            </div>
            <div className="my-3">
              <h4>Isabella Thornton</h4>
              <p>
                <i>Marketing</i>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 my-2"   data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/well-dressed-businessman-with-cross-arm-portrait_1024356-1497.jpg"
                alt=""
              />
            </div>
            <div className="my-3">
              <h4>Lucas Montgomery</h4>
              <p>
                <i>Customer Support</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

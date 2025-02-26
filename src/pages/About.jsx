import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { TbTargetArrow } from "react-icons/tb";
import { GiConvergenceTarget } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once : true });
    window.scroll(0,0)
  }, []);
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row back-img">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h1>
              <i>ABOUT</i>
            </h1>
          </div>
        </div>
        <div className="row middle py-5 mx-3" data-aos="fade-down">
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <div className="text-center">
                <img
                  src="https://www.eashub.com/wp-content/uploads/2020/08/16317780221-2.png"
                  alt=""
                />
              </div>
              <div>
                <p className="py-3 para">
                  <b>With Electro</b>, we don’t just sell products—we build a
                  tech-savvy community. Our blog offers the latest tech news,
                  in-depth articles, and practical how-to guides. We keep you
                  connected with updates, unboxings, and special promotions on
                  our social website. By choosing Electro, you gain access to an
                  ever-evolving world of technology and innovation. We believe
                  that staying informed and embracing new tech trends should be
                  both exciting and straightforward.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <div>
                <p className="para">
                  <b>At Electro</b>, we believe technology has the power to transform
                  lives. Our platform is your go-to destination for all things
                  electronics, offering an extensive range of products,
                  insightful tech content, and exceptional customer service
                  under one roof. We provide a vast product selection, featuring
                  the latest headphones, smart watches, mouses and camera
                  devices. Our catalog showcases top brands and the newest
                  models, catering to tech enthusiasts, professionals, and
                  casual shoppers alike. 
                </p>
              </div>
              <div className="text-center py-3">
                <img
                  src="https://img.freepik.com/premium-photo/cyber-monday-fitness-tech-email-header-featuring-smartwatches-trackers-wireless-headphones_416256-121416.jpg?semt=ais_hybrid"
                  alt=""
                  className="mx-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row vision d-flex justify-content-center align-items-center py-5 mb-5" >
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center text-center" data-aos="fade-down">
            <div>
              <div className="icon mx-4 my-3 d-flex justify-content-center align-items-center">

              <TbTargetArrow />
              </div>
              <div>
                <h5>OUR MISSION</h5>
                <p> At Electro, our mission <br /> is to empower people <br /> through technology</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center text-center" data-aos="fade-down">
          <div>
              <div className="icon mx-4 my-3 d-flex justify-content-center align-items-center">
              <GiConvergenceTarget/>

              </div>
              <div>
                <h5>OUR VISION</h5>
                <p> Our vision is to lead the <br /> electronics industry with <br /> unmatched quality</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center text-center" data-aos="fade-down">
          <div>
              <div className="icon mx-4 my-3 d-flex justify-content-center align-items-center">
              <BiSupport />
              </div>
              <div>
                <h5>YOUR SUPPORT</h5>
                <p> At Electro, your <br /> satisfaction is our <br /> priority.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row end text-center ">
         <p>HIGHLY SKILLED</p>
         <h2>Meet our teams</h2>
         <div className="my-5 d-flex">

          <div className="col-lg-4 col-12 my-2" data-aos="fade-down">
            <div>
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/team-2.jpg?v=1685445233&width=352"
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
          <div className="col-lg-4 col-12 my-2" data-aos="fade-down">
            <div>
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/team-3.jpg?v=1685445233&width=352"
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
          <div className="col-lg-4 col-12 my-2" data-aos="fade-down">
            <div>
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/team-4.jpg?v=1685445233&width=352"
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
    </div>
  );
};

export default About;

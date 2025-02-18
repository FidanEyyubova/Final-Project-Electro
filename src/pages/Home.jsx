import React, { useEffect } from "react";
import { FaArrowRightLong, FaCircle } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import TopPicks from "./TopPicks";
import { IoMdTime } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
          Aos.init({ duration: 1000 });
        }, []);
  return (
    <div className="home">
      <div className="container-fluid p-0">
        <div className="row first g-0">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-electronics-slider-images-02.jpg?v=1707714277"
                  className="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-lg-flex flex-column align-items-end justify-content-center h-100 text-start d-md-flex d-flex">
                  <div data-aos="fade-right">
                    <p>Music is my escape</p>
                    <h1 className="pb-5 pt-1">
                      Headphone on <br /> world off
                    </h1>
                    <Link className="shop p-3">
                      SHOP NOW <FaArrowRightLong className="mb-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-electronics-slider-images-01.jpg?v=1698927863"
                  className="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-lg-flex flex-column align-items-end justify-content-center h-100 text-start d-md-flex d-flex">
                  <div>
                    <p>Good quality full guarantee</p>
                    <h1 className="pb-5 pt-1">
                      Luxury AD65 <br /> smart watch
                    </h1>
                    <Link className="shop p-3">
                      SHOP NOW <FaArrowRightLong className="mb-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row second g-0 mb-5 d-flex  justify-content-center">
          <div className="header d-flex">
            <h2 className="mx-5">Popular Category</h2>
          </div>
          <div className="row d-flex justify-content-center align-items-center py-4 three">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-flex justify-content-center align-items-center">
                <div className="category d-flex flex-column justify-content-center align-items-center mb-4 pt-4">
                  <img
                    src="https://kontakt.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-smw-1106-sw-0513_1.png"
                    alt=""
                    className="py-3"
                  />
                  <div className="d-flex gap-5 capt px-2 justify-content-center">
                    <p className="mt-3">Smart Watch</p>
                    <div>
                      <p className="mt-3 item">6 items</p>
                      <button className="mt-3 py-2 px-1">Shop now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-flex justify-content-center align-items-center">
                <div className="category d-flex flex-column justify-content-center align-items-center mb-4 pt-4">
                  <img
                    src="https://kontakt.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/t/m/tm-dg-acs-1109-hg-0214_1.png"
                    alt=""
                    className="py-3"
                  />
                  <div className="d-flex gap-5 capt px-2 justify-content-center">
                    <p className="mt-3">Headphones</p>
                    <div>
                      <p className="mt-3 item">6 items</p>
                      <button className="mt-3 py-2 px-1">Shop now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-flex justify-content-center align-items-center">
                <div className="category d-flex flex-column justify-content-center align-items-center mb-4 pt-4">
                  <img
                    src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-phv-1106-ph-0152_1-5d0d78b4.webp"
                    alt=""
                    className="py-3"
                  />
                  <div className="d-flex gap-5 capt px-4 justify-content-center">
                    <p className="mt-3">Camera</p>
                    <div>
                      <p className="mt-3 item">6 items</p>
                      <button className="mt-3 py-2 px-1">Shop now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-flex justify-content-center align-items-center">
                <div className="category d-flex flex-column justify-content-center align-items-center mb-4 pt-4">
                  <img
                    src="https://kontakt.az/media/catalog/product/cache/d2b8752f559224c02f64bf8d7f0b2ee3/n/e/new_project_-_2023-05-18t095725.588_1.png"
                    alt=""
                    className="py-3"
                  />
                  <div className="d-flex gap-5 justify-content-center capt px-2">
                    <p className="mt-3">Mouse</p>
                    <div>
                      <p className="mt-3 item">6 items</p>
                      <button className="mt-3 py-2 px-1">Shop now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 motion">
          <div className="col-12">
          <div className="overflow-hidden">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="text-4xl font-bold"
      >
        <div className="d-flex gap-5 py-3 text justify-content-between">

         <span className="mx-1">Summer sale discount 40% off all products</span>
         <span className="mx-1">Explore the latest shopping related offers</span>
         <span className="mx-1">Free delivery on orders over $100 discount.</span>
        </div>
      </motion.div>
    </div>
          </div>
        </div>
        <div className="row g-0">
          <TopPicks />
        </div>
        <div className="row g-0 delivery py-5 my-5">
          <div className="col-lg-4 col-12">
            <div className="d-flex justify-content-center">
              <div>
                <IoMdTime className="mx-3 icon" />
              </div>
              <div>
                <h4>90 Days Return</h4>
                <p>
                  If goods have problems, consectetur <br /> adipim scing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-flex justify-content-center">
              <div>
                <TbTruckDelivery className="mx-3 icon" />
              </div>
              <div>
                <h4>Free Delivery</h4>
                <p>
                  For all oders over $50, consectetur <br /> adipim scing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-flex justify-content-center">
              <div>
                <MdPayment className="mx-3 icon" />
              </div>
              <div>
                <h4>Secure Payment</h4>
                <p>
                  100% secure payment, consectetur <br /> adipim scing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

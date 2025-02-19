import React, { useEffect } from "react";
import { FaArrowRightLong, FaCircle } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import TopPicks from "./TopPicks";
import { IoMdReturnLeft, IoMdTime } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoReturnDownBack } from "react-icons/io5";
import { RiPriceTagLine, RiSecurePaymentLine } from "react-icons/ri";

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
                  <div data-aos="fade-right">
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
                  <span className="mx-1">
                    Summer sale discount 40% off all products
                  </span>
                  <span className="mx-1">
                    Explore the latest shopping related offers
                  </span>
                  <span className="mx-1">
                    Free delivery on orders over $100 discount.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <TopPicks />
        </div>
        <div className="row g-0">
          <div className="col-12">
            <div className="back py-4"></div>
          </div>
        </div>
        <div className="row g-0 d-flex justify-content-center align-items-center del pt-4">
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
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuSofa } from "react-icons/lu";
import { MdOutlineArrowForwardIos, MdOutlineTableBar } from "react-icons/md";
import { PiChair, PiDresser, PiDresserLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Home = () => {
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
                  src="https://mojoboutique.com/cdn/shop/articles/organic_modern_furniture_1344x.jpg?v=1704830548"
                  className="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-lg-flex flex-column align-items-start justify-content-center h-100 text-start d-md-flex d-flex">
                  <p className="text-center">
                    Discover a curated collection of modern, classic, and
                    custom-made furniture designed to transform your living
                    spaces. At Modeluxe, we blend quality craftsmanship with
                    innovative design to bring you pieces that are as functional
                    as they are beautiful. Whether you're furnishing your living
                    room, bedroom, office, or outdoor space, we offer a wide
                    range of options to suit every taste and budget.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://eqsalon.com/wp-content/uploads/2024/01/Modern-Furniture-Store-In-Chicago.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-lg-flex flex-column align-items-start justify-content-center h-100 text-start d-md-flex d-flex">
                  <p className="text-center">
                    Discover a curated collection of modern, classic, and
                    custom-made furniture designed to transform your living
                    spaces. At Modeluxe, we blend quality craftsmanship with
                    innovative design to bring you pieces that are as functional
                    as they are beautiful. Whether you're furnishing your living
                    room, bedroom, office, or outdoor space, we offer a wide
                    range of options to suit every taste and budget.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.fcilondon.co.uk/cdn-cgi/image/quality=75,f=auto/site-assets/blog/content/52886/frigerio-cooper-sofa-1-1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-lg-flex flex-column align-items-start justify-content-center h-100 text-start d-md-flex d-flex">
                  <p className="text-center">
                    Discover a curated collection of modern, classic, and
                    custom-made furniture designed to transform your living
                    spaces. At Modeluxe, we blend quality craftsmanship with
                    innovative design to bring you pieces that are as functional
                    as they are beautiful. Whether you're furnishing your living
                    room, bedroom, office, or outdoor space, we offer a wide
                    range of options to suit every taste and budget.
                  </p>
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
        <div className="row second g-0 py-4">
          <div className="header d-flex">
            <h3 className="mx-3">
              Modeluxe Category <MdOutlineArrowForwardIos className="icon" />
            </h3>
          </div>
          <div className="row d-flex justify-content-center align-items-center py-4">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-flex justify-content-center align-items-center">
                <div className="category d-flex flex-column justify-content-center align-items-center mb-4">
                  <LuSofa className="mt-4" />
                  <h4 className="name py-3">Sofa</h4>
                  <Link className="next d-none p-2"><FaArrowRightLong /></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-flex justify-content-center align-items-center">
                <div className="category d-flex flex-column justify-content-center align-items-center mb-4">
                <PiChair className="mt-4" />
                  <h4 className="name py-3">Chair</h4>
                  <Link className="next d-none p-2"><FaArrowRightLong /></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-flex justify-content-center align-items-center">
                <div className="category d-flex flex-column justify-content-center align-items-center mb-4">
                <MdOutlineTableBar className="mt-4" />

                  <h4 className="name py-3">Table</h4>
                  <Link className="next d-none p-2"><FaArrowRightLong /></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-flex justify-content-center align-items-center">
                <div className="category d-flex flex-column justify-content-center align-items-center mb-4">
                <PiDresser className="mt-4" />
                  <h4 className="name py-3">Storage</h4>
                  <Link className="next d-none p-2"><FaArrowRightLong /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

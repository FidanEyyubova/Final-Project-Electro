import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaEuroSign, FaManatSign } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
  return (
    <div className="head d-flex justify-content-center align-items-center text-center">
      <div className="container-fluid">
        <div className="row w-100 my-2 d-flex justify-content-between align-items-center">
          <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-start align-items-center">
            <button type="button" className="btn btn-dark moon  mx-3">
              <IoMdMoon />
            </button>
            <div className="dropdown-center">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="https://freesvg.org/img/UK-union-flag.png" alt="" />
                <small className="mx-1">ENG</small>
              </button>
              <ul className="dropdown-menu  custom-dropdown-menu text-center">
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="https://www.svgrepo.com/show/405416/flag-for-flag-azerbaijan.svg"
                      alt=""
                    />
                    <small className="mx-1">AZ</small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="https://www.svgrepo.com/show/405590/flag-for-flag-russia.svg"
                      alt=""
                    />
                    <small className="mx-1">RU</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-end align-items-center">
            <div className="dropdown-center">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsCurrencyDollar />
                <small>USD</small>
              </button>
              <ul className="dropdown-menu  custom-dropdown-menu text-center">
                <li>
                  <a className="dropdown-item" href="#">
                    <FaManatSign />
                    <small className="mx-1">AZN</small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaEuroSign />
                    <small className="mx-1">EUR</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

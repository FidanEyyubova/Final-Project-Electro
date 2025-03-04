import React from "react";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
  return (
    <div className="head d-flex justify-content-center align-items-center text-center py-1">
      <div className="container-fluid">
        <div className="row w-100 my-2 d-flex justify-content-between align-items-center">
          <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-start align-items-center">
            <div className="dropdown-center mx-3 ">
              <button
                className=" dropdown-toggle lang"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="mx-1">ENG</span>
              </button>
              <ul className="dropdown-menu  dropdown-menu-end custom-dropdown-menu text-center">
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="mx-1">AZ</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="mx-1">RU</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-end align-items-center">
            <div>
              <button type="button" className="mode">
                <IoMdMoon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

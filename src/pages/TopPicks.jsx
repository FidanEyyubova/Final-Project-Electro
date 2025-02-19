import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { Link } from "react-router-dom";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const TopPicks = () => {
  const { product } = useContext(MyContext);

  return (
    <div className="top py-5">
      <div className="container-fluid">
        <div className="row text-start">
          <div className="col-12">
            <h1 className="py-3 mx-4">Trending products</h1>
          </div>
        </div>
        <div></div>
        <div className="row mx-3 py-4">
          {product.slice(0, 8).map((el) => (
            <div
              key={el.id}
              className="col-lg-3 col-md-4 col-sm-6 col-12 product"
            >
              <div className="cont my-2 d-flex flex-column justify-content-center align-items-center">
                <div className="image  text-center py-2 pt-5">
                  <img src={el.img} />
                  <div className="d-flex justify-content-between align-items-center mx-3">
                     <Link className="icon px-2 pb-1"><CiHeart /></Link>
                     <Link className="icon px-2 pb-1"><CiShoppingBasket /></Link>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center py-2">
                  <div className="py-2">
                    <h5>
                      <b>{el.name}</b>
                    </h5>
                  </div>
                  <div className="d-flex gap-2">
                    {el.prevprice !== null && el.prevprice !== "" && (
                      <p className="prev">${el.prevprice}.00</p>
                    )}
                    <p className="price">${el.price}.00</p>
                  </div>
                  <div className="d-flex">
                    <p className="star"><FaStar /></p>
                    <p className="mt-1 mx-2"><b>{el.rate}</b></p>
                  </div>
                </div>
                {el.percent !== null && el.percent !== "" && (
                  <div className="percent px-2">
                    <p>{el.percent}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-3">
          <Link className="view px-5 py-3" to={"/products"}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;

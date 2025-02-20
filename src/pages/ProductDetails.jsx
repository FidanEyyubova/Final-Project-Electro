import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import ReactImageMagnify from "react-image-magnify";
import { FaCircle, FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useContext(MyContext);
  const productDetail = product?.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-detail py-5">
        <div className="container">

      <div className="row g-0 py-5">
        <div className="col-lg-7 d-flex justify-content-center py-4">
          {productDetail ? (
            <div className="immg mx-5 py-4">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: productDetail.name,
                    isFluidWidth: true,
                    src: productDetail.img,
                  },
                  largeImage: {
                    src: productDetail.img,
                    width: 540,
                    height: 540,
                  },
                  enlargedImagePosition: "over",
                  fadeDurationInMs: 0,
                }}
              />
            </div>
          ) : (
            <p>Product not found</p>
          )}
        </div>
        <div className="col-lg-4 d-flex gap-1 justify-content-center flex-column">
          {productDetail && (
            <>
              <div>
                <h3>{productDetail.name}</h3>
              </div>
              <div className="d-flex">
                <p className="star"><FaStar /></p>
                <p className="mt-1 mx-1 pro">{productDetail.rate}</p>
              </div>
              <div className="d-flex align-items-center">
              {productDetail.prevprice !== null && productDetail.prevprice !== "" && (
                          <h5 className="prev"><del>${productDetail.prevprice}.00</del></h5>
                        )}
                <h2 className="mx-2">${productDetail.price}.00</h2>
              </div>
              <div className="d-flex gap-2 py-2">
                <div className="circle mt-1"></div>
                <h6>{productDetail.stock}</h6>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div className="quan py-2 px-2">

                <button className="inc" onClick={decreaseQuantity}><HiMinus /></button>
                <span className="mx-4">{quantity}</span>
                <button className="inc" onClick={increaseQuantity}><FiPlus /></button>
                </div>
              </div>
              <div className="d-flex gap-3 py-3 flex-column">
                <button className="add buy">BUY NOW</button>
                <button className="add cart">ADD TO CARD</button>
                <button className="add cart">ADD TO WISHLIST</button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="row"></div>
        </div>
        <div className="row g-0">
            <div className="col-12">
              <div className="back py-4"></div>
            </div>
          </div>
    </div>
  );
};

export default ProductDetails;
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import ReactImageMagnify from "react-image-magnify";
import { FaStar } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

const ProductDetails = () => {
  const { id } = useParams();
  const { product,addToCart } = useContext(MyContext);
  const productDetail = product?.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (productDetail) {
      addToCart({ ...productDetail, quantity });
    }
  };


  const [open, setOpen] = useState(false);

  const handleDesc = () => {
    setOpen(true);
  };

  const handleAdd = () => {
    setOpen(false);
  };


  
  return (
    <div className="product-detail py-5">
      <div className="container">
        <div className="row g-0 py-5">
          <div className="col-lg-7 d-flex justify-content-center py-4">
            {productDetail ? (
              <div className="immg mx-5 mt-4 py-4">
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
                  <p className="star">
                    <FaStar />
                  </p>
                  <p className="mt-1 mx-1 pro">{productDetail.rate}</p>
                </div>
                <div className="d-flex align-items-center">
                  {productDetail.prevprice !== null &&
                    productDetail.prevprice !== "" && (
                      <h5 className="prev">
                        <del>${productDetail.prevprice}.00</del>
                      </h5>
                    )}
                  <h2 className="mx-2">${productDetail.price}.00</h2>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="quan py-2 px-2">
                    <button className="inc" onClick={decreaseQuantity}>
                      <HiMinus />
                    </button>
                    <span className="mx-4">{quantity}</span>
                    <button className="inc" onClick={increaseQuantity}>
                      <FiPlus />
                    </button>
                  </div>
                </div>
                <div className="d-flex gap-3 py-3 flex-column">
                  <button className="add buy">BUY NOW</button>
                  <button className="add cart" onClick={handleAddToCart}
                  >ADD TO CART</button>
                  <button className="add cart"
                  
                  >ADD TO WISHLIST</button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="row"></div>
      </div>
      <div>
        <div className="row g-0">
          <div className="col-12">
            <div className="d-flex justify-content-center gap-5  des-add py-4 border-bottom">
              <button onClick={handleAdd}>DESCRIPTION</button>
              <button onClick={handleDesc}>ADDITIONAL INFO</button>
            </div>
          </div>
        </div>
        <div className="row g-0 text py-4 d-flex justify-content-center align-items-center">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div>
              {productDetail && (
                <div>
                  {open ? (
                    <div>
                      <table>
                        <tr>
                          <td>
                            <b>Category</b>
                          </td>
                          <td>{productDetail.category}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Brand</b>
                          </td>
                          <td>{productDetail.brand}</td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <div>
                      <h2>{productDetail.desc[0]}</h2>
                      <p>{productDetail.desc[1]}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

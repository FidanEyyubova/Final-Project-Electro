import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { GoStarFill } from "react-icons/go";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const AddtoCart = () => {
  const { cart, clearCart, removeFromCart, addToCart } = useContext(MyContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(null);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(newTotal);

    if (cart.length === 0) {
      setDiscountAmount(0);
      setTotalWithDiscount(null);
    } else if (discountAmount > 0) {
      setTotalWithDiscount((newTotal - discountAmount).toFixed(2));
    } else {
      setTotalWithDiscount(null);
    }
  }, [cart, discountAmount]);

  const applyDiscount = () => {
    if (cart.length === 0) {
      setDiscountAmount(0);
      setTotalWithDiscount(null);
      setDiscount("");
      setTotalPrice(0);
      return;
    }

    let discountValue = 0;
    let newTotal = totalPrice;

    if (discount === "GAME20") {
      discountValue = totalPrice * 0.2;
      newTotal = totalPrice - discountValue;
    }

    setDiscountAmount(discountValue.toFixed(2));
    setTotalWithDiscount(newTotal.toFixed(2));
    setDiscount("");
  };

  return (
    <div className="wishlist py-4">
      <div className="container-fluid">
        <div className="wishlist-header">
          <div className="d-flex justify-content-between align-items-center px-5 py-4">
            <h1 className={cart.length === 0 ? "mx-auto text-center" : ""}>
              My Cart
            </h1>
            {cart.length > 0 && (
              <button
                className="clear"
                onClick={() => {
                  clearCart();
                  setDiscountAmount(0);
                  setTotalWithDiscount(null);
                }}
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>

        <div className="row d-flex justify-content-center py-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-center">
            {cart.length === 0 ? (
              <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                <h4 className="text-center text-muted text">
                  Your cart is empty! <br /> Add your favorite games now and
                  never <br /> miss a great deal!
                </h4>
                <button className="shop-b mb-4">
                  <Link className="shop" to={"/game"}>
                    Back to the shop
                  </Link>
                </button>
              </div>
            ) : (
              cart.map((el) => (
                <div
                  key={el.id}
                  className="col-md-10 col-sm-12 d-flex flex-column justify-content-center align-items-center"
                >
                  <div className="d-flex wishlist-detail gap-5 px-lg-5 align-items-center mb-4">
                    <div>
                      <img src={el.imgProduct} alt={el.name} />
                    </div>
                    <div>
                      <div className="d-flex justify-content-between mb-2">
                        <h3>{el.name}</h3>
                        <p className="star-p mt-lg-1">
                          <GoStarFill className="star mb-lg-1" /> {el.rate}
                        </p>
                      </div>
                      <div>
                        <p className="genre">Genres</p>
                      </div>
                      <div className="d-flex flex-wrap mb-2">
                        {el.genres?.map((genre, index) => (
                          <p key={index} className="prop text-center mx-1 py-1">
                            {genre}
                          </p>
                        ))}
                      </div>
                      <div>
                        {el.prevprice && (
                          <p className="prev">
                            <del>${el.prevprice}</del>
                          </p>
                        )}
                        <h5 className="price">
                          <b>${el.price}</b>
                        </h5>
                      </div>
                      <div className="d-flex justify-content-end mt-3">
                        <button
                          className="remove"
                          onClick={() => {
                            removeFromCart(el.id);
                            if (cart.length === 0) {
                              // Since the item is being removed, check if it's the last one.
                              setDiscountAmount(0);
                              setTotalWithDiscount(null);
                            }
                          }}
                        >
                          Remove
                        </button>
                        <button className="add" onClick={() => addToCart(el)}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right side: Order summary (always visible) */}
          <div className="col-lg-4 d-flex justify-content-start flex-column ">
            <div className="order-summary sticky-summary pt-4 px-4">
              <h4 className="pb-3">Order Summary</h4>
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>

              <div className="d-flex flex-column">
                {discountAmount > 0 && (
                  <div className="d-flex justify-content-between">
                    <p>Discount Applied</p>
                    <p className="discount">- ${discountAmount}</p>
                  </div>
                )}

                {/* Final Total */}
                <div className="d-flex justify-content-between mb-4">
                  <h5>
                    <b>Total</b>
                  </h5>
                  <h5>
                    <b>${totalWithDiscount || totalPrice.toFixed(2)}</b>
                  </h5>
                </div>

                {/* Discount Code Input */}
                <div className="d-flex gap-2">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="addon-wrapping">
                      <IoTicketOutline />
                    </span>
                    <input
                      type="text"
                      placeholder="Enter discount code"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div>
                  <div>
                    <button onClick={applyDiscount} className="apply">
                      Apply
                    </button>
                  </div>
                </div>

                <button disabled={cart.length === 0} className="checkout">
                  Go to Checkout
                  <MdKeyboardDoubleArrowRight className="icon mx-1" />
                </button>
              </div>
            </div>
            <div className="img-order text-center mt-3">
              <img src="../src/images/disscount.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;

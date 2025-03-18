import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { GoStarFill } from "react-icons/go";
import { IoTicketOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const AddtoCart = () => {
  const { cart, clearCart, removeFromCart, addToCart } = useContext(MyContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
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

    const hasDiscountedProduct = cart.some(
      (item) => item.prevprice && item.prevprice > item.price
    );

    if (discount === "electro20") {
      if (hasDiscountedProduct) {
        alert(
          "You cannot apply GAME20 discount when a product already has a discount."
        );
        return;
      }

      let discountValue = totalPrice * 0.2;
      let newTotal = totalPrice - discountValue;

      setDiscountAmount(discountValue.toFixed(2));
      setTotalWithDiscount(newTotal.toFixed(2));
    }

    setDiscount("");
  };

  return (
    <div className="wishlist  py-4">
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
                  Your cart is empty! <br /> Add your favorite products now and
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
                  <div className="d-flex wishlist-detail px-3 gap-3 align-items-center mb-4 wishlist-cart">
                    <div>
                      <img src={el.img} alt={el.name} />
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                      <h5 className="name" onClick={() => navigate(`/products/${el.id}`)}>{el.name}</h5>
                        <div className="d-flex gap-1 pb-2">
                          <p>
                            <GoStarFill className="star" />
                          </p>
                          <p> {el.rate}</p>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap">
                        <p>{el.desc[1].slice(0, 100)}...</p>
                      </div>
                      <div className="d-flex gap-1">
                        {el.prevprice && (
                          <p className="prev">
                            <del>${el.prevprice}</del>
                          </p>
                        )}
                        <h5 className="price">
                          <b>${el.price}</b>
                        </h5>
                      </div>
                      <div className="d-flex justify-content-end px-3">
                        <button
                          className="remove"
                          onClick={() => {
                            removeFromCart(el.id);
                            if (cart.length === 0) {
                              setDiscountAmount(0);
                              setTotalWithDiscount(null);
                            }
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-lg-4 d-flex justify-content-start flex-column order">
            <div className="order-summary sticky-summary pt-4 px-4">
              <h4 className="pb-3">Order Summary</h4>
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>{totalPrice.toFixed(2)}</p>
                
              </div>

              <div className="d-flex flex-column">
                {discountAmount > 0 && (
                  <div className="d-flex justify-content-between">
                    <p>Discount Applied</p>
                    <p className="discount">- ${discountAmount}</p>
                  </div>
                )}

                <div className="d-flex justify-content-between mb-4">
                  <h5>
                    <b>Total</b>
                  </h5>
                  <h5>
                    <b>${totalWithDiscount || totalPrice.toFixed(2)}</b>
                  </h5>
                </div>

                <div className="d-flex gap-2">
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <IoTicketOutline />
                    </span>
                    <input
                      type="text"
                      placeholder="Enter discount code"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div>
                  <button onClick={applyDiscount} className="apply">
                    Apply
                  </button>
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

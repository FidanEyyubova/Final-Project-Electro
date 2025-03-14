import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { Link } from "react-router-dom";
import { GoStarFill } from "react-icons/go";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist, addToCart } =
    useContext(MyContext);
  return (
    <div className="wishlist wishlist-first py-4">
      <div className="container-fluid">
        <div className="wishlist-header">
          <div className="d-flex justify-content-between align-items-center px-5 py-4">
            <h1 className={wishlist.length === 0 ? "mx-auto text-center" : ""}>
              My Wishlist
            </h1>
            {wishlist.length > 0 && (
              <button className="clear" onClick={clearWishlist}>
                Clear Wishlist
              </button>
            )}
          </div>
        </div>
        {wishlist.length === 0 ? (
          <div className="text-center d-flex flex-column justify-content-center align-items-center gap-4">
            <p className="text-center empty">
              Your wishlist is empty! Add your favorite games now and never miss
              a great deal!
            </p>
            <button className="shop-b mb-4">
              <Link className="shop" to={"/game"}>
                Back to the shop
              </Link>
            </button>
          </div>
        ) : (
          <div className="row d-flex flex-wrap justify-content-center align-items-center py-4">
            {wishlist.map((el, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center"
              >
                <div className="d-flex wishlist-detail justify-content-between px-lg-5  align-items-center mb-4">
                  <div>
                    <img src={el.img} alt="" />
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <h3>{el.name}</h3>
                      <p className=" star-p mt-lg-1">
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
                      {el.prevprice !== null && el.prevprice !== "" && (
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
                        onClick={() => removeFromWishlist(el.id)}
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

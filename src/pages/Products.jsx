import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { GrCubes } from "react-icons/gr";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const { addToCart, addToWishlist } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1000, once: true });
  }, []);

  const {
    product,
    setProduct,
    filteredCategory,
    filteredBrand,
    maxPrice,
    rate,
    setFilteredCategory,
    setFilteredBrand,
    setMaxRate,
    setMaxPrice,
    filteredStock,
    setFilteredStock,
  } = useContext(MyContext);

  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(() => {
    setSortedProducts(product);
  }, [product]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sorted = [...product];

    switch (value) {
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        return;
    }
    setSortedProducts(sorted);
  };

  const categories = ["All", ...new Set(product.map((el) => el.category))];

  const stocks = ["All", ...new Set(product.map((el) => el.stock))];

  const filteredBrands =
    filteredCategory === "All"
      ? ["All", ...new Set(product.map((el) => el.brand))]
      : [
          "All",
          ...new Set(
            product
              .filter((el) => el.category === filteredCategory)
              .map((el) => el.brand)
          ),
        ];

  const filteredProducts = sortedProducts.filter(
    (el) =>
      (filteredCategory === "All" || el.category === filteredCategory) &&
      (filteredBrand === "All" || el.brand === filteredBrand) &&
      (filteredStock === "All" || el.stock === filteredStock) &&
      el.price <= maxPrice &&
      el.rate <= rate &&
      el.name.toLowerCase().includes(searchProducts.toLowerCase())
  );

  console.log(filteredProducts);
  return (
    <div className="products">
      <div className="container-fluid">
        <div className="row back-img">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h1>
              <i>PRODUCTS</i>
            </h1>
          </div>
        </div>

        <div className="row middle py-4 d-flex gap-5 justify-content-center">
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-4 py-3">
            <div>
              <h5>Search</h5>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="search-input"
                  value={searchProducts}
                  onChange={(e) => setSearchProducts(e.target.value)}
                />
              </div>
              <div>
                <h5>Categories</h5>
                {categories.map((category) => (
                  <div className="py-2" key={category}>
                    <input
                      type="checkbox"
                      name="category"
                      className="mx-2"
                      value={category}
                      checked={filteredCategory === category}
                      onChange={(e) => setFilteredCategory(e.target.value)}
                    />
                    <label>{category}</label>
                  </div>
                ))}
              </div>
              <div>
                <h4>Stock</h4>
                <div>
                  {stocks.map((stock) => (
                    <div key={stock} className="py-2">
                      <input
                        type="checkbox"
                        name="stock"
                        className="mx-2"
                        value={stock}
                        checked={filteredStock === stock}
                        onChange={(e) => setFilteredStock(e.target.value)}
                      />
                      <label>{stock}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4>Brand</h4>
                {filteredBrands.map((brand) => (
                  <div className="py-2" key={brand}>
                    <input
                      type="checkbox"
                      name="category"
                      className="mx-2"
                      value={brand}
                      checked={filteredBrand === brand}
                      onChange={(e) => setFilteredBrand(e.target.value)}
                    />
                    <label>{brand}</label>
                  </div>
                ))}
              </div>

              <div>
                <h4>Max Price: ${maxPrice}</h4>
                <input
                  type="range"
                  className="form-range custom-range"
                  min="0"
                  max="3000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="mb-4">
              <h4>Best Sellers</h4>
              <div className="d-flex flex-column flex-wrap gap-2 mt-4">
                {product.slice(0, 2).map((el) => (
                  <div
                    key={el.id}
                    className="d-flex slm mb-2"
                    style={{ backgroundColor: "white", borderRadius: "10px" }}
                  >
                    <div className="mx-3 py-3">
                      <img
                        src={el.img}
                        alt=""
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="mx-3 pt-3">
                      <p>
                        <b>{el.name.slice(0, 20)}...</b>
                      </p>
                      <p style={{ color: "#F13D45", fontWeight: "600" }}>
                        {el.price}.00
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8 ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 mx-2">
                <GrCubes className="icon-b" />
              </div>
              <div className="d-flex gap-3">
                <p className="mt-2 sort">Sort</p>
                <select className="form mb-2" onChange={handleSortChange}>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="row">
              {filteredProducts.map((el) => (
                <div key={el.id} className="col-md-4">
                  <div className="cont my-2 d-flex flex-column justify-content-center align-items-center">
                    <div className="image  text-center py-2 pt-5">
                      <img src={el.img} />
                      <div className="d-flex justify-content-between align-items-center mx-3">
                        <Link
                          className="icon px-2 pb-1"
                          onClick={() => addToWishlist(el)}
                        >
                          <CiHeart />
                        </Link>
                        <Link
                          className="icon px-2 pb-1"
                          onClick={() => addToCart(el)}
                        >
                          <CiShoppingBasket />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center py-2">
                      <div className="py-2">
                        <h5>
                          <Link to={`/products/${el.id}`}>{el.name}</Link>
                        </h5>
                      </div>
                      <div className="d-flex gap-2">
                        {el.prevprice !== null && el.prevprice !== "" && (
                          <p className="prev">${el.prevprice}.00</p>
                        )}
                        <p className="price">${el.price}.00</p>
                      </div>
                      <div className="d-flex">
                        <p className="star">
                          <FaStar />
                        </p>
                        <p className="mt-1 mx-2">
                          <b>{el.rate}</b>
                        </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

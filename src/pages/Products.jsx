import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { GrCubes } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Products = () => {
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

  const [openTitle, setOpenTitle] = useState(false);

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
    setProduct(sorted);
  };

  const categories = ["All", ...new Set(product.map((el) => el.category))];

  const stocks = [...new Set(product.map((el) => el.stock))];

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

  const handleCategoryChange = (e) => {
    setFilteredCategory(e.target.value);
    setFilteredBrand("All");
  };

  const filteredProducts = product.filter(
    (el) =>
      (filteredCategory === "All" || el.category === filteredCategory) &&
      (filteredBrand === "All" || el.brand === filteredBrand) &&
      el.stock === filteredStock &&
      el.price <= maxPrice &&
      el.rate <= rate
  );

  console.log(filteredProducts);
  return (
    <div className="products">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 image d-flex justify-content-center align-items-center">
            <h1>
              <i>PRODUCTS</i>
            </h1>
          </div>
        </div>

        <div className="row middle">
          <div className="col-lg-4">
            <div>
              <h4>Category</h4>
              <select
                className="form-select mb-2"
                value={filteredCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <h4>Stock</h4>
              <div>
                {stocks.map((stock) => (
                  <div key={stock}>
                    <input
                      type="radio"
                      name="stock"
                      value={stock}
                      checked={filteredStock === stock}
                      onChange={(e) => setFilteredStock(e.target.value)}
                    />
                    <label>{stock}</label>
                  </div>
                ))}
              </div>

              <h4>Brand</h4>
              <select
                className="form-select mb-2"
                value={filteredBrand}
                onChange={(e) => setFilteredBrand(e.target.value)}
              >
                {filteredBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>

              <h4>Max Price: ${maxPrice}</h4>
              <input
                type="range"
                className="form-range"
                min="0"
                max="1700"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <h4>Best Sellers</h4>
              <div className="d-flex flex-column flex-wrap gap-2">
                {product.slice(0, 4).map((el) => (
                  <div key={el.id}>{el.name}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <GrCubes />
                <GiHamburgerMenu />
              </div>
              <div className="d-flex">
                <h5>Sort by</h5>
                <select
                  className="form-select mb-2"
                  onChange={handleSortChange}
                >
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
                        <Link className="icon px-2 pb-1">
                          <CiHeart />
                        </Link>
                        <Link className="icon px-2 pb-1">
                          <CiShoppingBasket />
                        </Link>
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
            <div className="row g-0">
          <div className="col-12">
            <div className="back py-4"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

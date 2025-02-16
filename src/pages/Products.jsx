import { useContext, useState } from "react";
import { MyContext } from "../context/MyProvider";

const Products = () => {
  const {
    product,
    setProduct,
    filteredCategory,
    filteredColor,
    filteredMaterial,
    maxPrice,
    rate,
    setFilteredCategory,
    setFilteredColor,
    setFilteredMaterial,
    setMaxRate,
    setMaxPrice,
  } = useContext(MyContext);

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sorted = [...product];

    switch (value) {
      case "az":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
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
  const colors = ["All", ...new Set(product.flatMap((el) => el.colors))];
  const materials = ["All", ...new Set(product.map((el) => el.material))];

  const filteredProducts = product.filter(
    (el) =>
      (filteredCategory === "All" || el.category === filteredCategory) &&
      (filteredMaterial === "All" || el.material === filteredMaterial) &&
      (filteredColor === "All" || el.colors.includes(filteredColor)) &&
      el.price <= maxPrice &&
      el.rate <= rate
  );

  const handleColorChange = (selectedColor) => {
    setFilteredColor(selectedColor);

    setProduct((prevProducts) =>
      prevProducts.map((item) => {
        if (item.colors.includes(selectedColor)) {
          const newCheckImg = Object.keys(item.checkImg).reduce(
            (acc, color) => {
              acc[color] = false;
              return acc;
            },
            {}
          );
          newCheckImg[selectedColor] = true;

          return { ...item, checkImg: newCheckImg };
        }
        return item;
      })
    );
  };

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

        <div className="row">
          <div className="col-lg-4">
            
            <div>
              <h4>Category</h4>
              <select
                className="form-select mb-2"
                value={filteredCategory}
                onChange={(e) => setFilteredCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <h4>Material</h4>
              <select
                className="form-select mb-2"
                value={filteredMaterial}
                onChange={(e) => setFilteredMaterial(e.target.value)}
              >
                {materials.map((material) => (
                  <option key={material} value={material}>
                    {material}
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
              <h4>Color</h4>
              <div className="d-flex flex-wrap gap-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: color,
                      border:
                        filteredColor === color
                          ? "3px solid black"
                          : "1px solid lightgray",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                    title={color}
                    onClick={() => handleColorChange(color)}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <h4>Best Sellers</h4>
              <div className="d-flex flex-column flex-wrap gap-2">
                {product.slice(0,4).map((el) => (
                  <div>{el.title}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8">
          <div>
          <h4>Sort by</h4>
            <select className="form-select mb-2" onChange={handleSortChange}>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div key={item.id} className="col-md-4">
                    <div className="card">
                      <div className="text-center">
                        {Object.keys(item.checkImg).map((color) =>
                          item.checkImg[color] ? (
                            <img
                              key={color}
                              src={item.linkImg[color]}
                              alt={color}
                              className="card-img-top"
                            />
                          ) : null
                        )}
                      </div>
                      <div className="body">
                        <h5 className="title">{item.title}</h5>
                        <p className="category text">Category: {item.category}</p>
                        <p className="material text">Material: {item.material}</p>
                        <p className="price text">
                          <b>${item.price}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products match your selection.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

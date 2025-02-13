import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";

const TopPicks = () => {
  const { product, setProduct } = useContext(MyContext);
  const handleColor = (id, color) => {
    setData((prev) =>
      prev.map((car) => {
        if (car.id === id) {
          const newCheckImg = Object.keys(car.checkImg).reduce((acc, key) => {
            acc[key] = false;
            return acc;
          }, {});

          newCheckImg[color] = true;

          return { ...car, checkImg: newCheckImg };
        }
        return car;
      })
    );
  };

  return (
    <div className="row">
      {product.slice(0,6).map((el) => (
        <div key={el.id} className="col-lg-3 col-md-4 col-6">
          <div>
            {Object.keys(el.checkImg).map((color) =>
              el.checkImg[color] ? <img key={color} src={el.linkImg[color]} alt={color} /> : null
            )}
          </div>
          <div className="color">
            {el.colors?.map((color) => (
              <p
                key={color}
                style={{
                  backgroundColor: color,
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: el.checkImg[color] ? "3px solid black" : "none",
                }}
                onClick={() => handleColor(el.id, color)}
              ></p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopPicks;

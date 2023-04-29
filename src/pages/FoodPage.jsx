import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FoodPage = (props) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity === 0) return;
    else {
      setQuantity(quantity - 1);
    }
  };
  const goBack = () => {
    window.history.back();
  };
  const { title, showImage, price, aboutInfo } = props;
  // console.log(typeof price);

  return (
    <div className="selectedItem">
      <div className="foodpageNav">
        <ul>
          <li>
            <ArrowBackIcon onClick={goBack} />
          </li>
          <li>Details</li>
          <li>
            <FavoriteIcon style={{ color: "red" }} />
          </li>
        </ul>
      </div>
      <div className="displayItem">
        <div className="imageCard">
          <img src={showImage} />
          <h2>{title}</h2>
          {/* <div className="ingredientsDiv">
          <i>Ingredients</i>
          <ul>
            <li>Salmon🍣</li>
            <li>Rice🍚</li>
          </ul>
        </div> */}
        </div>

        <div className="priceDiv">
          <h3>{"$" + price + ".00"}</h3>
          <div className="quantityButton">
            <button onClick={decrement}>-</button>
            <h2>{quantity}</h2>
            <button onClick={increment}>+</button>
          </div>
        </div>
        <div className="aboutItem">
          <h4>About {title}</h4>
          <p>{aboutInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;

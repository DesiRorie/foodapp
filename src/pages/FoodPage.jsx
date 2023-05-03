import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const FoodPage = (props) => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems, addToCart, calculateTotalPrice, setCartItems } =
    useContext(CartContext);
  useEffect(() => {
    calculateTotalPrice();
    console.log(cartItems);
    // console.log(totalPrice);
  }, [cartItems]);

  const CartButton = () => {
    const totalPrice = quantity * price;
    addToCart({
      title: title,
      price: price,
      quantity: quantity,
      totalPrice: totalPrice,
    });
  };
  const increment = () => {
    setQuantity(quantity + 1);
    // addToCart({
    //   title: `${title}`,
    //   price: `${price}`,
    // });
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
          <button id="addToCart" onClick={CartButton}>
            Add to cart
          </button>
        </div>
        <div className="aboutItem">
          <h4>About {title}</h4>
          <p>{aboutInfo}</p>
        </div>
      </div>
      <div className="cartTotal">
        <div className="cartTotal1">
          <h2>
            {cartItems ? `$ ${calculateTotalPrice()}` : "No items in cart"}
          </h2>
          <span>Total Price</span>
        </div>
        <div className="cartTotal2">
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;

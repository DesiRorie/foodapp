import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import sushi from "../assets/california-roll.jpg";
import noodles from "../assets/udonNoodles.jpeg";
import gyoza from "../assets/gyoza.jpeg";
import koreanBbq from "../assets/koreanBBQ.jpeg";

const Food = () => {
  return (
    <div className="foodDiv">
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 5.0
        </div>
        <Link to="/foodpage/california-roll" className="foodTitle">
          <img src={sushi} />
          <h3>California Roll</h3>
        </Link>

        <b>$8.00</b>
        <AddShoppingCartIcon />
      </div>

      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.6
        </div>
        <Link to="/foodpage/udon-noodles" className="foodTitle">
          <img src={noodles} />

          <h3>Udon Noodles</h3>
        </Link>
        <b>$13.00</b>
        <AddShoppingCartIcon />
      </div>
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 5.0
        </div>
        <Link to="/foodpage/gyoza" className="foodTitle">
          <img src={gyoza} />
          <h3>Gyoza</h3>
        </Link>
        <b>$5.00</b>
        <AddShoppingCartIcon />
      </div>
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.0
        </div>
        <Link to="/foodpage/korean-bbq-wings" className="foodTitle">
          <img src={koreanBbq} />
          <h3>Korean BBQ Wings</h3>{" "}
        </Link>
        <b>$15.00</b>
        <AddShoppingCartIcon />
      </div>
    </div>
  );
};

export default Food;

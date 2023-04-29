import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import sushi from "../assets/california-roll.jpg";
import noodles from "../assets/udonNoodles.jpeg";

const Food = () => {
  return (
    <div className="foodDiv">
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 5.0
        </div>
        <img src={sushi} />
        <Link to="/foodpage" className="foodTitle">
          <h4>California Roll</h4>
        </Link>

        <b>$8.00</b>
        <AddShoppingCartIcon />
      </div>

      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.6
        </div>
        <img src={noodles} />
        {/* <img /> */}
        <Link to="/foodpage" className="foodTitle">
          <h4>Udon Noodles</h4>
        </Link>
        <b>$13.00</b>
        <AddShoppingCartIcon />
      </div>
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 5.0
        </div>
        {/* <img /> */}
        <Link to="/foodpage" className="foodTitle">
          <h4>Gyoza</h4>
        </Link>
        <b>$5.00</b>
        <AddShoppingCartIcon />
      </div>
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.0
        </div>
        {/* <img /> */}
        <Link to="/foodpage" className="foodTitle">
          <h4>Korean BBQ Wings</h4>{" "}
        </Link>
        <b>$15.00</b>
        <AddShoppingCartIcon />
      </div>
    </div>
  );
};

export default Food;

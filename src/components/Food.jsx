import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Food = () => {
  return (
    <div className="foodDiv">
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.6
        </div>
        {/* <img /> */}
        <h4>California Roll</h4>
        <b>$24.00</b>
        <AddShoppingCartIcon />
      </div>
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.6
        </div>
        {/* <img /> */}
        <h4>Udon Noodles</h4>
        <b>$24.00</b>
        <AddShoppingCartIcon />
      </div>
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.6
        </div>
        {/* <img /> */}
        <h4>Gyoza</h4>
        <b>$24.00</b>
        <AddShoppingCartIcon />
      </div>
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.6
        </div>
        {/* <img /> */}
        <h4>Korean BBQ Wings</h4>
        <b>$24.00</b>
        <AddShoppingCartIcon />
      </div>
    </div>
  );
};

export default Food;

import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Food = () => {
  return (
    <div className="foodDiv">
      <div className="foodCard">
        <span>
          <StarIcon /> 4.6
        </span>
        <img />
        <h4>California Roll</h4>
        <b>$24.00</b>
        <AddShoppingCartIcon />
      </div>
      <div className="foodCard">
        <span>
          <StarIcon /> 4.6
        </span>
        <img />
        <h4>California Roll</h4>
        <b>$24.00</b>
        <AddShoppingCartIcon />
      </div>
    </div>
  );
};

export default Food;

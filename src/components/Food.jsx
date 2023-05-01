import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import sushi from "../assets/california-roll.jpg";
import noodles from "../assets/udonNoodles.jpeg";
import gyoza from "../assets/gyoza.jpeg";
import koreanBbq from "../assets/koreanBBQ.jpeg";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Food = () => {
  const { cartItems, addToCart, calculateTotalPrice, setCartItems } =
    useContext(CartContext);

  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (food) => {
  //   setCartItems([...cartItems, food]);
  // };

  // const calculateTotalPrice = () => {
  //   let totalPrice = 0;
  //   cartItems.forEach((item) => {
  //     totalPrice += item.price;
  //   });
  //   return totalPrice;
  // };

  useEffect(() => {
    console.log(cartItems);
    // console.log(totalPrice);
  }, [cartItems]);

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
        <AddShoppingCartIcon
          id="addToCartStyle"
          onClick={() =>
            addToCart({
              title: "California Roll",
              price: 8.0,
            })
          }
        />
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
        <AddShoppingCartIcon
          id="addToCartStyle"
          onClick={() =>
            addToCart({
              title: "Udon Noodles",
              price: 13.0,
            })
          }
        />
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
        <AddShoppingCartIcon
          id="addToCartStyle"
          onClick={() =>
            addToCart({
              title: "Gyoza",
              price: 5.0,
            })
          }
        />
      </div>
      <div className="foodCard">
        <div className="ratingDiv">
          <StarIcon style={{ color: "gold" }} /> 4.0
        </div>
        <Link to="/foodpage/korean-bbq-wings" className="foodTitle">
          <img src={koreanBbq} />
          <h3>Korean BBQ Wings</h3>
        </Link>
        <b>$15.00</b>
        <AddShoppingCartIcon
          id="addToCartStyle"
          onClick={() =>
            addToCart({
              title: "Korean BBQ Wings",
              price: 15.0,
            })
          }
        />
      </div>
    </div>
  );
};

export default Food;

// import React, { useState } from "react";
// import StarIcon from "@mui/icons-material/Star";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { Link } from "react-router-dom";
// import sushi from "../assets/california-roll.jpg";
// import noodles from "../assets/udonNoodles.jpeg";
// import gyoza from "../assets/gyoza.jpeg";
// import koreanBbq from "../assets/koreanBBQ.jpeg";

// const Food = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (food) => {
//     setCartItems([...cartItems, food]);
//   };

//   return (
//     <div className="foodDiv">
//       <div className="foodCard">
//         <div className="ratingDiv">
//           <StarIcon style={{ color: "gold" }} /> 5.0
//         </div>
//         <Link to="/foodpage/california-roll" className="foodTitle">
//           <img src={sushi} alt="California Roll" />
//           <h3>California Roll</h3>
//         </Link>

//         <b>$8.00</b>
//         <AddShoppingCartIcon
//           onClick={() =>
//             addToCart({
//               title: "California Roll",
//               price: 8.0,
//               image: sushi,
//             })
//           }
//         />
//       </div>

//       <div className="foodCard">
//         <div className="ratingDiv">
//           <StarIcon style={{ color: "gold" }} /> 4.6
//         </div>
//         <Link to="/foodpage/udon-noodles" className="foodTitle">
//           <img src={noodles} alt="Udon Noodles" />

//           <h3>Udon Noodles</h3>
//         </Link>
//         <b>$13.00</b>
//         <AddShoppingCartIcon
//           onClick={() =>
//             addToCart({
//               title: "Udon Noodles",
//               price: 13.0,
//               image: noodles,
//             })
//           }
//         />
//       </div>
//       <div className="foodCard">
//         <div className="ratingDiv">
//           <StarIcon style={{ color: "gold" }} /> 5.0
//         </div>
//         <Link to="/foodpage/gyoza" className="foodTitle">
//           <img src={gyoza} alt="Gyoza" />
//           <h3>Gyoza</h3>
//         </Link>
//         <b>$5.00</b>
//         <AddShoppingCartIcon
//           onClick={() =>
//             addToCart({
//               title: "Gyoza",
//               price: 5.0,
//               image: gyoza,
//             })
//           }
//         />
//       </div>
//       <div className="foodCard">
//         <div className="ratingDiv">
//           <StarIcon style={{ color: "gold" }} /> 4.0
//         </div>
//         <Link to="/foodpage/korean-bbq-wings" className="foodTitle">
//           <img src={koreanBbq} alt="Korean BBQ Wings" />
//           <h3>Korean BBQ Wings</h3>{" "}
//         </Link>
//         <b>$15.00</b>
//         <AddShoppingCartIcon
//           onClick={() =>
//             addToCart({
//               title: "Korean BBQ Wings",
//               price: 15.0,
//               image: koreanBbq,
//             })
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default Food;

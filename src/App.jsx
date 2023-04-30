import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TopMenu from "./components/TopMenu";
import HomePage from "./pages/HomePage";
import FoodPage from "./pages/FoodPage";

import sushi from "./assets/california-roll.jpg";
import noodles from "./assets/udonNoodles.jpeg";
import gyoza from "./assets/gyoza.jpeg";
import koreanBbq from "./assets/koreanBBQ.jpeg";

function App() {
  const sushiPrice = 8.0;
  const udonPrice = 13.0;
  const gyozaPrice = 5.0;
  const koreanPrice = 15.0;

  return (
    <>
      {/* <TopMenu /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/foodpage">
          <Route
            path="/foodpage/california-roll"
            element={
              <FoodPage
                title="California Roll"
                price={sushiPrice}
                showImage={sushi}
                aboutInfo="The California roll is a type of sushi roll that originated in the United States. It is typically made with sushi rice, seaweed (nori), crab meat or imitation crab, avocado, and cucumber. The roll is often topped with sesame seeds and served with soy sauce, pickled ginger, and wasabi."
              />
            }
          />
          <Route
            path="/foodpage/udon-noodles"
            element={
              <FoodPage
                showImage={noodles}
                price={udonPrice}
                title="Udon Noodles"
                aboutInfo="Udon noodles are a type of thick, wheat-based noodle that originated in Japan. They are a staple in Japanese cuisine and are known for their chewy texture and versatility in various dishes."
              />
            }
          />
          <Route
            path="/foodpage/gyoza"
            element={
              <FoodPage
                showImage={gyoza}
                price={gyozaPrice}
                title="Gyoza"
                aboutInfo="Gyoza typically consists of a thin wheat dough wrapper filled with a mixture of ground meat (commonly pork) and finely chopped vegetables. "
              />
            }
          />
          <Route
            path="/foodpage/korean-bbq-wings"
            element={
              <FoodPage
                showImage={koreanBbq}
                price={koreanPrice}
                title="Korean BBQ Wings"
                aboutInfo="Korean BBQ wings are chicken wings that are marinated and grilled or roasted with a delicious Korean-style barbecue sauce. "
              />
            }
          />
        </Route>
      </Routes>

      <Navbar />
    </>
  );
}

export default App;

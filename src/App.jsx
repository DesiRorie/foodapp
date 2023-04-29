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
                price="$8.00"
                showImage={sushi}
              />
            }
          />
          <Route
            path="/foodpage/udon-noodles"
            element={
              <FoodPage
                showImage={noodles}
                price="$13.00"
                title="Udon Noodles"
              />
            }
          />
          <Route
            path="/foodpage/gyoza"
            element={<FoodPage showImage={gyoza} title="Gyoza" />}
          />
          <Route
            path="/foodpage/korean-bbq-wings"
            element={
              <FoodPage showImage={koreanBbq} title="Korean BBQ Wings" />
            }
          />
        </Route>
      </Routes>

      <Navbar />
    </>
  );
}

export default App;

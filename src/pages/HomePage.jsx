import React from "react";
import { Link } from "react-router-dom";
import Food from "../components/Food";
import TopMenu from "../components/TopMenu";
import BasicModal from "../components/Modal";

const HomePage = () => {
  return (
    <>
      <TopMenu />
      <div className="homePage">
        <div className="specialsDiv">
          <i>Get special discount</i>
          <h3>up to 85%</h3>

          <BasicModal />
        </div>

        <div className="popularFood">
          <div className="query">
            <input type="search" placeholder="Search your food..." />
          </div>
          <div className="popularFoodDiv">
            <h3>Popular Food</h3>
            <Link style={{ color: "black" }}>View all</Link>
          </div>
        </div>
        <Food />
      </div>
    </>
  );
};

export default HomePage;

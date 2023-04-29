import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="navbarDiv">
        <ul className="navbarList">
          <li>
            <Link to="/" onClick={scrollHome}>
              <HomeOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link>
              <FavoriteBorderOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link>
              <PersonOutlinedIcon />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

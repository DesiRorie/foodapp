import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const TopMenu = () => {
  return (
    <div className="topMenu">
      <ul className="menuList">
        <li>
          <MenuIcon />
        </li>
        <li>Your Location</li>
        <li>
          <NotificationsOutlinedIcon />
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

const TopMenu = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [showSideBar, setShowSidebar] = useState(false);
  const [openBiz, setOpenBiz] = useState(true);

  const date = new Date();
  const time = date.getHours();
  const day = date.getDay();

  useEffect(() => {
    if (time > 22) {
      setOpenBiz(false);
    } else if (time < 9) {
      setOpenBiz(false);
    } else if (day === 0) {
      setOpenBiz(false);
    } else {
      setOpenBiz(true);
    }
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  };

  const requestLocation = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    fetchCityName(latitude, longitude);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  const fetchCityName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      console.log(data);
      const city = data.address.state;
      setUserLocation(city);
    } catch (error) {
      console.log(error);
    }
  };
  const byeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <>
      <div className="topMenu">
        <ul className="menuList">
          <li>
            <MenuIcon id="menuIcon" onClick={toggleSidebar} />
          </li>
          <li>
            {userLocation ? (
              <>
                <div className="locationDiv">
                  <LocationOnIcon style={{ color: "red" }} />
                  {userLocation}
                </div>
              </>
            ) : null}
            {!userLocation && (
              <button id="locationButton" onClick={requestLocation}>
                Get Location
              </button>
            )}
          </li>
          <li>
            <NotificationsOutlinedIcon />
          </li>
          <li>{openBiz ? "We are Open" : "Sorry We Are Closed"}</li>
        </ul>
      </div>
      <Sidebar
        byeSidebar={byeSidebar}
        renderBar={showSideBar ? "sidebar" : "dontShow"}
      />
    </>
  );
};

export default TopMenu;

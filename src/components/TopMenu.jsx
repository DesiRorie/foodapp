// import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

// const TopMenu = () => {
//   const successCallback = (position) => {
//     console.log(position);
//   };

//   const errorCallback = (error) => {
//     console.log(error);
//   };

//   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//   return (
//     <div className="topMenu">
//       <ul className="menuList">
//         <li>
//           <MenuIcon />
//         </li>
//         <li>Your Location</li>
//         <li>
//           <NotificationsOutlinedIcon />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default TopMenu;
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const TopMenu = () => {
  const [userLocation, setUserLocation] = useState(null);

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

  return (
    <div className="topMenu">
      <ul className="menuList">
        <li>
          <MenuIcon />
        </li>
        <li>
          {userLocation ? userLocation : null}
          {!userLocation && (
            <button onClick={requestLocation}>Get Location</button>
          )}
        </li>
        <li>
          <NotificationsOutlinedIcon />
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;

import React from "react";

const Sidebar = (props) => {
  return (
    <div className={props.renderBar}>
      <button onClick={props.byeSidebar}>X</button>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

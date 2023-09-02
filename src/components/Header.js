import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav--logo">
          <img src="./troll-face.png" alt="trollface" className="nav--image" />
          <h1>MemeGenerator</h1>
        </div>
        <div className="nav--right">React Course - Project 3</div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-wrap content-center pl-6 pt-6">
      <div className="pr-2">
        <img src={logo} className="h-10" alt="camino" />
      </div>
      <div className="flex flex-wrap content-center">
        <h2 className="text-xl text-gray-900 font-medium">Camino 2021</h2>
      </div>
    </div>
  );
};

export default Header;

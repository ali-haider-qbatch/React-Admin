import React from "react";
import { Image } from "antd";
import Logo from "../Assets/Logo/logo.png";

function Header() {
  return (
    <div className="bg-white  Header-Dashboard position-fixed w-100">
      <Image width={50} src={Logo} className="m-2 ml-4" />
    </div>
  );
}

export default Header;

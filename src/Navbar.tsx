// eslint-disable-next-line no-use-before-define
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div>
      <Link to="/">MAIN</Link>
      <Link to="/about">ABOUT</Link>
    </div>
  );
};

export default Navbar;

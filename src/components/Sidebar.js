import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import { Link } from 'gatsby'


export default props => {

  return (
    <Menu right width="50%" style={{zIndex: 1000}} >
      <h1 className="menuContents">
        <Link to="/">Home</Link>
        <Link to="/jayden">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/listen">Listen</Link>


      </h1>
    </Menu>
  );
};
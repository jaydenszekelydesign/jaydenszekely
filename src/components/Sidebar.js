import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import { Link } from 'gatsby'


export default props => {

  return (
    <Menu right width="75%" style={{zIndex: 1000}} >
      <h1 className="menuContents">
        <Link to="/">Home</Link>
        <Link to="/jayden">Jayden</Link>
        <Link to="/portfolio">My Work</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/work-with-me">Work With Me</Link>
        <Link to="/course">Course</Link>


      </h1>
    </Menu>
  );
};
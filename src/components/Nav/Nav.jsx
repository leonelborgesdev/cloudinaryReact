import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="container_nav">
      <Link to={"/products"}>Productos</Link>
      <Link to={"/sales"}>Ventas</Link>
    </div>
  );
};

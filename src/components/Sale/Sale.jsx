import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sales.css";

export const Sale = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Ventas</h2>
      <button className="button_back" onClick={() => navigate("/")}>
        Volver
      </button>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";

export const Sale = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Ventas</h2>
      <button onClick={() => navigate("/")}>Volver</button>
    </div>
  );
};

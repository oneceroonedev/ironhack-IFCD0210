import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidebar">
      <h2>Rutas</h2>
      <nav>
        <Link to="/home">🏠 Home</Link>
        <Link to="/canciones">🎶 Canciones</Link>
      </nav>
    </div>
  );
};

export default Navbar;
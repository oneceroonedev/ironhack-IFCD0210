import React from "react";
import "./App.css";
import Canciones from "./components/Canciones";
import Aficiones from "./components/Aficiones";

function App() {
  return (
    <div className="container">
      <h1>⭐️ Mis favoritos ⭐️</h1>
      <Aficiones />
      <Canciones />
    </div>
  );
}

export default App;

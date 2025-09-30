import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Canciones from "./components/Canciones";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/canciones" element={<Canciones />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
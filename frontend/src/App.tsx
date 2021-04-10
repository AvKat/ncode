import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes } from "./Routes";
import "./App.css";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default App;

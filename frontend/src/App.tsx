import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

// TODO: Monaco editor

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;

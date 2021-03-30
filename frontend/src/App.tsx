import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

// TODO: Monaco editor

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default App;

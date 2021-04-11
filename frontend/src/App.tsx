import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes } from "./Routes";
import "./App.css";
import { ToastProvider } from "react-toast-notifications";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ToastProvider>
  );
};

export default App;

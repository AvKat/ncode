import React from "react";
import "./spinner.css";

export interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <div className="centered" style={{ height: "inherit" }}>
          <div className="spinner"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;

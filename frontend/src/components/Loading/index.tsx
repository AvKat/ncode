import React from "react";
import "./spinner.css";

export interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <div className="fullscreen centered">
          <div className="spinner"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;

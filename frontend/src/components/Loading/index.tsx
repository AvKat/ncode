import React from "react";
import "./spinner.css";

export interface LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
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

export default React.memo(Loading, (prevProps, nextProps) => {
  return prevProps.isLoading === nextProps.isLoading;
});

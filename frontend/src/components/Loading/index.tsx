import React from "react";
import "./spinner.css";

export interface LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = React.memo(
  ({ isLoading, children }) => {
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
  },
  (prevProps, nextProps) => {
    return prevProps.isLoading === nextProps.isLoading;
  }
);

export { Loading };

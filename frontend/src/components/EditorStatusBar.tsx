import React from "react";
import classNameFromList from "../utils/classNameFromList";
import { Link } from "react-router-dom";
import generateRelativePath from "../utils/generateRelativePath";

interface StatusBarProps {
  pathname: string;
}

const EditorStatusBar: React.FC<StatusBarProps> = ({ pathname }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "30px",
      }}
      className={classNameFromList([
        "border-bottom border-top",
        "border-3",
        "border-dark",
        "bg-warning",
        "font-weight-bold",
        "px-3",
      ])}
    >
      <Link to={generateRelativePath("..", pathname)}>
        <div className={classNameFromList(["bg-warning", "text-dark"])}>
          {"\u2190" + " Back"}
        </div>
      </Link>
    </div>
  );
};

export default EditorStatusBar;

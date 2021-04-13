import React from "react";
import classNameFromList from "../utils/classNameFromList";
import { Link } from "react-router-dom";
import generateRelativePath from "../utils/generateRelativePath";

interface StatusBarProps {
  pathname: string;
  saveContent: () => void;
}

const EditorStatusBar: React.FC<StatusBarProps> = React.memo(
  ({ pathname, saveContent }) => {
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
          "d-flex flex-direction-row",
          "justify-content-around",
        ])}
      >
        <Link to={generateRelativePath("..", pathname)}>
          <div className={classNameFromList(["bg-warning", "text-dark"])}>
            {"\u2190" + " Back"}
          </div>
        </Link>

        <button onClick={saveContent}>Save</button>
      </div>
    );
  }
);

export { EditorStatusBar };

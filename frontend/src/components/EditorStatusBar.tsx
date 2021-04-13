import React from "react";
import classNameFromList from "../utils/classNameFromList";
import { Link } from "react-router-dom";
import generateRelativePath from "../utils/generateRelativePath";
import useStateCallback from "../hooks/useStateCallback";

interface StatusBarProps {
  pathname: string;
  saveContent: () => void;
}

const EditorStatusBar: React.FC<StatusBarProps> = React.memo(
  ({ pathname, saveContent }) => {
    const [disabled, setDisabled] = useStateCallback(false);

    const handleClick = () => {
      if (!disabled) {
        saveContent();
        setDisabled(true, () => {
          setTimeout(() => setDisabled(false), 500);
        });
      }
    };

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
        ])}
      >
        <Link to={generateRelativePath("..", pathname)} style={{ flex: 1 }}>
          <div className={classNameFromList(["bg-warning", "text-dark"])}>
            {"\u2190" + " Back"}
          </div>
        </Link>

        <div style={{ flex: 2, height: "inherit" }}>
          <div
            className={classNameFromList([
              disabled ? "bg-secondary text-dark" : "bg-success text-white",
              "d-flex",
              "align-items-center",
              "justify-content-center",
            ])}
            onClick={handleClick}
            style={{
              cursor: disabled ? "wait" : "pointer",
              width: "100px",
              height: "inherit",
            }}
          >
            Save
          </div>
        </div>
      </div>
    );
  }
);

export { EditorStatusBar };

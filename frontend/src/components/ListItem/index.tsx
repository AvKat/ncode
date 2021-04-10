import React from "react";
import { Link } from "react-router-dom";
import classNameFromList from "../../utils/classNameFromList";
import { styleTypes } from "./styleTypes";

export interface LIProps {
  to: string;
  type?: "file" | "dir" | "other";
}

const ListItem: React.FC<LIProps> = ({ to, type = "other", children }) => {
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <Link to={to}>
        <div
          className={classNameFromList([
            "col-12",
            "px-4 py-2",
            "text-monospace",
          ])}
          style={{
            ...styleTypes[type],
            fontWeight: 500,
            border: "5px solid #3b3a30",
            display: "list-item",
          }}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export { ListItem };

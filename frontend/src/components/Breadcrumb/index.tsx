import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNameFromList from "../../utils/classNameFromList";
import pathToBreadcrumb from "./pathToBreadCrumb";

export interface BreadcrumbPartType {
  name: string;
  url: string;
}

const Breadcrumb: React.FC = () => {
  const [items, setItems] = useState<BreadcrumbPartType[]>([]);
  const { pathname } = useLocation();

  const memoizedPathForBreadcrumb = useMemo(() => pathToBreadcrumb(pathname), [
    pathname,
  ]);

  useEffect(() => {
    setItems(memoizedPathForBreadcrumb);
  }, [pathname]);

  return (
    <nav
      aria-label="breadcrumb"
      className={classNameFromList(["fixed-bottom"])}
    >
      <ol
        className={classNameFromList([
          "breadcrumb",
          "border border-5 border-dark",
          "bg-danger",
          "font-weight-bold",
        ])}
        style={{ margin: 0 }}
      >
        <li className="breadcrumb-item">
          <Link to="/dir" className="link-white">
            START
          </Link>
        </li>

        {items.slice(0, -1).map((item, i) => (
          <li className="breadcrumb-item" key={`${item} - ${i}`}>
            <Link to={item.url} className="link-white">
              {item.name}
            </Link>
          </li>
        ))}

        {items[items.length - 1] && (
          <li
            className={classNameFromList([
              "breadcrumb-item",
              "text-white",
              "active",
            ])}
          >
            {items[items.length - 1].name}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default React.memo(Breadcrumb);

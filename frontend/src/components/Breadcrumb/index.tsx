import React, { useEffect, useState } from "react";
import classNameFromList from "../../utils/classNameFromList";

export interface BreadcrumbProps {
  path: string;
}

export interface LinkType {
  name: string;
  url: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  const [items, setItems] = useState<LinkType[]>([]);

  useEffect(() => {
    const parts = path.split("/").slice(2);
    let res: LinkType[] = [];
    let temp: LinkType | null = null;
    let url = "/#/dir";

    parts.forEach((part) => {
      url += `/${part}`;
      temp = {
        name: part,
        url,
      };
      res.push(temp);
    });

    setItems(res);
  }, [path]);

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
        ])}
        style={{ margin: 0 }}
      >
        <li className="breadcrumb-item">
          <a href="/dir" className="link-white">
            START
          </a>
        </li>

        {items.slice(0, -1).map((item, i) => (
          <li className="breadcrumb-item" key={`${item} - ${i}`}>
            <a href={item.url} className="link-white">
              {item.name}
            </a>
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

export default Breadcrumb;

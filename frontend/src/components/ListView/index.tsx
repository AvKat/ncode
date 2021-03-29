import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import { JSONResponseListItem } from "../../types";
import upDirPath from "../../utils/upDirPath";
import ListItem from "../ListItem";
import Loading from "../Loading";

const ListView: React.FC = () => {
  const [content, setContent] = useState<
    [JSONResponseListItem[], JSONResponseListItem[]]
  >([[], []]);
  const { pathname } = useLocation();

  const fetchData = useFetch("/apis" + pathname);

  useEffect(() => {
    if (fetchData.response) {
      const { data, status } = fetchData.response;
      if (status) {
        setContent([
          data.filter((item: any) => item.dir),
          data.filter((item: any) => !item.dir),
        ]);
      }
    }
  }, [fetchData.response]);

  const getPath = (name: string, i: number) => {
    return i === 1
      ? `${pathname}/${name}`.replace("dir", "file")
      : `${pathname}/${name}`;
  };

  return (
    <Loading isLoading={fetchData.loading}>
      <div style={{ padding: "20px", paddingBottom: "55px" }}>
        {!["/dir", "/dir/"].includes(pathname) && (
          <ListItem type="other" to={upDirPath(pathname)}>
            (up a dir)
          </ListItem>
        )}
        {content.map((list, i) =>
          list.map((item) => (
            <ListItem
              key={`${item.name}-${i}`}
              type={i ? "file" : "dir"}
              to={getPath(item.name, i)}
            >
              {item.name}
            </ListItem>
          ))
        )}
      </div>
    </Loading>
  );
};

export default ListView;

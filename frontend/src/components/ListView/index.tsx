import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import { JSONResponseListItem } from "../../types";
import generateRelativePath from "../../utils/generateRelativePath";
import { ListItem } from "../ListItem";
import { Loading } from "../Loading";
import generateItem from "./generateItems";

export interface ContentType {
  dirs: JSONResponseListItem[];
  files: JSONResponseListItem[];
}

const ListView: React.FC = React.memo(() => {
  const [content, setContent] = useState<ContentType>({ dirs: [], files: [] });
  const { pathname } = useLocation();

  const fetchData = useFetch("/apis" + pathname);

  useEffect(() => {
    if (fetchData.response) {
      const { data, status } = fetchData.response;
      if (status) {
        setContent({
          dirs: data.filter((item: any) => item.dir),
          files: data.filter((item: any) => !item.dir),
        });
      }
    }
  }, [fetchData.response]);

  return (
    <Loading isLoading={fetchData.loading}>
      <div style={{ padding: "20px", paddingBottom: "55px" }}>
        {!["/dir", "/dir/"].includes(pathname) && (
          <ListItem type="other" to={generateRelativePath("..", pathname)}>
            (up a dir)
          </ListItem>
        )}
        {content.dirs.map((item) => generateItem(item, pathname))}
        {content.files.map((item) => generateItem(item, pathname))}
      </div>
    </Loading>
  );
});

export { ListView };

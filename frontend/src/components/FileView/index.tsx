import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import upDirPath from "../../utils/upDirPath";
import Loading from "../Loading";

const FileView: React.FC = () => {
  const [content, setContent] = useState("");
  const { pathname } = useLocation();
  const fetchData = useFetch("/apis" + pathname);

  useEffect(() => {
    if (fetchData.response) {
      const { data, status } = fetchData.response;
      if (status) {
        setContent(data);
      }
    }
  }, [fetchData.response]);

  return (
    <Loading isLoading={fetchData.loading}>
      <div style={{ padding: "20px", paddingBottom: "55px" }}>
        <Link to={upDirPath(pathname).replace("file", "dir")}>
          <button className="button button-primary m-3">Back</button>
        </Link>
        <div>
          <span style={{ whiteSpace: "pre", color: "cyan" }}>{content}</span>;
        </div>
      </div>
    </Loading>
  );
};

export default FileView;

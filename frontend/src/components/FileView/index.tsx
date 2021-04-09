import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import inferLanguageFromPath from "../../utils/inferLanguageFromPath";
import { Editor } from "../Editor";
import EditorStatusBar from "../EditorStatusBar";
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
      <div style={{ height: "80vh", paddingBottom: "55px" }}>
        <Editor
          value={content}
          language={inferLanguageFromPath(pathname)}
          style={{ height: "calc(100vh - 80px)" }}
        />
        <EditorStatusBar {...{ pathname }} />
      </div>
    </Loading>
  );
};

export default React.memo(FileView);

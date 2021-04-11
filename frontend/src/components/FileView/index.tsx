import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useToasts } from "react-toast-notifications";
import useFetch from "../../hooks/useFetch";
import inferLanguageFromPath from "../../utils/inferLanguageFromPath";
import { Editor } from "../Editor";
import { EditorStatusBar } from "../EditorStatusBar";
import { Loading } from "../Loading";

const FileView: React.FC = React.memo(() => {
  const [content, setContent] = useState("");
  const { pathname } = useLocation();
  const { goBack } = useHistory();
  const { addToast } = useToasts();
  const fetchData = useFetch("/apis" + pathname);

  useEffect(() => {
    if (fetchData.response) {
      const { data, status } = fetchData.response;
      if (status) {
        setContent(data);
      } else {
        goBack();
        addToast(data, { appearance: "error", autoDismiss: true });
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
});

export { FileView };

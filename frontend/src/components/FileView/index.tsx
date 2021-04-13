import React, { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router";
import { useToasts } from "react-toast-notifications";
import useFetch from "../../hooks/useFetch";
import inferLanguageFromPath from "../../utils/inferLanguageFromPath";
import { Editor } from "../Editor";
import { EditorStatusBar } from "../EditorStatusBar";
import { Loading } from "../Loading";
import axios from "axios";

const FileView: React.FC = React.memo(() => {
  const [content, setContent] = useState("");
  const contentRef = useRef(content);
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

  useEffect(() => {
    contentRef.current = content;
  }, [content]);

  const saveContent = () => {
    axios
      .post("/apis" + pathname, {
        data: contentRef.current,
      })
      .then(({ data }) => {
        if (data.status) {
          addToast("File save succesfull", {
            appearance: "success",
            autoDismiss: true,
          });
        } else {
          addToast("Error while saving" + data.data, {
            appearance: "error",
            autoDismiss: true,
          });
        }
      });
  };

  return (
    <Loading isLoading={fetchData.loading}>
      <div style={{ height: "80vh", paddingBottom: "55px" }}>
        <Editor
          value={content}
          setValue={setContent}
          language={inferLanguageFromPath(pathname)}
          style={{ height: "calc(100vh - 80px)" }}
        />
        <EditorStatusBar pathname={pathname} saveContent={saveContent} />
      </div>
    </Loading>
  );
});

export { FileView };

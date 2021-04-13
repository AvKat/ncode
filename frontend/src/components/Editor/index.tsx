import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor";

interface EditorProps {
  value: string;
  language: string;
  setValue: Function;
  style?: Object;
}

// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId: any, label: string) {
    if (label === "json") {
      return "./json.worker.bundle.js";
    }
    if (label === "css" || label === "scss" || label === "less") {
      return "./css.worker.bundle.js";
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return "./html.worker.bundle.js";
    }
    if (label === "typescript" || label === "javascript") {
      return "./ts.worker.bundle.js";
    }
    return "./editor.worker.bundle.js";
  },
};

export const Editor: React.FC<EditorProps> = ({
  value,
  setValue,
  language,
  style,
}) => {
  const divEl = useRef<HTMLDivElement>(null);
  let editor: monaco.editor.IStandaloneCodeEditor;
  useEffect(() => {
    if (divEl.current) {
      editor = monaco.editor.create(divEl.current, {
        theme: "vs-dark",
        minimap: {
          enabled: false,
        },
        value,
        language,
      });
      editor.onDidChangeModelContent(() => {
        setValue(editor.getValue());
      });
    }

    return () => {
      editor.dispose();
    };
  }, []);
  return (
    <div
      className="Editor"
      ref={divEl}
      style={{
        display: "flex",
        height: "inherit",
        ...style,
      }}
    ></div>
  );
};

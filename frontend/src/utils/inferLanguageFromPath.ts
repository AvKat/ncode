import * as monaco from "monaco-editor";

const getExtension = (path: string) => {
  let parts = path.split("/");
  let fName = parts[parts.length - 1];
  let nParts = fName.split(".");
  let ext = nParts[nParts.length - 1];
  return ext;
};

const inferLanguageFromPath = (path: string) => {
  let ext = getExtension(path);
  let langData = monaco.languages.getLanguages();
  let res = "plaintext";
  langData.every((lang) => {
    if (lang.extensions?.includes(`.${ext}`)) {
      res = lang.id;
      return false;
    } else {
      return true;
    }
  });
  return res;
};

export default inferLanguageFromPath;

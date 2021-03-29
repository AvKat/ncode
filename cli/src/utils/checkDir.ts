import fs from "fs";

const checkDir = (path: string) => {
  return !fs.statSync(path).isFile();
};

export { checkDir };

import { lstatSync } from "fs";

const checkDir = (path: string) => {
  try {
    return lstatSync(path).isDirectory();
  } catch (err) {
    return false;
  }
};

export { checkDir };

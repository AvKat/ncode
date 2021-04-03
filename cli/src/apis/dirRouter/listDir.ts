import { readdirSync } from "fs";
import { Request, Response } from "express";
import { checkDir, generatePath } from "../../utils";

type ResType = Array<{ name: string; dir: boolean }>;

const listDir = (req: Request, res: Response) => {
  let fPath = generatePath(req.params.name);
  if (!checkDir(fPath)) {
    res.status(404).json({
      message: "Not a directory. Use the /file/ route for files.",
    });
    return;
  }

  let fileList = readdirSync(fPath);
  let result: ResType = [];
  let isDir;

  fileList.forEach((val) => {
    let path = `${fPath}/${val}`;
    isDir = checkDir(path);
    result.push({ name: val, dir: isDir });
  });

  res.status(200).json({ result });
};

export default listDir;

import { readdirSync } from "fs";
import { Request, Response } from "express";
import { checkDir, generatePath } from "../../utils";

type ResType = Array<{ name: string; dir: boolean }>;

const listDir = (req: Request, res: Response) => {
  let fPath = generatePath(req.params.name);
  if (!checkDir(fPath)) {
    res.json({
      status: 0,
      message: "Not a directory. Use the /file/ route for files.",
    });
    return;
  }

  let fileList = readdirSync(fPath);
  let data: ResType = [];
  let isDir;

  fileList.forEach((val) => {
    let path = `${fPath}/${val}`;
    isDir = checkDir(path);
    data.push({ name: val, dir: isDir });
  });

  res.json({ status: 1, data });
};

export default listDir;

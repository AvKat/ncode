import { Router } from "express";
import * as fs from "fs";
import { checkDir, generatePath } from "../utils";

const listDir = (dir: string) => {
  let fileList = fs.readdirSync(dir);
  let result: ResType = [];
  let isDir;

  fileList.forEach((val) => {
    let path = `${dir}/${val}`;
    isDir = checkDir(path);
    result.push({ name: val, dir: isDir });
  });

  return result;
};

type ResType = Array<{ name: string; dir: boolean }>;

const router = Router();

router.get("/:name(*)", (req, res) => {
  let result = listDir(generatePath(req.params.name));
  res.send({ status: 1, data: result });
});

router.get("/", (_, res) => {
  let result = listDir(generatePath(""));
  res.send({ status: 1, data: result });
});

export default router;

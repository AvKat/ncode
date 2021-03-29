import { Request, Response } from "express";
import * as fs from "fs";
import path from "path";

const readFile = (req: Request, res: Response) => {
  let cwd = process.cwd();
  let f_name = req.params.name;
  let f_path = path.join(cwd, f_name);
  try {
    fs.lstatSync(f_path).isFile();
    let data = fs.readFileSync(f_path, { encoding: "utf8" });
    res.send({ status: 1, data });
  } catch (err) {
    res.send({
      status: 0,
      data: `<h1><pre>${f_name} not found in ${cwd}</pre></h1>`,
    });
  }
};

export default readFile;

import { Request, Response } from "express";
import { readFileSync, statSync, existsSync } from "fs";
import path from "path";

const readFile = (req: Request, res: Response) => {
  let cwd = process.cwd();
  let f_name = req.params.name;
  if (!req.params.name) {
    res.json({ status: 0, message: "Invalid file url" });
    return;
  }

  let f_path = path.join(cwd, f_name);
  try {
    statSync(f_path).isFile();
    let data = readFileSync(f_path, { encoding: "utf8" });
    res.json({ status: 1, data });
  } catch (err) {
    let message;
    existsSync(f_path)
      ? (message = `${f_name} not found in ${cwd}`)
      : (message = "Not a file. Use the /dir/ route for directories");
    res.json({
      status: 0,
      message,
    });
  }
};

export default readFile;

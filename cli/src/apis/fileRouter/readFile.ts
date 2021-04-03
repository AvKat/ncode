import { Request, Response } from "express";
import { readFileSync, statSync, existsSync } from "fs";
import path from "path";

const readFile = (req: Request, res: Response) => {
  let cwd = process.cwd();
  let f_name = req.params.name;
  if (!req.params.name) {
    res.status(404).json({ message: "Invalid file url" });
    return;
  }

  let f_path = path.join(cwd, f_name);
  try {
    statSync(f_path).isFile();
    let data = readFileSync(f_path, { encoding: "utf8" });
    res.status(200).json({ data });
  } catch (err) {
    let message;
    existsSync(f_path)
      ? (message = `${f_name} not found in ${cwd}`)
      : (message = "Not a file. Use the /dir/ route for directories");
    res.status(404).json({
      message,
    });
  }
};

export default readFile;

import { Request, Response } from "express";
import { writeFileSync, statSync, existsSync } from "fs";
import path from "path";

const writeFile = (req: Request, res: Response) => {
  let cwd = process.cwd();
  let f_name = req.params.name;
  if (!req.params.name) {
    res.json({ status: 0, data: "Invalid file url" });
    return;
  }

  let f_path = path.join(cwd, f_name);
  try {
    statSync(f_path).isFile();
    let { data } = req.body;
    writeFileSync(f_path, data);
    res.json({ status: 1 });
  } catch (err) {
    let message;
    existsSync(f_path)
      ? (message = "Not a file. Use the /dir/ route for directories")
      : (message = `${f_name} not found in ${cwd}`);
    res.json({
      status: 0,
      data: message,
    });
  }
};

export default writeFile;

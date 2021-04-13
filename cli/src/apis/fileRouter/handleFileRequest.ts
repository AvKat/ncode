import { Request, Response } from "express";
import { readFileSync, statSync, existsSync, writeFileSync } from "fs";
import path from "path";

const handleFileRequest = (req: Request, res: Response) => {
  let cwd = process.cwd();
  let f_name = req.params.name;
  if (!req.params.name) {
    res.json({ status: 0, data: "Invalid file url" });
    return;
  }

  let f_path = path.join(cwd, f_name);
  try {
    statSync(f_path).isFile();

    if (req.method === "GET") {
      let data = readFileSync(f_path, { encoding: "utf8" });
      res.json({ status: 1, data });
      return;
    } else if (req.method === "POST") {
      let { data } = req.body;
      if (!data) {
        res.json({ status: 0, data: "No content to write" });
      } else {
        writeFileSync(f_path, data);
        res.json({ status: 1, data });
      }
      return;
    } else {
      res.json({
        status: 0,
        data: "Only GET and POST requests are supported.",
      });
      return;
    }
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

export default handleFileRequest;

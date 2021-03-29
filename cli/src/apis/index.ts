import express, { Response } from "express";
import file from "./file";
import dir from "./dir";

const availableApis = ["file", "dir"];

var router = express.Router();

router.use("/dir/", dir);
router.use("/file/:name(*)", file);

router.get("*", (_, res: Response) => {
  res.send({ status: 1, availableApis });
});

export default router;

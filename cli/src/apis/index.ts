import express, { Response } from "express";
import dirRouter from "./dirRouter";
import fileRouter from "./fileRouter";

const availableApis = ["file", "dir"];

var router = express.Router();

router.use("/dir/", dirRouter);
router.use("/file/", fileRouter);

router.get("*", (_, res: Response) => {
  res.send({ status: 1, availableApis });
});

export default router;

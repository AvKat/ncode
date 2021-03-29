import express, { Response } from "express";
import APIRouter from "./apis";
import path from "path";
import { frontend_path } from "./constants";

var router = express.Router();

router.use("/apis", APIRouter);

router.get("*", (_, res: Response) => {
  res.sendFile(path.join(frontend_path, "index.html"));
});

export default router;

import { Router } from "express";
import readFile from "./readFile";

const fileRouter = Router();

fileRouter.get("/:name(*)", readFile);

export default fileRouter;

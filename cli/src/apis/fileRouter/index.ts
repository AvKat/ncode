import { Router, urlencoded } from "express";
import readFile from "./readFile";
import writeFile from "./writeFile";

const fileRouter = Router();

fileRouter.use(
  urlencoded({
    extended: true,
  })
);

fileRouter.get("/:name(*)", readFile);
fileRouter.post("/:name(*)", writeFile);

export default fileRouter;

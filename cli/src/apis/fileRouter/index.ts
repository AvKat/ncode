import {Router, urlencoded} from "express";
import handleFileRequest from "./handleFileRequest";

const fileRouter = Router();

fileRouter.use(
  urlencoded({
    extended: true,
  })
);

fileRouter.get("/:name(*)", handleFileRequest);
fileRouter.post("/:name(*)", handleFileRequest);

export default fileRouter;

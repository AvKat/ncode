import { Router } from "express";
import handleFileRequest from "./handleFileRequest";
import bodyParser from "body-parser";

const fileRouter = Router();

fileRouter.use(bodyParser.urlencoded({ extended: true }));
fileRouter.use(bodyParser.json());

fileRouter.get("/:name(*)", handleFileRequest);
fileRouter.post("/:name(*)", handleFileRequest);

export default fileRouter;

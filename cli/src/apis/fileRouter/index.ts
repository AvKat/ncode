import express from "express";
import handleFileRequest from "./handleFileRequest";

const fileRouter = express.Router();

fileRouter.use(express.urlencoded({ extended: true }));
fileRouter.use(express.json());

fileRouter.get("/:name(*)", handleFileRequest);
fileRouter.post("/:name(*)", handleFileRequest);

export default fileRouter;

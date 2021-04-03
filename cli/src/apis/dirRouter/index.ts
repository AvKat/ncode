import { Router } from "express";
import listDir from "./listDir";

const dirRouter = Router();

dirRouter.get("/:name(*)", listDir);

export default dirRouter;

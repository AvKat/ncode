#!/usr/bin/env node

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./routes";
import { frontend_path } from "./constants";
import open from "open";

const environment = process.env.NODE_ENV || "production";
//const environment = "production";
const PORT = 3006;

var app = express();

app.use(express.static(frontend_path));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  if (environment === "production") {
    open(`http://localhost:${PORT}`);
  }
});

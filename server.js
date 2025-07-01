import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

//import routers

//public
import { dirname } from "path";
import { fileURLToPath } from "url";  
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

//morgan
if (process.env.ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./client/dist")));

//utils
app.use(cookieParser());
app.use(express.json());


//routes

//Error route
app.all(/.*/, (req, res) => {
  res.status(404).send("Error 404: Page not found");
});

//the port where the server will run
const port = 3000;

//start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//rimasto al 67 node
//per react al 19

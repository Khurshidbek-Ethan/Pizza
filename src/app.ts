import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import { T } from "./libs/types/common";
import cookieParser from "cookie-parser";

// session connection to database

/** 1- Entrance **/
const app = express();
// middleware pattern
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(morgan(MORGAN_FORMAT));

/** 2- Session **/

/** 3- Views **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4- Routers **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // Middleware design pattern : React => SPA

export default app;

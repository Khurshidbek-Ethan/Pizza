import express from "express";
const routerAdmin = express.Router();
import memberController from "./controllers/member.controller";

/**Restauran */
routerAdmin.get("/", memberController.goHome);
routerAdmin.get("/login", memberController.getLogin);

routerAdmin.get("/signup", memberController.getSignup);

export default routerAdmin;

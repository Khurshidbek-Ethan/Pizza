import restaurantController from "./controllers/restaurant.controller";
import express from "express";
const routerAdmin = express.Router();

/**Restauran */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin.get("/login", restaurantController.getLogin);

routerAdmin.get("/signup", restaurantController.getSignup);

export default routerAdmin;

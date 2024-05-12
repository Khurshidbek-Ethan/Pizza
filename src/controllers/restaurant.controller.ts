import { T } from "../libs/types/common";
import { Request, Response } from "express";

const restaurantController: T = {};
restaurantController.goHome = async (req: Request, res: Response) => {
  try {
    console.log("goHome");

    res.send("Home page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");

    res.send("Login page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");

    res.send("Signup page");
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("Done");

    res.send("Signup page");
  } catch (err) {
    console.log("Error, processLogin", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    res.send("Done");

    res.send("Signup page");
  } catch (err) {
    console.log("Error, processSignup", err);
  }
};

export default restaurantController;

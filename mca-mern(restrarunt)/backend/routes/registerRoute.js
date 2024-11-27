import express from "express";
import register_user from "../controller/register.js";

const regitserRouter = express.Router();

regitserRouter.post("/send", register_user);

export default regitserRouter;

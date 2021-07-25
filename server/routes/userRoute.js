import express  from "express";

import UserController from "../controllers/userController";

const userRouter = express.Router();
userRouter.post("/signup", UserController.signupUser);
userRouter.get("/all", UserController.getAllUsers);

export default userRouter;
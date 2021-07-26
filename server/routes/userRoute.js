import express  from "express";

import UserController from "../controllers/userController";

const userRouter = express.Router();
userRouter.post("/signup", UserController.signupUser);
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/:id", UserController.findOneUser);
userRouter.delete("/:id",UserController.DeleteUser);
//put and patch are used to update
//put:mbere yuko ukora update urabanza ugasiba uwomuntu, then ukamuha izind data
//patch: iramodifying
userRouter.patch("/:id", UserController.UpdateUser);
export default userRouter;


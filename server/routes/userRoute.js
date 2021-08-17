import express  from "express";

import UserController from "../controllers/userController";
import Validator from "../middleware/userValidation";
import DataChecker from "../middleware/dataChecker";
import verifyAccess from "../middleware/verifyAccess";
import verifyToken from "../middleware/verifyToken";

const userRouter = express.Router();
userRouter.post("/signup",Validator.newAccountRules(),Validator.validateInput,DataChecker.CheckAge,DataChecker.ValidateEmailDuplicate,UserController.signupUser);
userRouter.post("/signin",UserController.signinUser);
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/:id",Validator.checkId(),Validator.validateInput,UserController.findOneUser);
userRouter.get("/all/mentors",verifyToken,verifyAccess("user"),UserController.getAllMentors)

userRouter.delete("/:id",Validator.checkId(),Validator.validateInput,UserController.DeleteUser);

userRouter.patch("/:id",Validator.checkId(),Validator.validateInput, UserController.UpdateUser);
userRouter.patch("/:id/role",verifyToken,verifyAccess("admin"),UserController.UpdateOneUserRole);




export default userRouter;


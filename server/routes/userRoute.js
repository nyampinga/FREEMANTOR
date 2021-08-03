import express  from "express";

import UserController from "../controllers/userController";
import Validator from "../middleware/userValidation";
import DataChecker from "../middleware/dataChecker";

const userRouter = express.Router();
userRouter.post("/signup",Validator.newAccountRules(),Validator.validateInput,DataChecker.CheckAge,DataChecker.ValidateEmailDuplicate,UserController.signupUser);
userRouter.post("/signin",UserController.signinUser);
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/:id",Validator.checkId(),Validator.validateInput,UserController.findOneUser);
userRouter.get("/all/mentors",UserController.getAllMentors)

userRouter.delete("/:id",Validator.checkId(),Validator.validateInput,UserController.DeleteUser);
//put and patch are used to update
//put:mbere yuko ukora update urabanza ugasiba uwomuntu, then ukamuha izind data
//patch: iramodifying
userRouter.patch("/:id",Validator.checkId(),Validator.validateInput, UserController.UpdateUser);

userRouter.patch("/:id/role",UserController.UpdateOneUserRole);





export default userRouter;


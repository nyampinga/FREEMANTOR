import express  from "express";

import SessionController from "../controllers/sessionController";
import verifyAccess from "../middleware/verifyAccess";
import verifyToken from "../middleware/verifyToken";


const sessionRouter = express.Router();
sessionRouter.post("/request",verifyToken,verifyAccess("user"),SessionController.sessionRequest);
sessionRouter.get("/all", SessionController.getAllSession);
sessionRouter.get("/:id", SessionController.findOneSession);
sessionRouter.delete("/:id",SessionController.DeleteSession);
sessionRouter.patch("/:id/approve",verifyToken,verifyAccess("mentor"),SessionController.acceptOneSession);
sessionRouter.patch("/:id/decline",verifyToken,verifyAccess("mentor"),SessionController.declineOneSession);
sessionRouter.patch("/:id", SessionController.UpdateSession);

export default sessionRouter;


import express  from "express";

import SessionController from "../controllers/sessionController";

const sessionRouter = express.Router();
sessionRouter.post("/request", SessionController.sessionRequest);
sessionRouter.get("/all", SessionController.getAllSession);
sessionRouter.get("/:id", SessionController.findOneSession);
sessionRouter.delete("/:id",SessionController.DeleteSession);
//put and patch are used to update
//put:mbere yuko ukora update urabanza ugasiba uwomuntu, then ukamuha izind data
//patch: iramodifying
sessionRouter.patch("/:id", SessionController.UpdateSession);
export default sessionRouter;


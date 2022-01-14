import { Router } from "express";
import { UserController } from "../../controller/UserController";

let userRouter = Router();

userRouter.post("/", UserController.newUser);

export default userRouter;

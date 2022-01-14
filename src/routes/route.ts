import { Router } from "express";
import userRouter from "./User/user";
import photoRouter from "./Photo/Photo";

let router = Router();

router
  .get("/", (req, res) => {
    res.send("Welcome to the backend");
  })
  .use("/user", userRouter)
  .use("/photo", photoRouter);

export default router;

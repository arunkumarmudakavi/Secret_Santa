import { Router } from "express";
import { uploadCSVFile } from "../controllers/user.controller";

const userRouter = Router();

userRouter.route("upload-csv").post(uploadCSVFile);

export { userRouter };
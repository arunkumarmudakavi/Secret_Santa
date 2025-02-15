import { Router } from "express";
import { uploadCSVFile } from "../controllers/user.controller";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.route("upload-csv").post(
  upload.single({
    name: "file",
    maxCount: 1,
  }),
  uploadCSVFile
);

export { userRouter };

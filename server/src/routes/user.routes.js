import { Router } from "express";
import { uploadCSVFile, home, getChildAssigned } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.route("/upload-csv").post(
  upload.any({
    name: "file",
    maxCount: 1,
  }),
  uploadCSVFile
);

userRouter.route("/get-child-assigned").get(getChildAssigned)

userRouter.route("/").get(home)

export { userRouter };

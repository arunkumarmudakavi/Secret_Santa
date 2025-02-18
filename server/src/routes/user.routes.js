import { Router } from "express";
import {
  uploadCSVFile,
  getChildAssigned,
  downloadCSV,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.route("/upload-csv").post(upload.single("file"), uploadCSVFile);

userRouter.route("/get-child-assigned").get(getChildAssigned);
userRouter.route("/download").get(downloadCSV);

export { userRouter };

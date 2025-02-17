import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import csv from "csv-parser";
import fs from "fs";
import { csvModel } from "../models/csv.model.js";

const uploadCSVFile = asyncHandler(async (req, res) => {
  const filePath = req?.files[0]?.path;
  // console.log("path: ",filePath)

  if (!filePath) throw new ApiError(400, "File not found");
  const result = [];

  fs.createReadStream("./public/data.csv")
    .pipe(csv())
    .on("data", (data) => {
      result.push(data);
    })
    .on("end", async () => {
      // console.log(result.Employee_EmailID)
      // console.log(result.Employee_Name)

      const employeeDetails = await csvModel.create({
        employeeDetails: result,
        // employeeEmail: result.map((data) => data.Employee_EmailID)
      });

      // console.log("line 30: ",employeeEmail)

      if (!employeeDetails) throw new ApiError(500, "Something went wrong...");

      return res
        .status(200)
        .json(
          new ApiResponse(200, employeeDetails, "File uploaded successfully...")
        );
    });

  // console.log(result)
});

const getChildAssigned = asyncHandler(async (req, res) => {
    // res.send("hey")a
    const resu = await csvModel.find()
    console.log(resu)
});

const home = asyncHandler(async (_, res) => {
  res.send("hello");
});

export { uploadCSVFile, home, getChildAssigned };

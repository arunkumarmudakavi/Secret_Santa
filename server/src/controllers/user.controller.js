import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import csv from "csv-parser";
import fs from "fs";
import { csvModel } from "../models/csv.model.js";
import { writeToStream } from "fast-csv"

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

  //Knuth shuffle Algorithm
  const shuffleEmployees = (employeeArray) => {
    for (let i = employeeArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [employeeArray[i], employeeArray[j]] = [employeeArray[j], employeeArray[i]];
    }
  }

  const previousYearData = await csvModel.find();

  const employees = previousYearData[0]?.employeeDetails.map((data) => ({
    name: data?.Employee_Name,
    email: data?.Employee_EmailID,
  }));


  let assignments = [];
  let tries = 0;

  while (assignments.length < employees.length && tries < 100) {
    shuffleEmployees(employees);
    assignments = [];
    let valid = true;

    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      const previousYearAssignment = await previousYearData.find(
        (data) => data?.Employee_Name === employee.name
      );

      // console.log(previousYearAssignment)

if (
        previousYearAssignment &&
        previousYearAssignment?.Secret_Child_Name ===
          employees[(i + 1) % employees.length].name
      ) {
        valid = false;
        break;
      }

      assignments.push({
        Employee_Name: employee.name,
        Employee_EmailID: employee.email,
        Secret_Child_Name: employees[(i + 1) % employees.length].name,
        Secret_Child_EmailID: employees[(i + 1) % employees.length].email,
      });
      
    }
    
    if (valid) break;
    tries++;
  }
  // console.log("line 98: " ,assignments)

  const writeStream = fs.createWriteStream("./public/NewGeneratedAssignments.csv");

  writeToStream(writeStream, assignments, {headers: true})
  .on("finish", () => console.log("Successfully Generated"))

  return res
        .status(200)
        .json(
          new ApiResponse(200, writeStream, "Data fetched successfully")
        );      

});

const home = asyncHandler(async (_, res) => {
  res.send("hello");
});

export { uploadCSVFile, home, getChildAssigned };

import {ApiResponse} from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js";
import {asyncHandler} from "../utils/AsyncHandler.js";

const uploadCSVFile = asyncHandler(async (req, res) => {
    const filePath = req?.file[0]?.path;
    console.log(filePath)

    if (!filePath) throw new ApiError(400, "File not found");
})

export {uploadCSVFile}
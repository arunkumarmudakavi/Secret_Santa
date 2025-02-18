import axios from "axios";
import fileDownload from "js-file-download";

const uploadFile = async (data) => {
  console.log("4: ", data);
  try {
    // console.log("6: ",data?.name)
    return await axios.post(
      `${import.meta.env.VITE_API_URL}/upload-csv`,
      data,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
  } catch (error) {
    return {
      ok: false,
    };
  }
};

const generateCSV = async () => {
  try {
    return await axios.get(
      `${import.meta.env.VITE_API_URL}/get-child-assigned`,
      { responseType: "blob" }
    );
  } catch (error) {
    return {
      ok: false,
    };
  }
};

const downloadCSV = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/download`
    );
    // console.log(response)
    return fileDownload(response?.data, "NewAssingnment.csv");
  } catch (error) {
    return {
      ok: false,
    };
  }
};

export { uploadFile, generateCSV, downloadCSV };

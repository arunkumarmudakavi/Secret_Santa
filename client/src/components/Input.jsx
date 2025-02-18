import React, { useState } from "react";
import { uploadFile } from "../hooks/userRequests.js";
// import { Generate } from "./Generate.jsx";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [file, setFile] = useState([]);
  const navigate = useNavigate();

  const upload = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", file);
    try {
      const res = await uploadFile(formData);
      // console.log(res?.data?.success);
      if (res?.data?.success) {
        // alert(res?.data?.message);
        return navigate("/generate-csv");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={upload}>
        <input
          className="relative mb-5 block w-[40vw]  min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary hover:text-black"
          type="file"
          name="file"
          id="csv-file"
          onChange={(e) => setFile(e.target?.files[0])}
        />
        <button
          className="bg-gray-800 text-white cursor-pointer p-2 rounded w-[10vw]"
          type="submit"
        >
          Upload
        </button>
      </form>
    </>
  );
};

export { Input };

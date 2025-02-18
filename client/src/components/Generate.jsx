import React from "react";
import { generateCSV } from "../hooks/userRequests.js";
import { DownloadCSV } from "./DownloadCSV.jsx";

const Generate = () => {
  const generate = async () => {
    const response = await generateCSV();
    // console.log(response);
    if (response?.status === 200) {
      alert("File Generated Successfully...");
    }
  };

  return (
    <>
      <section className="flex justify-center mt-[10vh]">
        <button
          className="bg-gray-800 text-white p-2 rounded cursor-pointer"
          onClick={generate}
        >
          Generate CSV
        </button>
        <DownloadCSV />
      </section>
    </>
  );
};

export { Generate };

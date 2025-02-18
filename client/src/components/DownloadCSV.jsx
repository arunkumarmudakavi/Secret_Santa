import React from "react";
import { downloadCSV } from "../hooks/userRequests.js";

const DownloadCSV = () => {
  const handleDownload = async () => {
    await downloadCSV();
  };

  return (
    <>
      <button
        className="bg-gray-800 text-white p-2 rounded ml-[2vw] cursor-pointer"
        onClick={handleDownload}
      >
        Downlod Generated CSV File
      </button>
    </>
  );
};

export { DownloadCSV };

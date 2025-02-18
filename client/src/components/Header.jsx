import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <span className="font-bold text-2xl">Secret Santa</span>
        <section className="w-[20vw]">
          <ul className="flex justify-between font-bold">
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Upload CSV
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/generate-csv")}
            >
              Generate/Download CSV
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export { Header };

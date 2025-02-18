import React from "react";
import { Input } from "./Input";

const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center h-[60vh]">
        <section className="flex flex-col justify-center items-center bg-gray-200 w-[50vw] p-4">
          <span className="m-[5vh] text-extrabold text-[2rem]">Upload CSV</span>
          <Input />
        </section>
      </section>
    </>
  );
};

export { Home };

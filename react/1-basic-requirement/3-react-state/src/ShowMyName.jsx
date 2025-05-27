import React, { useState } from "react";

const ShowMyName = () => {
  const [name, setName] = useState("...");
  const handleThu = () => {
    // console.log("Thu");
    setName("Thu")
  };

  const handleHtet = () => {
    // console.log("Htet");
    setName(name + " Htet")
  };

  const handleNaing = () => {
    // console.log("Naing");
    setName(name + " Naing")
  };

  const clear = () => {
    setName("...");
  }

  return (
    <div>
      <h1 className="text-9xl font-bold">My name is "{name}"</h1>
      <button
        className="border px-4 py-2 bg-black text-white"
        onClick={handleThu}
      >
        Thu
      </button>
      <button
        className="border px-4 py-2 bg-black text-white"
        onClick={handleHtet}
      >
        Htet
      </button>
      <button
        className="border px-4 py-2 bg-black text-white"
        onClick={handleNaing}
      >
        Naing
      </button>
      <button
        className="border px-4 py-2 bg-red-500 text-white"
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
};

export default ShowMyName;

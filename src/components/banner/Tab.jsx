import React from "react";

export default function Tab({ text, active, setActive }) {
  return (
    <div
      className={`inline-block m-1 px-2 md:px-4 py-1 md:py-2 ${
        active ? "bg-[#444BFF] text-white" : "bg-white text-black"
      } rounded cursor-pointer`}
      onClick={() => setActive(!active)}
    >
      {text}
    </div>
  );
}

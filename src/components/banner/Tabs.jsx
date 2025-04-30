import React, { useState } from "react";
import Tab from "./Tab";

export default function Tabs() {
  const [active, setActive] = useState(true);
  return (
    <div className="p-1 border-2 border-[#111111]/8 inline-block items-center justify-center rounded ">
      <div
        className={`px-2 m-1 md:px-4 py-1 md:py-2 ${
          active ? "bg-[#444BFF] text-white" : "bg-[#FFF] text-black"
        } rounded inline-block cursor-pointer`}
        onClick={() => setActive(!active)}
      >
        View all
      </div>
      <Tab text="NodeJS" active={active} setActive={setActive} />
      <Tab text="ExpressJS" active={active} setActive={setActive} />
      <Tab text="NestJS" active={active} setActive={setActive} />
      <Tab text="Golang" active={active} setActive={setActive} />
      <Tab text="MongoDB" active={active} setActive={setActive} />
      <Tab text="PostgreSQL" active={active} setActive={setActive} />
    </div>
  );
}

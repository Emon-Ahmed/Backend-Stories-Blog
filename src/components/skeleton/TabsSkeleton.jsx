import React from "react";
import Skeleton from "./Skeleton";

export default function TabsSkeleton() {
  return (
    <div className="p-1 border-2 border-[#111111]/8 inline-block items-center justify-center rounded">
      <div className="flex flex-wrap justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            className="px-2 m-1 md:px-4 py-1 md:py-2 h-9 w-24 rounded inline-block"
          />
        ))}
      </div>
    </div>
  );
}

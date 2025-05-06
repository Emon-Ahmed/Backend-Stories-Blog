import React, { useState } from "react";
import Tab from "./Tab";
import { useGetCategoryQuery } from "../../features/blogs/blogsApi";

export default function Tabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("View all");
  const { data, isLoading } = useGetCategoryQuery();

  if (isLoading) {
    return "Loading Data...";
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (onTabChange) {
      onTabChange(tabName);
    }
  };

  return (
    <div className="p-1 border-2 border-[#111111]/8 inline-block items-center justify-center rounded">
      <div
        className={`px-2 m-1 md:px-4 py-1 md:py-2 ${
          activeTab === "View all"
            ? "bg-[#444BFF] text-white"
            : "bg-[#FFF] text-black"
        } rounded inline-block cursor-pointer`}
        onClick={() => handleTabClick("View all")}
      >
        View all
      </div>

      {data.data.map((category, index) => (
        <Tab
          text={category.name}
          key={category.id || index}
          active={activeTab === category.name}
          onClick={() => handleTabClick(category.name)}
        />
      ))}
    </div>
  );
}

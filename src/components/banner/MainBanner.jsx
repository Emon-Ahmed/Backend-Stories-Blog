import React from "react";
import BannerBG from "../../assets/images/banner-bg.png";
import aiIcon from "../../assets/images/ai.svg";
import Tabs from "./Tabs";

export default function MainBanner() {
  return (
    <div className="bg-[#FAFBFC]">
      <div
        style={{ backgroundImage: `url(${BannerBG})` }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <div className="p-10 md:p-20 flex  justify-center ">
          <div className="container font-apercu text-center">
            <div className="pb-12">
              <div className="flex justify-center items-center text-lg">
                <div className="mx-0.5">Blog</div>
                <img src={aiIcon} alt="AI Icon" className="w-4 h-4 mx-0.5" />
              </div>
              <div className="text-4xl md:text-6xl  font-bold py-4">
                Backend and Stories
              </div>
              <div className="md:w-1/2 mx-auto text-sm md:text-lg text-[#111111]/60">
                Tech talks, dev journeys, and real backend lessons. Read stories
                that help you grow as a backend developer.
              </div>
            </div>
            <div>
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

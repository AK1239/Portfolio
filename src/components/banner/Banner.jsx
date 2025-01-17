import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section id="home" className="w-full pt-10 pb-20 flex flex-col gap-10 lgl:flex-row xl:gap-0 border-b-[1px] border-b-black font-titleFont">
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;

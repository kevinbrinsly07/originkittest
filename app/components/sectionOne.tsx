import React from "react";
import TextPath from "../components/TextPath";
import HoverImageReveal from "./HoverImageReveal";
// bg-[#BD4444]

const sectionOne = () => {
  return (
    <div className="min-h-screen bg-[#000000]">
      <TextPath text="Lets Build" width="100%" height={200} />

      <HoverImageReveal />

      <TextPath text="Something Awesome" width="100%" height={200} />
    </div>
  );
};

export default sectionOne;

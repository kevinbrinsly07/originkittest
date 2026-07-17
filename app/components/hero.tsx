import React from "react";
import InteractiveHeroCanvas from "./InteractiveHeroCanvas";
import TextMorph from "./TextMorph";

const hero = () => {
  return (
    <div className="h-screen">
      <InteractiveHeroCanvas />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl uppercase">
        <TextMorph />
      </div>
    </div>
  );
};

export default hero;

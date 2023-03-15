import React from "react";
import "./FreindsSection.css";
import Freindsheading from "./freindsheadings/Freindsheading";
import FreindsContent from "./freindsContent/FreindsContent";

const FreindsSection = () => {
  return (
    <div className="freinds--section">
      <Freindsheading />
      <FreindsContent />
    </div>
  );
};

export default FreindsSection;

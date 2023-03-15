import React from "react";
import CoverpostTop from "./coverposttop/CoverpostTop";
import CoverpostContent from "./coverpostcontent/CoverpostContent";
import CoverpostComment from "./coverpostcomment/CoverpostComment";
import "./Style.css";

const Index = () => {
  return (
    <>
      <div className="cover-post">
        <CoverpostTop />
        <CoverpostContent />
        <CoverpostComment />
      </div>
    </>
  );
};

export default Index;

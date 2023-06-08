import React from "react";
import "./linkheader.css";

const LinkHeader = ({ title, onClick }) => {
  return (
    <p className="link-header" onClick={onClick}>
      {title}
    </p>
  );
};

export default LinkHeader;

import React from "react";
import "./linkicon.css";
import { FaGithub, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export const LinkIcon = () => {
  return (
    <div className="container-linkicon">
      <div className="main-link-icon">
        <div className="box">
          <div className="icon-box">
            <FaWhatsapp />
            Whatsapp
          </div>
          <div className="icon-box">
            <FaGithub />
            Github
          </div>
          <div className="icon-box">
            <FaYoutube /> Youtube
          </div>
          <div className="icon-box">
            <FaTwitter /> Twitter
          </div>
        </div>
      </div>
    </div>
  );
};

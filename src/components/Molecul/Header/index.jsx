import React from "react";
import "./header.css";
import { Acount, Search } from "../../../assets/icon";
// import { LinkHeader } from "../../atoms";

const Header = () => {
  return (
    <div className="header">
      <div className="main-header">
        <div className="box-header">
          <div className="logo">Welcome</div>
        </div>
        <div className="box-header">
          <>
            <ul>
              <li>
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/Blog">Blog</a>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </>
        </div>
        <div className="icon">
          <Search />
          <Acount />
        </div>
      </div>
    </div>
  );
};

export default Header;

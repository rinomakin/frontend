import React from "react";
import "./about.css";
import { Gap, Header } from "../../components";
import { bgLogin } from "../../assets";

export const About = () => {
  return (
    <div>
      <Header />
      <Gap height={10} />
      <h4 className="judul-about">About Page</h4>
      <Gap height={10} />
      <div className="container-about">
        <div className="box-about">
          <div className="box-main">
            <div className="box">
              <img src={bgLogin} alt="about" className="img-about" />
            </div>
            <div className="box">
              <p className="p-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam iure exercitationem nihil? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Dignissimos, dolorem id aut
                corporis rem sit adipisci. Cupiditate quas suscipit ad iure
                aperiam odit saepe iste. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Atque commodi error libero natus ipsam enim
                alias consectetur rem, ipsum ut aut accusantium, est, earum
                suscipit soluta recusandae nihil minima. Ex odio nobis officiis
                illo, quod veniam quis repellendus commodi iusto, animi ea
                assumenda possimus voluptate quisquam vitae vel consequatur! Id.
              </p>
              <>
                <a href="/contact">Contact Us</a>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

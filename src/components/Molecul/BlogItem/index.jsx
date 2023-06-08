import React from "react";
import { bgLogin } from "../../../assets";
import "./blogitem.css";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="foto" src={bgLogin} alt="Post" />
      <div className="blogitem-detail">
        <p className="Title">Blog Title</p>
        <p className="author">author-date-post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          impedit delectus, tempora accusantium deserunt Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Dolorem, dolorum?
        </p>
        <>
          <a href="/detail-blog">lihat Selengkapnya</a>
        </>
      </div>
    </div>
  );
};

export default BlogItem;

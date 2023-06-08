import React from "react";
import "./blog.css";
import { BlogItem, Button, Gap } from "../../components";
import { AiOutlinePlus } from "react-icons/ai";
const Blog = () => {
  return (
    <div className="container-home">
      <div className="box-home">
        <>
          <a href="/create-blog" className="Ablog">
            <AiOutlinePlus className="rdm" />
            blog
          </a>
        </>
      </div>
      <div className="box-home">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <Gap height={50} />
      <div className="pagination">
        <Button title="Sebelumnya" className="btn-next" />
        <Button title="Selanjutnya" className="btn-next" />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default Blog;

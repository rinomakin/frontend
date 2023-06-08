import React from "react";
import "./detail.css";
import { bgLogin } from "../../assets";
import { Gap, Header } from "../../components";

const DetailBlog = () => {
  return (
    <div className="container-detail-blog">
      <Header />
      <div className="box-main-detail">
        <Gap width={15} />
        <Gap height={15} />
        <div className="box-detail">
          <img src={bgLogin} alt="null" className="img-detail" />
        </div>
        <div className="judulDetail">
          <h5 className="h5detail">Judul Blog</h5>
          <p className="pdetail">waktu</p>
        </div>

        <p className="p2detail">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quidem autem quis ratione aspernatur eius itaque vero soluta eveniet
          ducimus suscipit eligendi, maxime sunt fuga libero accusamus, officiis
          officia reiciendis inventore! Odio perferendis doloribus corporis
          quisquam aperiam eius aut recusandae accusamus quaerat incidunt! Cum
          aliquam distinctio veniam ad provident dolorum minus earum illo,
          tenetur suscipit, molestiae, assumenda necessitatibus unde. Nobis
          perspiciatis impedit magnam fugit commodi odio minima quis asperiores
          illum, earum distinctio porro voluptatem dolor tenetur officia ipsam
          error debitis ipsum inventore odit laboriosam, maxime neque. Vel
          debitis quas nostrum reprehenderit, fuga aliquid optio commodi quasi
          recusandae magni praesentium amet. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Molestiae dolorum dolorem illum
          consequuntur debitis minus placeat, similique voluptatum nulla
          aspernatur tempore quidem vitae inventore id, iste ullam maxime
          perferendis autem, quam odio unde error explicabo praesentium?
          Reiciendis dolor voluptas tempore sunt eum vel totam, debitis
          inventore quae nihil blanditiis sint!
        </p>
        <Gap height={25} />
      </div>
    </div>
  );
};

export default DetailBlog;

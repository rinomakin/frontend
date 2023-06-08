import React from "react";
import "./create.css";
import { Gap, Header } from "../../components";
import CreateInput from "../../components/atoms/InputCreate";

const CreateBlog = () => {
  return (
    <div className="container-create">
      <Header />
      <CreateInput />
      <Gap />
    </div>
  );
};

export default CreateBlog;

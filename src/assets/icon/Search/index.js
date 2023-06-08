import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ ...Rest }) => {
  return (
    <div>
      <FaSearch {...Rest} />
    </div>
  );
};

export default Search;

import React from "react";

import { FaSearch } from "react-icons/fa";
export const SearchBar = () => {
  return (
    <div className="search-bar">
      <FaSearch></FaSearch>
      <input
        type="text"
        className=""
        placeholder="Escreva um nome de um campeão"
      ></input>
    </div>
  );
};

import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getChampions } from "../champions/getChampions";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState([]);

  const handleChange = (value) => {
    setInput(value);
    getChampions(value, setResults);
  };

  return (
    <div className="search-bar">
      <FaSearch color="white" className="icon"></FaSearch>
      <input
        type="text"
        placeholder="Escreva um nome de um campeão"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
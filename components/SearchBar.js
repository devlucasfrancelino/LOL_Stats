import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = (setResults) => {
  const [input, setInput] = useState([]);

  const fetchData = (value) => {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.6.1/data/pt_BR/champion.json`
    )
      .then((res) => res.json())
      .then((json) => {
        const champions = Object.values(json.data);
        const results = champions.filter((champion) => {
            return (
              value &&
              champion &&
              champion.name &&
              champion.name.toLowerCase().includes(value)
            );
          }
        );
        setResults(results);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados dos campeões:", error);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
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


"use client";

import { useState } from "react";
import HeaderApp from "../../../components/header";
import "../page.css";
import "../../../styles/search.css";
import SearchBar from "../../../components/SearchBar";
import { SearchResultList } from "../../../components/SearchResultsList";

export default function Search() {

  const [results, setResults] = useState([]);

  return (
    <main className="mainContainer">
      <HeaderApp />
      <div className="searchArea">
        <div className="search">
          <p id="text">League Of Legends</p>
          <SearchBar setResults={setResults}/>
          <SearchResultList results={results} />
        </div>
      </div>
    </main>
  );
}


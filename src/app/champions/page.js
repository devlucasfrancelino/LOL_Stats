"use client";

import { getChampions } from "../../../champions/getChampionsList";
import { useEffect, useState } from "react";
import HeaderApp from "../../../components/Header/header";
import "../page.css";
import "../champions/search.css";
import { SearchBar } from "../../../components/SearchBar";

export default function Search() {
  const [data, setData] = useState([]);

  async function fetchChampionsData() {
    try {
      const championData = await getChampions();
      setData(championData);
    } catch (error) {
      console.error("Erro ao buscar dados dos campeões:", error);
    }
  }

  useEffect(() => {
    fetchChampionsData();
  }, []);

  return (
    <main className="mainContainer">
      <HeaderApp />
      <div className="searchArea">
        <div className="search">
          <p>League Of Legends</p>
          <SearchBar/>
        </div>
      </div>
    </main>
  );
}

{
  /* {championsData ? (
    <div>
      {championsData.map((champion) => (
        <div>
          <h1>{champion.name}</h1>
          <h1>{champion.id}</h1>
          <h1>{champion.key}</h1>
          <h1>{champion.stats}</h1>
          <h1>{champion.tags}</h1>
          <h1>{champion.version}</h1>
        </div>
        ))}
            </div>
        
) : (
    <p>Carregando dados dos campeões...</p>
)} */
}

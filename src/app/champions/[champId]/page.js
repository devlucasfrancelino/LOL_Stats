"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getChampionsById } from "../../../../champions/getChampionsById";
import HeaderApp from "../../../../components/header";
import "../../page.css";

export default function ChampDetails({ params }) {
  const [champion, setChampion] = useState();
  const level = 1;

  useEffect(() => {
    async function fetchChampionDetails() {
      const champion = await getChampionsById(params.champId, setChampion);
    }
    fetchChampionDetails();
  }, [params.championId]);

  return (
    <main className="mainContainer">
      <HeaderApp />
      {champion && (
        <div>
        <img src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champion.id}.png`}></img>
        <h1>{champion.name}</h1>
          <h2>Vida</h2>
          <p>{champion.stats.hp}</p>
          <h2>Armor</h2>
          <p>{parseInt(champion.stats.armor + (level - 1) * champion.stats.armorperlevel)}</p>
          <h2>Armor</h2>
          <p>{champion.stats.crit}</p>
          <h2>AD</h2>
          <p>{champion.stats.attackdamage}</p>
          <h2>Attack Speed</h2>
          <p>{champion.stats.crit}</p>
        </div>
      )}
    </main>
  );
}

/* Avaliable stats 
hp, hpperlevel, mp, mpperlevel, movespeed, armor, armorperlevel, spellblock, 
spellblockperlevel, attackrange, hpregen, hpregenperlevel, mpregen, mpregenperlevel, 
crit, critperlevel, attackdamage, attackdamageperlevel, attackspeedperlevel, attackspeed */
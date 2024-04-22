"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getChampionsById } from "../../../../champions/getChampionsById";
import HeaderApp from "../../../../components/header";
import "../../page.css";
import "../../../../styles/champion.css";
import ChampionInfo from "../../../../components/championInfo";

export default function ChampDetails({ params }) {
  const [champion, setChampion] = useState();
  const [Skin, setSkin] = useState("");

  useEffect(() => {
    async function fetchChampionDetails() {
      const fetchedChampion = await getChampionsById(params.champId, setChampion, setSkin);
    }
    fetchChampionDetails();
  }, [params.champId]);


  const divStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 20, 0.869) 100%), url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.champId}_${Skin}.jpg')`,
  };


  return (
    <main className="mainPage">
       <HeaderApp />
       <div onClick={() => champion && console.log(params.champId)}  style={divStyle} className="main">
        <ChampionInfo champion={champion} id={params.champId}/>
       </div>
    </main>
  );
}

/* Avaliable stats 
hp, hpperlevel, mp, mpperlevel, movespeed, armor, armorperlevel, spellblock, 
spellblockperlevel, attackrange, hpregen, hpregenperlevel, mpregen, mpregenperlevel, 
crit, critperlevel, attackdamage, attackdamageperlevel, attackspeedperlevel, attackspeed */

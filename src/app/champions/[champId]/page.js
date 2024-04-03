"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getChampionsById } from "../../../../champions/getChampionsById";
import HeaderApp from "../../../../components/header";
import "../../page.css";
import "../../../../styles/champion.css";
import ChampionInfo from "../../../../components/championInfo";

export default function ChampDetails({ params }) {
  const [champion, setChampion] = useState(null);

  return (
    <main className="mainPage">
       <HeaderApp />
       <ChampionInfo champion={params}/>
    </main>
  );
}

/* Avaliable stats 
hp, hpperlevel, mp, mpperlevel, movespeed, armor, armorperlevel, spellblock, 
spellblockperlevel, attackrange, hpregen, hpregenperlevel, mpregen, mpregenperlevel, 
crit, critperlevel, attackdamage, attackdamageperlevel, attackspeedperlevel, attackspeed */

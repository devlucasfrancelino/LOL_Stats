import { useState, useEffect } from "react";
import { getChampionsById } from "../champions/getChampionsById";

export default function ChampionInfo(params) {
  const [champion, setChampion] = useState();
  const [hp, setHp] = useState();
  const [armor, setArmor] = useState();
  const [crit, setCrit] = useState();
  const [attackdamage, setAd] = useState();
  const [attackspeed, setAs] = useState();
  const [ap, setAp] = useState(0);
  // ap is equal to ability power !!
  const [mr, setMr] = useState(0);
  // mr is equal to magic resist !!
  const [abilityHaste, setHabilityHaste] = useState(0);

  const level = 1;

  function calculateLevelStats(stat, statPerLevel, level) {
    return Math.round(stat + (level - 1) * statPerLevel);
  }

  useEffect(() => {
    async function fetchChampionDetails() {
      const champion = await getChampionsById(
        params.champion.champId,
        setChampion
      );
    }
    fetchChampionDetails();
  }, [params.championId]);

  const divStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 20, 0.869) 100%), url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.champion.champId}_0.jpg')`,
  };

  useEffect(() => {
    if (champion) {
      setHp(champion.stats.hp);
      setArmor(champion.stats.armor);
      setCrit(champion.stats.crit);
      setAd(champion.stats.attackdamage);
      setAs(champion.stats.attackspeed);
      setMr(champion.stats.spellblock);
    }
  }, [champion]);

  return (
    <main className="mainPage">
      {champion && (
        <div>
          <div className="championInfo">
            <div className={`championData`} style={divStyle}>
              <img
                className="championImg"
                src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champion.id}.png`}
              />
              <div className="championName">
                <h1>{champion.name}</h1>
                <p>{champion.title}</p>
              </div>
            </div>
            <div className="championStats">
              <div className="stat">
                <img className="icons" src="https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Health_icon.png"></img>
                <h2>Vida</h2>
                <p> {calculateLevelStats(hp, champion.stats.hpperlevel, level)} </p>
              </div>
              <div className="stat">
                <img className="icons" src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Attack_damage_icon.png"></img>
                <h2>AD</h2>
                <p>{attackdamage}</p>
              </div>
              <div className="stat">
                <img className="icons" src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Ability_power_icon.png"></img>
                <h2>AP</h2>
                <p>{ap}</p>
              </div>
              <div className="stat">
                <img className="icons" src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png"></img>
                <h2>Armor</h2>
                <p> {calculateLevelStats(armor,champion.stats.armorperlevel,level)} </p>
              </div>
              <div className="stat">
                <img className="icons" src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png" ></img>
                <h2>MR</h2>
                <p> {calculateLevelStats(mr, champion.stats.spellblockperlevel, level)} </p>
              </div>
              <div className="stat">
                <img className="icons" src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png"></img>
                <h2>Attack Speed</h2>
                <p>{attackspeed}</p>
              </div>
              <div className="stat">
                <img className="icons" src="https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cooldown_reduction_icon.png"></img>
                <h2>Aceleração de habilidade</h2>
                <p>{abilityHaste}</p>
              </div>
              <div className="stat">
                <img className="icons" src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Critical_strike_chance_icon.png"></img>
                <h2>Critico</h2>
                <p>{crit}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

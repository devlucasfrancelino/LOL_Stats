import { useState, useEffect } from "react";
import { getChampionsById } from "../champions/getChampionsById";

export default function ChampionInfo({ champion, id }) {
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
  const [divStyle, setDivStyle] = useState();
  const [input, setInput] = useState([]);
  const [level, setLevel] = useState(1);	

  const handleChange = (value) => {
    setInput(value);
    setLevel(value);
  };

  function calculateLevelStats(stat, statPerLevel, level) {
    return Math.round(stat + (level - 1) * statPerLevel);
  }

  useEffect(() => {
    if (champion) {
      setHp(champion.data[id].stats.hp);
      setArmor(champion.data[id].stats.armor);
      setCrit(champion.data[id].stats.crit);
      setAd(champion.data[id].stats.attackdamage);
      setAs(champion.data[id].stats.attackspeed);
      setMr(champion.data[id].stats.spellblock);

      setDivStyle({
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 20, 0.869) 100%), url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.data[id].id}_0.jpg')`,
      });
    }
  }, [champion]);

  return (
    <main className="main">
      {champion && champion.data && (
        <div>
          <div className="championInfo">
            <div className={`championData`} style={divStyle}>
              <img
                className="championImg"
                src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champion.data[id].id}.png`}
              />
              <div className="championName">
                <h1>{champion.data[id].name}</h1>
                <p>{champion.data[id].title}</p>
              </div>
            </div>
            <div className="levelChange">
                <p>Level</p>
                <input placeholder="1-18" onChange={(e) => handleChange(e.target.value)}></input>

            </div>
            <div className="championStats">
              <div className="stat">
                <img
                  className="icons"
                  src="https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Health_icon.png"
                ></img>
                <h2>Vida</h2>
                <br />
                <p>
                  {" "}
                  {calculateLevelStats(
                    hp,
                    champion.data[id].stats.hpperlevel,
                    level
                  )}{" "}
                </p>
              </div>
              <div className="stat">
                <img
                  className="icons"
                  src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Attack_damage_icon.png"
                ></img>
                <h2>AD</h2>
                <br />
                <p>{attackdamage}</p>
              </div>
              <div className="stat">
                <img
                  className="icons"
                  src="https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Ability_power_icon.png"
                ></img>
                <h2>AP</h2>
                <br />
                <p>{ap}</p>
              </div>
              <div className="stat">
                <img
                  className="icons"
                  src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Armor_icon.png"
                ></img>
                <h2>Armor</h2>
                <br />
                <p>
                  {" "}
                  {calculateLevelStats(
                    armor,
                    champion.data[id].stats.armorperlevel,
                    level
                  )}{" "}
                </p>
              </div>
              <div className="stat">
                <img
                  className="icons"
                  src="https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Magic_resistance_icon.png"
                ></img>
                <h2>MR</h2>
                <br />
                <p>
                  {" "}
                  {calculateLevelStats(
                    mr,
                    champion.data[id].stats.spellblockperlevel,
                    level
                  )}{" "}
                </p>
              </div>
              <div className="stat">
                <img
                  className="icons"
                  src="https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Attack_speed_icon.png"
                ></img>
                <h2>Attack Speed</h2>
                <br />
                <p>{attackspeed}</p>
              </div>
              <div className="stat">
                <img
                  className="icons"
                  src="https://static.wikia.nocookie.net/leagueoflegends/images/9/95/Cooldown_reduction_icon.png"
                ></img>
                <h2>Ability Haste</h2>
                <br />
                <p>{abilityHaste}</p>
              </div>
              <div className="stat">
                <img
                  className="icons"
                  src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Critical_strike_chance_icon.png"
                ></img>
                <h2>Critico</h2>
                <br />
                <p>{crit}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

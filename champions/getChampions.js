export async function getChampions(value, setResults) {

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
     }

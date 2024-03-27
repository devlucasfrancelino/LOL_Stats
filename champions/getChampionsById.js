export async function getChampionsById(id, setChampion) {
    try {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/14.6.1/data/pt_BR/champion.json`
      );
      const json = await response.json();
      const champions = Object.values(json.data);
      const champion = champions.find(champion => champion.id === id);
      setChampion(champion);
    }
    catch (error) {
        console.error("Erro ao buscar dados do campeão:", error);
        return null;
    }
}
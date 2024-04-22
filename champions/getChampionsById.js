export async function getChampionsById(id, setChampion, setNOfSkins, setSkins) {
    try {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/14.7.1/data/pt_BR/champion/${id}.json`
      );
      const champion = await response.json();
      setChampion(champion);
      const chooseRandomSkin = Math.floor(Math.random() * champion.data[id].skins.length);
      setNOfSkins(champion.data[id].skins[chooseRandomSkin].num);
    }
    catch (error) {
        console.error("Erro ao buscar dados do campeão:", error);
        return null;
    }
}
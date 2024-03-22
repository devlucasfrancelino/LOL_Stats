export async function getChampions() {
    const res = await fetch('https://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json')
    return res.json()
}


export async function getChampions() {
    const res = await fetch('https://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json')
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
})
//    return res.json()
}


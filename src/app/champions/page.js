'use client'

import { getChampions } from '../../../champions/getChampionsList';
import { useEffect, useState } from 'react';
import HeaderApp from '../../../components/Header/header';
export default function Casa() {
    const [championsData, setChampionsData] = useState([]);
    const [Aatrox, setAatrox] = useState();

    
    async function fetchChampionsData() {
        try {
          const championData = await getChampions();
          setChampionsData(championData);
          setAatrox(championData.data.Aatrox.name);
        } catch (error) {
          console.error('Erro ao buscar dados dos campeões:', error);
        }
    }
    useEffect(() => {
        fetchChampionsData();
    }, []);
    

  return (
    <main className="mainContainer">
      <HeaderApp/>
            {championsData ? (
                <div>
                  {championsData.map((champion) => (
                    <div>
                      <h1>{champion.name}</h1>
                      <h1>{champion.id}</h1>
                      <h1>{champion.key}</h1>
                      <h1>{champion.stats}</h1>
                      <h1>{champion.tags}</h1>
                      <h1>{champion.version}</h1>
                    </div>
                    ))}
                        </div>
                    
            ) : (
                <p>Carregando dados dos campeões...</p>
            )}
        </main>
  );
}

'use client'

import { getChampions } from '../../../champions/getChampionsList';
import { useEffect, useState } from 'react';
export default function Casa() {
    const [championsData, setChampionsData] = useState();
    
    async function fetchChampionsData() {
        try {
          const championData = await getChampions();
          setChampionsData(championData);
        } catch (error) {
          console.error('Erro ao buscar dados dos campeões:', error);
        }
    }
    useEffect(() => {
        fetchChampionsData();
    }, []);
    

  return (
    <main className="mainContainer">
            {championsData ? (
                <div>
                    <p>{championsData} </p>
                        </div>
                    
            ) : (
                <p>Carregando dados dos campeões...</p>
            )}
        </main>
  );
}

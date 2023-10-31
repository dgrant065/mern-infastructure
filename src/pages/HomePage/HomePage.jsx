import { useState, useEffect } from 'react';
import * as gamesAPI from '../../utilities/rawg-api'
import GamesCard from '../../components/GamesCard/GamesCard';
import './HomePage.css'

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(function() {
    async function getGames() {
        const games = await gamesAPI.getGames();
        setGames(games)
    }
    getGames() 
    
  }, []);

  const gamesList = games.map((game, idx) => <GamesCard game={game} key={idx}/>) 


    return ( 
      <div className='HomePage'>
      {gamesList}
      </div>
       )

}



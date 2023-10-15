import React from 'react'
import { useState, useEffect } from 'react';
import * as gamesAPI from '../../utilities/rawg-api'
import { useParams } from 'react-router-dom';

export default function GamesDetail() {
    const {id} = useParams()
    const [game, setGame] = useState({});

    useEffect(function() {
      async function getDetails() {
          const apiGame = await gamesAPI.getDetails(id);
          console.log(apiGame)
          setGame(apiGame)
      }
      getDetails() 
      
    }, []);

  return (
    <div id='board'>
        {game.det}
        <div className='image'><img src={game.background_image}/></div>
        <p>{game.description_raw}</p>
        </div>
    
  )
}

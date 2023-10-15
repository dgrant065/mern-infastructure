import React from 'react'
import "./GamesCard.css"
import { useNavigate } from 'react-router-dom'


export default function GamesCard({game, idx}) {
    const navigate = useNavigate()
    function gameDetail(id) {
        navigate(`/games/${id}`)

    }

  return (
    <div className="GamesCard" onClick={()=>gameDetail(game.id)}>
       <div className='image'><img src={game.background_image} /></div>
       <h1>{game.name}</h1>
    </div>
  )
}

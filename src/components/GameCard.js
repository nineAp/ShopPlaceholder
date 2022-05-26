import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addGame} from '../store/cartSlice'
import { GAMES_PATH } from '../utils/consts'
import '../css/game_card.css'

function GameCard({game}) {

    const dispatch = useDispatch()
    const cartGames = useSelector(state => state.cartGames.cartGames)
    const isItemInCart = cartGames.some(cartGame => cartGame.id === game.id)
    const navigate = useNavigate()
    

     const addToCart = (game) => {
      dispatch(addGame(game))
      console.log(cartGames)
    }
    

  return (
    <div className="game_card" key={game.id}>
        <img src={game.url} alt='ok'/>
        <h3>{game.title}</h3>
        <h4>Price: {game.price}</h4>
        {isItemInCart 
        ? 
        <h4>Game in cart</h4> 
        : 
        <button onClick={() => addToCart(game)} key={game.id}>Add to Cart</button>}
        <button onClick={() => navigate(`${GAMES_PATH}/${game.id}`)}>Open Game Page</button>
    </div>
  )
}

export default GameCard
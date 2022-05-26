import React from 'react'
import {removeGame} from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import '../css/cart_game.css'

function CartGame({game}) {
    const dispatch = useDispatch()
    

  return (
    <div className="cart_game">
        <img src={game.url} alt="game" />
        <div className='cart_game_middle'>
            <h2 key={game.id}>{game.title} </h2>
            <h3>Price: {game.price}</h3>
        </div>
        <span className='delete_btn' onClick={() => dispatch(removeGame(game))}><h4>DELETE</h4></span>
    </div>
  )
}

export default CartGame
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartGame from '../components/CartGame'
import { app_name } from '../utils/consts'
import '../css/cart.css'

function Cart() {

  const games = useSelector(state => state.cartGames.cartGames)
  const gamesCount = useSelector(state => state.cartGames.count)
  const totalPrice = useSelector(state => state.cartGames.totalPrice)

  const cartCopy = (...games) => {
    console.log(games)
  }

  useEffect(() => {
    document.title = app_name + 'Cart'
    window.scrollTo(0, 0)
    cartCopy(games)
  }, [games, totalPrice])

  return (
    <div className="content">
        <div className="cart">
          <div className="wrapper">
            <div className="cart_content">
              <h1 className='topic'>Cart</h1>
              <div className='cart_games'>
              {games.map((game, index) => 
              <CartGame game={game} key={game.id}></CartGame>
              )}
              {gamesCount === 0
              ? 
              <h1 style={{marginTop: '35vh'}} className='topic'>Cart is clean</h1> 
              :
              <div className="cart_page_footer">
                <button>Buy</button>
                <h2>Total Price: {totalPrice}</h2>
              </div>
              }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetchGameById} from '../store/gameSlice'
import {addGame} from '../store/cartSlice'
import { app_name } from '../utils/consts'
import '../css/game_page.css'

function GamePage() {
    const {gameId} = useParams()
    const game = useSelector(state => state.games.singleGame)
    const loading = useSelector(state => state.games.singleGameLoading)
    const avaliable = useSelector(state => state.games.avaliable)
    const cartGames = useSelector(state => state.cartGames.cartGames)
    const gameInCart = cartGames.some(cartGame => cartGame.id === game.id)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = app_name + game.title
        window.scrollTo(0, 0)
        dispatch(fetchGameById(gameId))
    }, [dispatch, gameId, game.title])


  return (
    <div className="content">
        <div className="game_page">
            <div className="wrapper">
                <div className="game_page_content">
                    {loading ? <h1>Loading...</h1> :
                    <>
                    {avaliable 
                    ? 
                    <>
                        <h2>{game.title}</h2>
                        <img src={game.url} alt='game'></img>
                        <h2>Price: {game.price}</h2>
                        <h2>Genres:</h2>
                        {game.genres.map((genre) =>
                            <h3 key={genre}>{genre}</h3>
                        )}
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Iure maiores nemo similique cumque aspernatur, quas id architecto quis ex ipsum neque, accusantium beatae culpa.
                            Dolorem, obcaecati harum. Modi, dolore praesentium.</p>
                        {
                        gameInCart 
                        ? 
                        <h2>Game In Cart</h2> 
                        :
                        <button onClick={() => dispatch(addGame(game))}>Add to Cart</button> 
                        }
                    </> 
                    : 
                    <h1>Game does not exist</h1>}
                    </>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default GamePage
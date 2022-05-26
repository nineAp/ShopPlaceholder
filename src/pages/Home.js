import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchGames} from '../store/gameSlice'
import GameCard from '../components/GameCard'
import { useNavigate } from 'react-router-dom'
import { app_name, GAMES_PATH } from '../utils/consts'
import '../css/home.css'

function Home() {

  const games = useSelector(state => state.games.games)
  const loading = useSelector(state => state.games.loading)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = app_name + 'Home'
    dispatch(fetchGames())
  }, [dispatch])


  return (
    <div className="content">
        <div className="home">
            <div className="wrapper">
                <div className="home_content">
                  <h1>Last games</h1>
                  {loading 
                  ? 
                  <h1>Loading...</h1> 
                  :
                  <div className='game_cards'>
                    {games.map((game, index) => 
                      index < 6 ?
                      <GameCard key={game.id} game={game}></GameCard>
                      :
                      null
                    )}
                  </div> 
                  }
                  <button className='hc_button' onClick={() => navigate(`${GAMES_PATH}/pages/1`)}>Open All Games</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
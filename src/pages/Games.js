import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchGames} from '../store/gameSlice'
import GameCard from '../components/GameCard'
import { createPages } from '../utils/pagesCounter'
import { app_name, GAMES_PATH, HOME_PATH } from '../utils/consts'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/games.css'

function Games() {

  const games = useSelector(state => state.games.games)
  const loading = useSelector(state => state.games.loading)
  const pagesCount = useSelector(state => state.games.pages)
  const {curPage} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pages = []
  createPages(pages, pagesCount, Number(curPage))

  useEffect(() => {
    document.title = app_name + 'Games'
    dispatch(fetchGames())
    window.scrollTo(0, 0)
    if(pagesCount > 1  && Number(curPage) > pagesCount) {
      navigate(HOME_PATH)
    }
  }, [dispatch, curPage, pagesCount, navigate])



  return (
    <div className="content">
        <div className="games">
          <div className="wrapper">
            <div className="home_content">
            <h1>All games</h1>
            {loading 
                  ? 
                  <h1>Loading...</h1> 
                  :
                  <div className="games_content">
                        <h2>Page: {curPage}</h2>
                        <div className='game_cards'>
                      {games.map((game, index) =>
                      index < (Number(curPage)*25) && index >= (Number(curPage)-1) * 25 ? 
                      <GameCard key={game.id} game={game}></GameCard>
                      :
                      null
                    )}
                      </div> 
                  </div>
                  }
            </div>
            <div className="pages">
              {pages.map((page) =>
                <span key={page} onClick={() => navigate(`${GAMES_PATH}/pages/${page}`)} className={Number(curPage) === page ? 'current_page' : 'page'}>{page}</span>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Games
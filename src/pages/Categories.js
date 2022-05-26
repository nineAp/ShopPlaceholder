import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import GameCard from '../components/GameCard'
import {fetchGames, setFiltredGames} from '../store/gameSlice'
import { app_name, CATEGORIES_PATH, genres, HOME_PATH } from '../utils/consts'
import { createPages } from '../utils/pagesCounter'
import '../css/categories.css'

function Categories() {

  const dispatch = useDispatch()
  const {catID, curPage} = useParams()
  const filtredGames = useSelector(state => state.games.filtredGames)
  const filtredPages = useSelector(state => state.games.filtredPages)
  const games = useSelector(state => state.games.games)
  const navigate = useNavigate()
  const pages = []
  createPages(pages, filtredPages, Number(curPage))

  const changePage = (page) => {
    navigate(`${CATEGORIES_PATH}/${catID}/${page}`)
  }

  const changeCategory = (genre) => {
    navigate(`${CATEGORIES_PATH}/${genre[0]}/1`)
  }


  useEffect(() => {
    document.title = `${app_name}Categories`
    window.scrollTo(0, 0)
    dispatch(fetchGames())
    dispatch(setFiltredGames(games.filter((game) => game.genres.some((genre) => genre === genres[catID]))))
    if(filtredPages > 1  && Number(curPage) > filtredPages) {
      navigate(HOME_PATH)
    }
  }, [dispatch, catID, curPage, games, filtredPages, navigate])



  return (
    <div className="content">
      <div className="categories">
        <div className="wrapper">
          <div className="categories_content">
            <h1 className='topic'>Categories</h1>
            <div className="cats_filter">
              <div className='cats_filter_scrollable'>
              {Object.entries(genres).map((genre) =>
              <button className='cats_btn'key={genre[0]} onClick={() => changeCategory(genre)}>{genre[1]}</button>
              )}
              </div>
            </div>
            {filtredGames.length === 0 
              ? 
              <h1 className='topic' style={{marginTop: '35vh'}}>Filter unset</h1> 
              : 
              <div className="game_cards">
                {filtredGames.map((game, index) =>
                index < (curPage*25) && index >= (curPage-1) * 25 ? 
                <GameCard key={game.id} game={game}></GameCard>
                :
                null
                )}
              </div>
              }
              <div className="pages">
              {pages.map((page) =>
                <span key={page} onClick={() => changePage(page)} className={Number(curPage) === page ? 'current_page' : 'page'}>{page}</span>
              )}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import GameCard from '../components/GameCard'
import '../css/search_page.css'
import { SEARCH_PATH } from '../utils/consts'
import { createPages } from '../utils/pagesCounter'
import {fetchGames} from '../store/gameSlice'

function SearchResult() {

  const searchedGames = useSelector(state => state.games.searchedGames)
  const searchedGamesPages = useSelector(state => state.games.searchedGamesPages)
  const {curPage} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pages = []
  createPages(pages, searchedGamesPages, Number(curPage))
  console.log(searchedGames.length === 0)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchGames())
  }, [dispatch, navigate])

  return (
    <div className="content">
        <div className="serach_res">
            <div className="wrapper">
                <div className="search_res_content">
                    <h1 className='topic'>Search Result</h1>
                    {searchedGames.length === 0 
                    ? 
                    <h1 className='topic' style={{marginTop: '35vh'}}>Games not found</h1> 
                    : 
                    <div className="game_cards">
                      {searchedGames.map((game, index) =>
                       index < (Number(curPage)*25) && index >= (Number(curPage)-1) * 25 ? 
                        <GameCard game={game} key={game.id}></GameCard>
                        :
                        null
                      )}
                    </div>
                    }
                </div>
                {searchedGamesPages > 1 
                ? 
                <div className="pages">
                {pages.map((page) =>
                <span key={page} onClick={() => navigate(`${SEARCH_PATH}/${page}`)} className={Number(curPage) === page ? 'current_page' : 'page'}>{page}</span>
               )}
              </div> 
                : 
                null}
            </div>
        </div>
    </div>
  )
}

export default SearchResult
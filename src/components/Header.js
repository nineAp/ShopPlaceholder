import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CART_PATH, CATEGORIES_PATH, GAMES_PATH, HOME_PATH, SEARCH_PATH } from '../utils/consts'
import {setSeachedGames} from '../store/gameSlice'
import '../css/header.css'

function Header() {

    const gamesCount = useSelector(state => state.cartGames.count)
    const games = useSelector(state => state.games.games);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const searchString = useRef()
    
    const search = () => {
        dispatch(setSeachedGames(games.filter(game => game.title.includes(searchString.current.value))))
        navigate(SEARCH_PATH + '/1')
    }

  return (
    <div className="header">
        <div className="wrapper">
            <div className="header_content">
                <h1 className='logo' onClick={() => navigate(HOME_PATH)}>ShopPlaceholder</h1>
                <nav>
                    <h3 onClick={() => navigate(HOME_PATH) } className='header_link'>Home</h3>
                    <h3 onClick={() => navigate(`${GAMES_PATH}/pages/1`) } className='header_link'>Games</h3>
                    <h3 onClick={() => navigate(CATEGORIES_PATH) } className='header_link'>Categories</h3>
                    <div className="search">
                        <input type="text" placeholder='Search Game' className='search_input' ref={searchString}/>
                        <button className='search_btn' onClick={() => search()}>Go!</button>
                    </div>
                </nav>
                <div className="cart_link" onClick={() => navigate(CART_PATH)}>
                    <h3 className='header_link'><span className="material-symbols-outlined">shopping_cart</span></h3>
                    <div className='cart_number_circle'>
                        <h4>{gamesCount}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
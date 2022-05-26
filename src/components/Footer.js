import React from 'react'
import {useNavigate} from 'react-router-dom'
import { CART_PATH, CATEGORIES_PATH, GAMES_PATH, HOME_PATH } from '../utils/consts'
import '../css/footer.css'

function Footer() {
    const navigate = useNavigate()

  return (
    <div className="footer">
        <div className="wrapper">
            <div className="footer_content">
                <div className="fc_left">
                    <nav>
                        <h1 className='logo' onClick={() => navigate(HOME_PATH)}>ShopPlaceholder</h1>
                        <h3 className='footer_link' onClick={() => navigate(HOME_PATH)}>Home</h3>
                        <h3 className='footer_link' onClick={() => navigate(GAMES_PATH)}>Games</h3>
                        <h3 className='footer_link' onClick={() => navigate(CATEGORIES_PATH)}>Categories</h3>
                        <h3 className='footer_link' onClick={() => navigate(CART_PATH)}>Cart</h3>
                    </nav>
                    <nav>
                        <h2>More links</h2>
                        <h3 className='footer_link' onClick={() => navigate(HOME_PATH)}>Lorem</h3>
                        <h3 className='footer_link' onClick={() => navigate(HOME_PATH)}>Lorem</h3>
                        <h3 className='footer_link' onClick={() => navigate(HOME_PATH)}>Lorem</h3>
                        <h3 className='footer_link' onClick={() => navigate(HOME_PATH)}>Lorem</h3>
                        <h3 className='footer_link' onClick={() => navigate(HOME_PATH)}>Lorem</h3>
                    </nav>
                </div>
                <div className="fc_right">
                    <p>© 2022 ShopPlaceholder All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
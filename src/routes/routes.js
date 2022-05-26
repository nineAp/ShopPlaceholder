import { CART_PATH, CATEGORIES_PATH, GAMES_PATH, HOME_PATH, SEARCH_PATH } from "../utils/consts";
import Home from "../pages/Home";
import Games from '../pages/Games'
import Categories from '../pages/Categories'
import Cart from '../pages/Cart'
import GamePage from "../pages/GamePage";
import SearchResult from "../pages/SearchResult";

export const publicRoutes = [
    {
        path: HOME_PATH,
        element: <Home/>
    },
    {
        path: `${GAMES_PATH}/pages/:curPage`,
        element: <Games/>
    },
    {
        path: CATEGORIES_PATH,
        element: <Categories/>
    },
    {
        path: `${CATEGORIES_PATH}/:catID/:curPage/`,
        element: <Categories/>
    },
    {
        path: CART_PATH,
        element: <Cart/>
    },
    {
        path: GAMES_PATH + '/:gameId',
        element: <GamePage/>
    },
    {
        path: SEARCH_PATH + '/:curPage',
        element: <SearchResult/>
    }
]
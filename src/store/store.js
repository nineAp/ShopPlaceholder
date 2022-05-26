import { configureStore } from "@reduxjs/toolkit";
import  cartSlice from "./cartSlice";
import logger from 'redux-logger'
import gameSlice  from "./gameSlice";

export default configureStore({
    reducer: {
        cartGames: cartSlice,
        games: gameSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(logger)
})
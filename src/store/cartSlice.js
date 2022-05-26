import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartGames',
    initialState: {
        cartGames: [],
        count: 0,
        totalPrice: 0
    },
    reducers: {
        addGame: (state, action) => {
            state.cartGames.push(action.payload)
            state.count = state.cartGames.length
            state.cartGames.forEach((game) => {
                if(game === action.payload) {
                    state.totalPrice += game.price
                }
            })
        },
        removeGame: (state, action) => {
            state.cartGames.forEach((game) => {
                if(game.id === action.payload.id) {
                    state.totalPrice -= game.price
                }
            })
            state.cartGames = state.cartGames.filter(cartGame => cartGame.id !== action.payload.id)
            state.count = state.cartGames.length
        }
    }
})

export const {addGame, removeGame, incrementGame} = cartSlice.actions

export default cartSlice.reducer
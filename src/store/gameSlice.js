import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GamesService from '../APIServices/GamesService'
import { genres, prices } from "../utils/consts";
import { getRandom, getRandomWithoutRepeat } from "../utils/getRandom";


export const fetchGames = createAsyncThunk('games', async() => {
    return await GamesService.getAll()
})


export const fetchGameById = createAsyncThunk('single_game', async(gameId) => {
    return await GamesService.getById(gameId)
})



export const gameSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
        pages: 1,
        loading: true,
        singleGameLoading: true,
        singleGame: {},
        avaliable: true,
        filtredGames: [],
        filtredPages: 1,
        searchedGames: [],
        searchedGamesPages: 1
    },
    reducers: {
        setFiltredGames: (state, action) => {
            state.filtredGames = action.payload
            state.filtredPages = Math.ceil(state.filtredGames.length/25)
        },
        setSeachedGames: (state, action) => {
            state.searchedGames = action.payload
            state.searchedGamesPages = Math.ceil(state.searchedGames.length/25)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGames.pending, state => {
            state.avaliable = true
            state.loading = true;
        })
        builder.addCase(fetchGames.fulfilled, (state, action) => {
            if(state.games.findIndex(game => game.id !== action.payload.id)){
                state.games.push(...action.payload)
                state.games.forEach((game) => {
                    game.title = game.title[0].toUpperCase() + game.title.substr(1, [10])
                    game.price = prices[getRandom(0, Object.keys(prices).length)]
                    let gameGenresCodes = getRandomWithoutRepeat(0, Object.keys(genres).length, 3)
                    let gameGenres = []
                    gameGenresCodes.forEach((genreCode) => (
                        gameGenres.push(genres[genreCode])
                    ))
                    game.genres = gameGenres
                })
            }
            state.pages = Math.ceil(state.games.length/25)

            state.loading = false
        })
        builder.addCase(fetchGameById.pending, (state) => {
            state.singleGameLoading = true
        })
        builder.addCase(fetchGameById.fulfilled, (state, action) => {
            state.singleGame = action.payload
            state.singleGame.title = state.singleGame.title[0].toUpperCase() + state.singleGame.title.substr(1, [10])
            state.singleGame.price = prices[getRandom(0, Object.keys(prices).length)]
            let gameGenresCodes = getRandomWithoutRepeat(0, Object.keys(genres).length, 3)
            let gameGenres = []
            gameGenresCodes.forEach((genreCode) => (
                gameGenres.push(genres[genreCode])
            ))
            state.singleGame.genres = gameGenres
            state.singleGameLoading = false
        })
        builder.addCase(fetchGameById.rejected, (state) => {
            state.singleGameLoading = false
            state.avaliable = false
        })
    }
})

export const {setFiltredGames, setSeachedGames} = gameSlice.actions

export default gameSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      const newState = { ...state };
      newState.url = action.payload;
      return newState;
    },
    getGenres: (state, action) => {
      const newGenreState = { ...state }
      newGenreState.genres = action.payload
      return newGenreState
    }
  },
})

export const { getApiConfiguration, getGenres } = homeSlice.actions

export default homeSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import { fetchMovieDetails } from "../../api/movie.api"
const INITIAL_STATE ={
    searchResult:{},
    isLoading:false,
    error:''
}
export const showSlice=createSlice({
    name:'show slice',
    initialState:INITIAL_STATE,
    extraReducers:(builder)=> {
        builder.addCase(fetchMovieDetails.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchResult = action.payload;
          })
          builder.addCase(fetchMovieDetails.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
          })
    }
})
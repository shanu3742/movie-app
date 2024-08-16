import { createSlice } from "@reduxjs/toolkit"
import { fetchMovie } from "../../api/movie.api"
const INITIAL_STATE ={
    searchResult:{},
    filterResult:{},
    isLoading:false,
    error:''
}
export const homeSlice=createSlice({
    name:'home slice',
    initialState:INITIAL_STATE,
    extraReducers:(builder)=> {
        builder.addCase(fetchMovie.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchResult = action.payload;
            state.filterResult=action.payload
          })
          builder.addCase(fetchMovie.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
          })
    }
})
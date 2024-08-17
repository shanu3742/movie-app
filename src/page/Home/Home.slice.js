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
    },
    reducers:{
      onMovieFilter(state,action){
        //right know we don't have rating we will not applay rating filter
         
          let customKey =Object.keys(action.payload['cutom Filter']);
          console.log(customKey)

         if(action.payload?.genre?.length>0){
          state.filterResult.Search = state.filterResult.Search.filter((el) => {
            if(action.payload.genre.includes(el.Type )){
             return true
            }else{
              return false
            }
          })
         } 
         if(action.payload['release Year']?.start !==undefined){
           state.filterResult.Search= state.filterResult.Search.filter((el) => {
            let movieDate =new Date(el.Year);
            let dateObj = action.payload['release Year']
            let lowerDate= new Date(dateObj.start)
            let higerDate= new Date(dateObj.end)
            if(movieDate.getTime()> lowerDate.getTime()  && movieDate.getDate()< higerDate.getTime() ){
               return true
            }else{
              return false
            }
          })
         }
         if(customKey?.length>0){
          
          state.filterResult.Search= state.filterResult.Search.filter((el) => el[customKey[0]]  ===  action.payload['cutom Filter'][customKey[0]] )
         }

        
      }
    }


})

export const  {onMovieFilter}  = homeSlice.actions
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { homeSlice } from "../page/Home/Home.slice";
import { showSlice } from "../page/Show/Show.slice";
const rootReducer = combineReducers({
     home:homeSlice.reducer,
     show:showSlice.reducer
  });
export const store= configureStore({
    reducer:rootReducer,
    
})
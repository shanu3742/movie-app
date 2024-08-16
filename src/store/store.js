import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { homeSlice } from "../page/Home/Home.slice";
const rootReducer = combineReducers({
     home:homeSlice.reducer,
  });
export const store= configureStore({
    reducer:rootReducer,
    
})
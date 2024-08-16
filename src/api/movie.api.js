import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchMovie = createAsyncThunk('home/fetchmovie', async (searchText='india') => {
    const res = await axios(`https://www.omdbapi.com/?s=${searchText}&apikey=86360b2a`)
    const data = await res.data
    return data
  }
)

export {fetchMovie}
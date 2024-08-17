import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchMovie = createAsyncThunk('home/fetchmovie', async (searchText='india') => {
    const res = await axios(`https://www.omdbapi.com/?s=${searchText}&apikey=86360b2a`)
    const data = await res.data
    return data
  }
)

const fetchMovieDetails = createAsyncThunk('home/fetchmovie', async (id) => {
  console.log(id)
  const res = await axios(`https://www.omdbapi.com/?i=${id}&apikey=86360b2a`)
  const data = await res.data
  return data
}
)


export {fetchMovie,fetchMovieDetails}
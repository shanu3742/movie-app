import React, { memo, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import './Search.scss'

const Search = ({onSearch}) => {
    const [isThrottled, setIsThrottled] = useState(false);
  return (
    <form className='movie-search__container' onSubmit={(e)=>{
        if (isThrottled) return;
        setIsThrottled(true);
         // Re-enable the button after 2 seconds
        setTimeout(() => {
        setIsThrottled(false);
         }, 3000);
        onSearch(e)
    }}>
        <input className='movie_input'  />
        <button disabled={isThrottled} className={`movie-serach__button   ${!isThrottled ? "movie-serach__button__active" : "movie-serach__button__inactive"}`} type='submit'  >
            <CiSearch />
        </button>
    </form>
  )
}

export default memo(Search)

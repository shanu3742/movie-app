import React, { useState, useEffect } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import Card from '../card/Card';

const ResponsiveGrid = ({ items }) => {
    console.log(items)
  const [movieIdList,setMovieIdList] = useState(JSON.parse(localStorage.getItem('movieid'))??[])
  console.log(movieIdList)
  const [columnCount, setColumnCount] = useState(1);
  const columnWidth = 300;
  const rowHeight = 550;

  const onStarClick = React.useCallback((movie) => {
    const movieSavedInMemory =JSON.parse(localStorage.getItem('movie'))??[];
    const movieIdList =JSON.parse(localStorage.getItem('movieid'))??[];
    const movieId=movie.imdbID;
    let updatedIdList = [...movieIdList];
    let updatedMovie = [...movieSavedInMemory]
    //if movie is not added in that case add movie to list
    if(!movieIdList.includes(movieId)){
       updatedIdList= [...movieIdList,movieId]
       updatedMovie = [movie,...movieSavedInMemory]
    }
    localStorage.setItem('movie',JSON.stringify(updatedMovie))
    localStorage.setItem('movieid',JSON.stringify(updatedIdList))
    setMovieIdList(updatedIdList)
  
},[])

  // Function to calculate number of columns based on window width
  const updateColumnCount = () => {
    const width = window.innerWidth;
    if(width>0&& width<626){
        setColumnCount(1)
    }
    else if(width>625 && width< 900){
        setColumnCount(2)
    }
    else if(width>900 && width<1020){
        setColumnCount(3)
    }
    else if(width>1020 && width<1440){
        setColumnCount(4)
    }
    else{
        setColumnCount(5)
    }

    
  };

  // Add event listener to handle resize
  useEffect(() => {
    updateColumnCount(); // Set initial column count
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  // Render cell
  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= items.length) return null;
    

    return (
      <div
        style={{
          ...style,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          height:500
        }}
      >
        <Card key={items[index]?.imdbID}  id={items[index]?.imdbID} name={items[index]?.Title} image={items[index]?.Poster} onStarClick={() => onStarClick(items[index])} active={movieIdList.includes(items[index]?.imdbID)}/>
      </div>
    );
  };

  const rowCount = Math.ceil(items.length / columnCount);

  return (
    <Grid
      columnCount={columnCount}
      columnWidth={() => columnWidth}
      height={550}
      rowCount={rowCount}
      rowHeight={() => rowHeight}
      width={window.innerWidth}
    >
      {Cell}
    </Grid>
  );
};

export default ResponsiveGrid;

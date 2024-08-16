import React,{memo, useState} from 'react'
import './Home.scss'
import { CuttomAlert, Search } from '../../lib'
import {Card} from '../../component'
import { FaFilter } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../api/movie.api';
const Alert_Message='search text atleast has three character';
const Filter_Data = {
    genre:['Action', 'Adventure'],
    'release Year':{
        start:'',
        end:''
    },
    rating:{
        value:'',
    },
    'cutom Filter':{}

}
const Home = () => {
const [movieIdList,setMovieIdList] = useState(JSON.parse(localStorage.getItem('movieid'))??[])
const homeStore = useSelector((store) => store.home);
const dispatch = useDispatch()
console.log(homeStore)
const [isfilterOn,setIsFilterOn] = useState(false);
const [filterOption,setFilterOption] = useState({})
const onMovieSearch = (e) => {
        e.preventDefault();
        let searchText = e.nativeEvent.target[0].value;
        if(searchText.length<3){
            CuttomAlert(Alert_Message)
        }else{
            dispatch(fetchMovie(searchText))
        }
}

const onCheckBoxSelect = (key, value) => {
        setFilterOption((prevFilterOptions) => {
          const currentOptions = prevFilterOptions[key] || [];
          
          if (currentOptions.includes(value)) {
            // If the value is already selected, remove it
            return {
              ...prevFilterOptions,
              [key]: currentOptions.filter((el) => el !== value),
            };
          } else {
            // If the value is not selected, add it
            return {
              ...prevFilterOptions,
              [key]: [...currentOptions, value],
            };
          }
        });
      };
const onDateSelect =(e, key,subKey) =>{
    console.log(e.target.value,subKey,key)
  setFilterOption( (p) => {
    let filterObj = {...p};
    if(filterObj[key]===undefined){
        filterObj[key]={...Filter_Data[key]}
    }
    filterObj[key][subKey]=e.target.value;
   return {...filterObj}
 
})
}

const onRangeSlide = (e,key) => {
    setFilterOption((p) => {
        let rangeObj ={...p}
        if( rangeObj[key] ===undefined){
            rangeObj[key]={}
        }
        rangeObj[key].value= e.target.value;
        return {...rangeObj}
    })

}
const onCustomSelection = (e,key,type) => {
    if(type==='key'){
      setFilterOption((p) => {
        return {...p ,[key]:{[e.target.value]:''}}
      })
    }else{
        setFilterOption((p) => {
            return {...p ,[key]:{[type]:e.target.value}}
          })
    }
}

//get search on first time page loaded
React.useEffect(() => {
   dispatch(fetchMovie())
},[])
const onFilter = () => {
    setIsFilterOn(false)
    console.log(filterOption)
}


const onStarClick = React.useCallback((movie) => {
    const movieSavedInMemory =JSON.parse(localStorage.getItem('movie'))??[];
    const movieIdList =JSON.parse(localStorage.getItem('movieid'))??[];
    const movieId=movie.imdbID;
    const updatedIdList = [...movieIdList,movieId]
    const updatedMovie = [movie,...movieSavedInMemory]
    localStorage.setItem('movie',JSON.stringify(updatedMovie))
    localStorage.setItem('movieid',JSON.stringify(updatedIdList))
    setMovieIdList(updatedIdList)
  
},[])
      
  return (
    <>
        <section className='movie_home__header'>
           <Search onSearch={onMovieSearch} />
           <div className='movie-filter__container'>
                <button className='movie-filter__btn m-h-5' onClick={() => setIsFilterOn((p) => !p) }><FaFilter/></button>
                {
                    isfilterOn && <>
                        <div className='movie-filter__option___overlay' onClick={() => setIsFilterOn(false)}>  </div>
                        <section className='movie-filter__option___container p-h-10'>
                        <div>
                        <button className='movie-filter__close-btn' onClick={() => setIsFilterOn(false)}>
                            <IoMdCloseCircle />
                        </button>
                        </div>
                        <div className='movie-filter__option'>
                        {
                            Object.keys(Filter_Data).map((el_key,i) => {
                                    return <div key={el_key+i}>
                                      <h5>{el_key}</h5>
                                      {
                                        Array.isArray(Filter_Data[el_key]) && <div className='movie-checkbox__filter___container'>
                                        {
                                            Filter_Data[el_key].map((selectBoxEl,index) => {
                                                return <div key={selectBoxEl+index}>
                                                <label htmlFor={selectBoxEl}>{selectBoxEl}</label>
                                                 <input className='m-h-5' id={selectBoxEl} type='checkbox' checked ={ Array.isArray(filterOption[el_key]) &&  filterOption[el_key].includes(selectBoxEl)} onChange={() => onCheckBoxSelect(el_key,selectBoxEl)} />
                                                 </div>
                                            })
                                        }
                                         </div>
                                      }

                                      {
                                        el_key === 'release Year' && Object.keys(Filter_Data[el_key]).length &&   Object.keys(Filter_Data[el_key]).map((date_key,index) =>{
                                                return <div key={date_key+index}>
                                                        <label htmlFor={date_key}>{index ===0? 'Start date:':'End Date'}</label>
                                                        <input id={date_key} type="date"  name="trip-start" value= {filterOption[el_key] ? filterOption[el_key][date_key]:Filter_Data[el_key][date_key]} onChange={(e)=>onDateSelect(e,el_key,date_key)} />
                                                  </div>
                                        })
                                      }

                                      {
                                        el_key === 'rating' &&   
                                                <div>
                                                        <label htmlFor="range">Selecct rating range</label>
                                                        <input id='range' type="range" min={1} max={5}  name="rating" value= {filterOption[el_key] ?filterOption[el_key].value:'0'} onChange={(e)=>onRangeSlide(e,el_key)} />
                                                  </div>
                                      }
                                      
                                      {
                                        el_key === 'cutom Filter' &&   
                                                <div>
                                                        <input placeholder='enter key'    value= {filterOption[el_key] ?Object.keys(filterOption[el_key])[0]:''} onChange={(e)=>onCustomSelection(e,el_key,'key')} />
                                                        <input placeholder='enter value'    value= {filterOption[el_key] ?filterOption[el_key][Object.keys(filterOption[el_key])[0]]:''} onChange={(e)=>onCustomSelection(e,el_key,  Object.keys(filterOption[el_key])[0]  )} />
                                                </div>
                                      }
                                    
                                    </div>
                            })
                        }
                        <button className='m-t-10 movie-filter__button' onClick={onFilter}>Applay Filter</button>
                        </div>
                      
                        </section>
                    </>
                   
                   
                }
           </div>
        </section>

       <footer className='movie-home_card__container m-t-10'>
           {homeStore.isLoading && <h1> loading...</h1>}
           {!homeStore.isLoading  && homeStore.filterResult?.Search?.length>0 && <>

        {
            homeStore.filterResult?.Search.map((cardItem,cardIndex) => {
                return <Card key={cardItem.imdbID}  id={cardItem.imdbID} name={cardItem.Title} image={cardItem.Poster} onStarClick={() => onStarClick(cardItem)} active={movieIdList.includes(cardItem.imdbID)}/>
            })
        }

            </>

           }
       </footer> 
    </>
  )
}

export default memo(Home)

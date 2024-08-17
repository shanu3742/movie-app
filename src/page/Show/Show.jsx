import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { fetchMovieDetails } from '../../api/movie.api';
import { useSelector } from 'react-redux';
import { FetchError, Loading } from '../../lib';
import './Show.scss'

const Show = () => {
    const showSelector = useSelector((selector) => selector.show);
    const navigate = useNavigate()
    //showSelector.searchResult
    //showSelector.isLoading
    //showSelector.isLoading
    //showSelector.error

    const params = useParams();
    const dispatch = useDispatch()
    React.useEffect(() => {
       dispatch(fetchMovieDetails(params.id))
    },[params.id])

    console.log(showSelector)
    if(showSelector.isLoading){
        return <div className='loading-cont'><Loading/></div>
      }
      if(showSelector.error){
        return <div className='error'><FetchError error={showSelector.error}/></div>
      }
      if(showSelector?.searchResult?.Poster){
        return (
          <div className='showDetails-container'>
            <button className='card-button2'onClick={()=>navigate(-1)}>Back</button>
            <div className='show-details-top'>
              <div className='show-details-image'>
                <img src={showSelector.searchResult?.Poster} width={'300px'} height={'470px'} alt='show deatails' />
              </div>
              <div className='show-details-descr'>
               <div className='show-details-desc-title'>
                <h2>{showSelector.searchResult?.Title}</h2>
                <span>|</span>
                <p>❤ {!showSelector?.searchResult?.imdbRating}</p>
               </div>
               <div className='show-details-desc-summary'>
                {showSelector?.searchResult?.Plot}
               </div>
               <div className='tag-container'>
                 <b>Tags:</b>
                 {
                showSelector?.searchResult?.Genre.split(',').map((tagName,tagIndex)=>{
                    return <div key={`${tagName}-${tagIndex}`}><span>{tagName}</span></div>
                  })
                 }
               </div>
              
               
              </div>
            </div>
    
            <div className='show-details-middle-first'> 
             <h3>Details</h3>
             <div className='details-desc'>
               <div>
                <span>Status:</span>
                <span><b>{'Active'}</b></span>
               </div>
               <div>
                <span>Premiered:</span>
                <span>{showSelector?.searchResult?.Released}</span>
               </div>
             </div>
    
            </div>
          
         
           
          </div>
        )
      }
}

export default Show
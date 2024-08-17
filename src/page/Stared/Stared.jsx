import React, { useState } from 'react'
import './Stared.scss'
import { Card } from '../../component'
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router';
const Starred = () => {
  const navigate = useNavigate()
  const [savedCard,setsavedCard]=useState(JSON.parse(localStorage.getItem('movie'))??[])
 
  const handleRemove=(itemToRemove)=>{
   let restItems=savedCard.filter((el,i)=>el.imdbID !==itemToRemove.imdbID)
   localStorage.setItem('shows',JSON.stringify(restItems))
   setsavedCard(restItems)
  }

  return (
    <div className='starred-container'>
     {
      savedCard?.length !==0 ? <>
      {
      savedCard.map((card,cardId)=>{
        return  (
            <div className='saved-card-container'>
            <button className='navigation-button' onClick={() => navigate('/home')}>Go To Home</button>
            <button className='remove-button' onClick={() => handleRemove(card)}>
                     <IoMdCloseCircle />
            </button>
            
            <Card key={card?.imdbID}  id={card?.imdbID} name={card?.Title} image={card?.Poster}  active={true}/>
            </div>
        )
        
      })
      }
      </>:<>
      please add your favorite show</>
     }
    </div>
  )
}

export default Starred
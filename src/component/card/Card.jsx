
import {  Link } from 'react-router-dom';
import './Card.scss'
const Card = ({ id, name, image,onStarClick,active}) => {
   
    return (
        <div className='cards'>
            <div className="img-wrapper">
                <img src={image} alt={name} className="img" />
            </div>
            <h1>{name}</h1>
            <div className={`btns `}>
                <Link to={`/show/${id}`}>
                    Read more
                </Link>
                <button type="button" onClick={onStarClick} >
                    <div className={`star ${active? 'active':''}`} />
                </button>
            </div>
        </div>
    );
};

export default Card
import React, { useState } from 'react';
import './SearchResult.css';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) => {
    const [fav, setfav] = useState(false)

    let style = {
        color:'#333'
    }
    let icon = null
    if(fav){
        style.color = 'rgb(250, 28, 28)'
        icon = <FavoriteIcon style={style} onClick={()=> setfav(!fav)} className="search-result__heart" />
    }
    else
       icon = <FavoriteBorderIcon style={style} onClick={()=> setfav(!fav)} className="search-result__heart" />

    return (
        <div className='search-result'>
            <img src={img} alt="" />
            {icon}
            <div className='search-result__info'>
                <div className="search-result__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="search-result__infoBottom">
                    <div className="search-result__stars">
                        <StarIcon className="search-result__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='search-results__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult

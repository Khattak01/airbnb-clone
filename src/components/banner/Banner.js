import React,{useState} from 'react'
import './Banner.css'

import Search from '../search/Search'
import {useHistory} from 'react-router-dom'
// import { Button } from "@material-ui/core";

const Banner = () => {
    const [showSearch,setShowSearch] = useState(false)
    const history = useHistory()
    
    return (
        <div className="banner">
            <hr className="horizental-line"/>
                {showSearch && <Search />}
            <div className="banner__search">
    <button onClick={()=> setShowSearch(!showSearch)} className="banner__search-btn">{showSearch? "hide":"Search Dates"}</button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getway to
                uncover the hidden
                gems near you
                </h5>
                <button onClick={() => history.push('/search')}>Explore nearby</button>
            </div>
        </div>
    )
}

export default Banner

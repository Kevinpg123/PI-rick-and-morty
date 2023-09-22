import React from 'react'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom"
import style from "./styles_css/Nav.module.css"

export default function Nav({ onSearch }) {
    // console.log(onSearch);
    return (
        <div>
            <Link to="/home">
                <button className={style.button1}>Home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/favorites">
                <button>Favorites</button>
            </Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

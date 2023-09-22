import React from 'react'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom"
import style from "./styles_css/Nav.module.css"

export default function Nav({ onSearch }) {
    // console.log(onSearch);
    return (
        <div className={style.divBig}>
            <Link to="/home">
                <button className={style.buttons}>Home</button>
            </Link>
            <Link to="/about">
                <button className={style.buttons}>About</button>
            </Link>
            <Link to="/favorites">
                <button className={style.buttons}>Favorites</button>
            </Link>

            <SearchBar onSearch={onSearch} />
        </div>
    )
}

import React from 'react'
import SearchBar from './SearchBar'

export default function Nav({ onSearch }) {
    // console.log(onSearch);
    return (
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

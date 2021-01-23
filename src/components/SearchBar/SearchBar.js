import React from 'react'

const SearchBar = ({ searchTerm, changeSearchTerm }) => {

    return (
        <div>
            <div className="m-4 text-gray-400 text-5xl">Search</div>
            <input
                type="text"
                maxLength="20"
                value={searchTerm}
                onChange={changeSearchTerm}
                className="px-4 py-3 mx-4 text-lg text-gray-300 bg-gray-800 rounded max-w-2xl w-full focus:outline-none" />
        </div>
    )
}

export default SearchBar

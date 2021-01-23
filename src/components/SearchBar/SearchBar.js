import React from 'react'

const SearchBar = ({ searchTerm, changeSearchTerm, searchTag }) => {

    return (
        <div>
            <div className="m-4 text-gray-400 text-5xl">Search</div>
            <div className="flex items-center">
                <input
                    type="text"
                    maxLength="20"
                    value={searchTerm}
                    onChange={changeSearchTerm}
                    className="px-4 py-2 mx-4 text-lg text-gray-300 bg-gray-800 rounded max-w-lg w-full focus:outline-none" />
                <button
                    onClick={searchTag}
                    className="ml-1 px-3 py-2 text-sm bg-blue-400 text-white rounded-md"
                >Search </button>
            </div>
        </div>
    )
}

export default SearchBar

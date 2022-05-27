import React from 'react'

interface ISearchBar {}

const SearchBar: React.FC<ISearchBar> = () => {
  return (
    <div>
      SEARCH
      <input type="text" />
    </div>
  )
}

export default SearchBar

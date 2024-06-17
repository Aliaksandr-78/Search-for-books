import React from 'react'
import { useState } from 'react'
import poisk from '/poisk.png'

interface SearchBarProps {
  onSearch: (query: string, category: string, sort: string) => void
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [localQuery, setLocalQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('relevance')
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(event.target.value)
  }
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value)
  }
  const handleSearch = () => {
    onSearch(localQuery, category, sort)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(localQuery, category, sort)
    }
  }
  return (
    <div>
      <input
        type="text"
        value={localQuery}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for books"
      />
      <button onClick={handleSearch}><img src={poisk} alt="poisk" /></button>
      <br />
      <p>
        Category    
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </select>
        Sorting by
        <select value={sort} onChange={handleSortChange}>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>
      </p>
    </div>
  )
}
export default SearchBar
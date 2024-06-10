import PropTypes from 'prop-types'
import { useState } from 'react'
import poisk from '/poisk.png'

const SearchBar = ({ onSearch }) => {
  const [localQuery, setLocalQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('relevance')

  const handleQueryChange = (event) => {
    setLocalQuery(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleSortChange = (event) => {
    setSort(event.target.value)
  }

  const handleSearch = () => {
    onSearch(localQuery, category, sort)
  }

  const handleKeyDown = (event) => {
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

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchBar

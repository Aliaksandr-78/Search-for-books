import React, { useState } from 'react'
import Select from './Select'
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
        placeholder="Поиск книг"
      />
      <button onClick={handleSearch}>
        <img src={poisk} alt="поиск" />
      </button>
      <br />
      <p>
        <Select
          label="Категория"
          value={category}
          options={[
            { value: 'all', label: 'Все' },
            { value: 'art', label: 'Искусство' },
            { value: 'biography', label: 'Биография' },
            { value: 'computers', label: 'Компьютеры' },
            { value: 'history', label: 'История' },
            { value: 'medical', label: 'Медицина' },
            { value: 'poetry', label: 'Поэзия' }
          ]}
          onChange={handleCategoryChange}
        />
        <Select
          label="Сортировка"
          value={sort}
          options={[
            { value: 'relevance', label: 'По релевантности' },
            { value: 'newest', label: 'По новизне' }
          ]}
          onChange={handleSortChange}
        />
      </p>
    </div>
  )
}
export default SearchBar

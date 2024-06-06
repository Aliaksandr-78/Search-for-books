import '../components/App.css'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import BookList from '../components/BookList'
import searchBooks from '../services/googleBooksApi'

const RESULTS_PER_PAGE = 30

const HomePage = () => {
  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('relevance')

  const handleSearch = async (query, category, sort) => {
    setQuery(query)
    setCategory(category)
    setSort(sort)
    setStartIndex(0)
    try {
      const data = await searchBooks(query, category, sort, 0)
      setBooks(data.items)
      setTotalItems(data.totalItems)
      setStartIndex(RESULTS_PER_PAGE)
    } catch (error) {
      console.error('Error searching books:', error)
    }
  }

  const handleLoadMore = async () => {
    try {
      const data = await searchBooks(query, category, sort, startIndex)
      setBooks((prevBooks) => [...prevBooks, ...data.items])
      setStartIndex((prevStartIndex) => prevStartIndex + RESULTS_PER_PAGE)
    } catch (error) {
      console.error('Error loading more books:', error)
    }
  }
    return (
        <div>
            <header>
                <h1>Search for books</h1>
                <SearchBar onSearch={handleSearch} />
            </header>
            <main>
                <p>{totalItems} books found</p>
                <BookList books={books} />
                {startIndex < totalItems && <button onClick={handleLoadMore}>Load more</button>}
            </main>
        </div>
    )
}

export default HomePage
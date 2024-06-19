import '../style/App.css'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import BookList from '../components/BookList'
import searchBooks from '../api/googleBooksApi'
import React from 'react'
const RESULTS_PER_PAGE = 30
interface VolumeInfo {
  title: string
  authors?: string[]
  categories?: string[]
  imageLinks?: {
    thumbnail: string
  }
}
interface Book {
  id: string
  volumeInfo: VolumeInfo
}
const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('relevance')
  const [error, setError] = useState<string | null>(null)
  const handleSearch = async (query: string, category: string, sort: string) => {
    setQuery(query)
    setCategory(category)
    setSort(sort)
    setStartIndex(0)
    setError(null)
    try {
      const data = await searchBooks(query, category, sort, 0)
      setBooks(data.items)
      setTotalItems(data.totalItems)
      setStartIndex(RESULTS_PER_PAGE)
    } catch (error) {
      console.error('Ошибка при поиске книг:', error)
      setError('Не удалось получить данные о книгах. Попробуйте позже.')
    }
  }
  const handleLoadMore = async () => {
    setError(null)
    try {
      const data = await searchBooks(query, category, sort, startIndex)
      setBooks((prevBooks) => [...prevBooks, ...data.items])
      setStartIndex((prevStartIndex) => prevStartIndex + RESULTS_PER_PAGE)
    } catch (error) {
      console.error('Ошибка при загрузке дополнительных книг:', error)
      setError('не удалось загрузить дополнительные книги. Попробуйте позже.')
    }
  }
  return (
    <>
      <header>
        <h1>Поиск книг</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {error && <p className="error">{error}</p>}
        <p>{totalItems} книг найдено</p>
        <div className='cards'>
          <BookList books={books} />
        </div>
        {startIndex < totalItems && <button onClick={handleLoadMore}>Загрузить еще</button>}
      </main>
    </>
  )
}
export default HomePage

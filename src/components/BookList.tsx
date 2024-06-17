import React from 'react'
import BookCard from './BookCard'
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
const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
export default BookList

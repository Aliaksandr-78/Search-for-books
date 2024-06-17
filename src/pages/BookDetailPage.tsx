import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchBookDetails } from '../api/detail'
import '../style/App.css'
import React from 'react'

interface VolumeInfo {
  title: string
  authors?: string[]
  categories?: string[]
  description?: string
  imageLinks?: {
    thumbnail: string
  }
}
const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [book, setBook] = useState<{ volumeInfo: VolumeInfo } | null>(null)

  useEffect(() => {
    const getBookDetails = async () => {
      const bookData = await fetchBookDetails(id!)
      setBook(bookData)
    }
    getBookDetails()
  }, [id])
  if (!book) return <div>Loading...</div>
  const { title, authors, categories, description, imageLinks } = book.volumeInfo
  return (
    <div className="book-detail">
      {imageLinks && <img src={imageLinks.thumbnail} alt={title} />}
      <h1>{title}</h1>
      <p>{categories ? categories.join(', ') : ''}</p>
      <p>{authors ? authors.join(', ') : ''}</p>
      <p>{description}</p>
    </div>
  )
}
export default BookDetailPage

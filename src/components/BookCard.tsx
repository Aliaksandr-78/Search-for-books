import React from 'react'
import { useNavigate } from 'react-router-dom'

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
const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const navigate = useNavigate()
  const { title, authors, categories, imageLinks } = book.volumeInfo
  const handleClick = () => {
    navigate(`/book/${book.id}`)
  }
  return (
    <div onClick={handleClick} className="card" style={{ cursor: 'pointer' }}>
      {imageLinks && (
        <div className="card__top">
          <div className="card__image">
            <img src={imageLinks.thumbnail} alt={title} />
          </div>
        </div>
      )}
      <div className="card__bottom">
        <div className="card__title">{title}</div>
        <div className="card__ingredients">
          {categories ? categories[0] : ''}
        </div>
        <div className="card__ingredients">
          {authors ? authors.join(', ') : ''}
        </div>
      </div>
    </div>
  )
}
export default BookCard

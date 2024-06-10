import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const BookCard = ({ book }) => {
  const navigate = useNavigate()
  const { title, authors, categories, imageLinks } = book.volumeInfo

  const handleClick = () => {
    navigate(`/book/${book.id}`)
  }

  return (
    <div onClick={handleClick} className="book-card" style={{ cursor: 'pointer' }}>
      {imageLinks && <img src={imageLinks.thumbnail} alt={title} />}
      <h3>{title}</h3>
      <p>{categories ? categories[0] : ''}</p>
      <p>{authors ? authors.join(', ') : ''}</p>
    </div>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      categories: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
}

export default BookCard

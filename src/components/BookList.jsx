import PropTypes from 'prop-types'
import BookCard from './BookCard'

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      volumeInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string),
        categories: PropTypes.arrayOf(PropTypes.string),
        imageLinks: PropTypes.shape({
          thumbnail: PropTypes.string,
        }),
      }).isRequired,
    })
  ).isRequired,
}

export default BookList

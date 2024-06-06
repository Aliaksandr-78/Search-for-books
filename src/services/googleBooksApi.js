const API_KEY = 'AIzaSyBrhKrBq9JkCHw7zjKsRVLmWAUknKdTD3s'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

const searchBooks = async (query, category, orderBy, startIndex) => {
  try {
    const categoryFilter = category !== 'all' ? `+subject:${category}` : ''
    const url = `${BASE_URL}?q=${query}${categoryFilter}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error searching books:', error)
    throw error
  }
}

export default searchBooks


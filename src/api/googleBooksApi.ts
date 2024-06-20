const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

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

interface SearchResult {
  items: Book[]
  totalItems: number
}

const searchBooks = async (query: string, category: string, orderBy: string, startIndex: number): Promise<SearchResult> => {
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

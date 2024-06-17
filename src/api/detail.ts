import axios from 'axios'
const API_KEY = 'AIzaSyBrhKrBq9JkCHw7zjKsRVLmWAUknKdTD3s'
export const fetchBookDetails = async (id: string) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`, {
    params: { key: API_KEY },
  })
  return response.data
}

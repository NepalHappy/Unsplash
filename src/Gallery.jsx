import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`
const Gallery = () => {
  const { isSearchTerm } = useGlobalContext()

  const response = useQuery({
    queryKey: ['images', isSearchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${isSearchTerm}`)
      return result
    },
  })
  // console.log(response)
  if (response.isLoading) {
    return <p>Loading...</p>
  }
  if (response.isError) {
    return <p>There was an error</p>
  }
  const results = response.data.data.results

  return (
    <div className="image-container">
      {results.map((item) => {
        const url = item.urls?.regular
        return (
          <img src={url} className="img" alt={item.description} key={item.id} />
        )
      })}
    </div>
  )
}
export default Gallery

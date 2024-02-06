import { useState } from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { isSearchTerm, setSearchTerm } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.search.value
    if (!value) return
    setSearchTerm(value)
  }
  return (
    <section>
      <h1 className="title">Unsplash Images </h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          placeholder="cat"
          name="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchForm

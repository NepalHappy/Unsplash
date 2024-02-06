import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false)
  const [isSearchTerm, setSearchTerm] = useState('cat')
  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme
    setDarkTheme(newDarkTheme)

    document.body.classList.toggle('dark-theme', newDarkTheme)
  }
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, isSearchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

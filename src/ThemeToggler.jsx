import { useGlobalContext } from './context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
const ThemeToggler = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button className="dark-toggle">
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" onClick={toggleTheme} />
        ) : (
          <BsFillSunFill className="toggle-icon" onClick={toggleTheme} />
        )}
      </button>
    </section>
  )
}
export default ThemeToggler

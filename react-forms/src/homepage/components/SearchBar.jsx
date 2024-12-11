// SearchBar.jsx
import { useNavigate } from "react-router"
import { ThemeContext } from "../../App"
import { useContext } from "react"
import { useStore } from "zustand"
import { themeStore } from "../../common/Store"

const SearchBar = ({searchTerm, setSearchTerm}) => {
  const {theme, toggle} = useStore(themeStore)
  // const {theme, setTheme} = useContext(ThemeContext)
  const navigate = useNavigate()

  return (

    <div className='flex items-center justify-center border-b border-zinc-400 py-4'>
        <button onClick={toggle}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
        <button onClick={() => {
          navigate('/login')
        }}>Login</button>
        <h3>Search</h3>
        <input value={searchTerm} onChange={(e) => {
            setSearchTerm(e.target.value)
        }} placeholder='Search items' className='border border-zinc-400 p-2' type="text" />
    </div>
  )
}

export default SearchBar
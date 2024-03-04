import { useLocalStorage } from './components/useLocalStorage'
import './App.css'

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <div className='light-dark-mode' data-theme={theme}>
        <div className="container">
          <h1>A New Way for Web Applications</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mauris vel orci vestibulum mattis. Vivamus molestie aliquam eros, pharetra congue quam egestas ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
          <button onClick={handleTheme}>Change theme</button>
        </div>
      </div>
    </>
  )
}

export default App

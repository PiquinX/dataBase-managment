import { Main } from './components/Main'
import './App.css'
import { FiltersProvider } from './contexts/filterContext'

function App () {
  return (
    <FiltersProvider>
      <Main />
    </FiltersProvider>
  )
}

export default App

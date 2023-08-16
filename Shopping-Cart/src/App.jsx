import { Main } from './components/Main'
import './App.css'
import { FiltersProvider } from './contexts/filterContext'
import { Header } from "./components/Header"

function App () {
  return (
    <FiltersProvider>
      <Header />
      <Main />
    </FiltersProvider>
  )
}

export default App

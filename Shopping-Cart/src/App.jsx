import { Main } from './components/Main'
import './App.css'
import { FiltersProvider } from './contexts/filterContext'
import { Header } from "./components/Header"
import { Cart } from './components/Cart'

function App () {
  return (
    <FiltersProvider>
      <Header />
      <Cart />
      <Main />
    </FiltersProvider>
  )
}

export default App

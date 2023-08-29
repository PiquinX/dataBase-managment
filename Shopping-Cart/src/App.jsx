import { Main } from './components/Main'
import './App.css'
import { FiltersProvider } from './contexts/filterContext'
import { Header } from './components/Header'
import { Footer } from './components/footer'

function App () {
  return (
    <FiltersProvider>
      <Header />
      <Main />
      <Footer />
    </FiltersProvider>
  )
}

export default App

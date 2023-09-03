import { Main } from './components/Main'
import './App.css'
import { FiltersProvider } from './contexts/filterContext'
import { Header } from './components/Header'
import { Footer } from './components/footer'

function App () {
  return (
    <FiltersProvider>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <Main />
        <Footer />
      </div>
    </FiltersProvider>
  )
}

export default App

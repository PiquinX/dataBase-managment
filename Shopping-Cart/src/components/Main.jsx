import { AsideFilters } from '../components/Filter/AsideFilters'
import { Products } from './product/Product'
import { SortProvider } from '../contexts/sortContext'
import { Sort } from './Sort'

export function Main () {
  return (
    <SortProvider>
      <main className='px-6 grow xs:px-10 lg:px-24 2xl:px-44'>
        <div className='flex justify-between'>
          <AsideFilters />
          <Sort />
        </div>
        <Products />
      </main>
    </SortProvider>
  )
}

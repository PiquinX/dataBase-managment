import { AsideFilters } from '../components/Filter/AsideFilters'
import { Products } from './product/Product'

export function Main () {
  return (
    <main className='px-10 lg:px-24 2xl:px-44'>
      <AsideFilters />
      <Products />
    </main>
  )
}

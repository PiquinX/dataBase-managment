import { useSideBar } from '../../Hooks/useSideBar'
import { Filters } from './Filters'
import { useFilters } from '../../Hooks/useFilters'

export function AsideFilters () {
  // This customs hook allows us to make a side navBar but we must use the attribute data-side-bar.
  const { show, setShow, sideBarData } = useSideBar()

  // We call the custom Hook useFilters to get the clearFilters function.
  const { clearFilters } = useFilters()

  // We apply styles depending on the show state.
  const cartContainerClass = show ? '' : '-translate-x-full delay-300'
  const cartBarClass = show ? 'left-0' : '-translate-x-full'

  // To handle the show state on click.
  const handleClick = () => setShow(!show)

  // To clear the Filters.
  const handleClearFilters = () => clearFilters()

  return (
    <>
      <div onClick={handleClick} className='my-6 cursor-pointer w-max'><i className='text-blue-700 fa-solid fa-filter' /> Filter</div>

      <aside className={`${cartContainerClass} flex justify-start fixed top-0 left-0 z-[500] backdrop-blur-sm h-full w-full bg-[#0006]`}>
        <div data-side-bar={`${sideBarData}`} className='order-2 z-[1000] flex-grow' />

        <section className={`${cartBarClass} grid grid-rows-cart sm:w-[400px] w-[90%] delay-75 duration-200 bg-white h-full overflow-hidden`}>
          <header className='flex items-center justify-around w-full h-full pl-4 pr-5 border-b sm:justify-between sm:pl-10'>
            <h3 className=''>FILTER</h3>
            <div onClick={handleClick} className='grid text-2xl text-black cursor-pointer group place-content-center w-14 h-14'><i className='duration-150 group-hover:rotate-180 fa-solid fa-xmark' /></div>
          </header>
          <main className='h-full overflow-y-scroll'>
            <Filters />
          </main>
          <footer className='flex items-center justify-center border-t'>
            <button onClick={handleClearFilters} className='px-5 py-2 text-blue-700 duration-75 border-2 border-blue-700 rounded-lg hover:text-white hover:bg-blue-700'>Clear Filters</button>
          </footer>
        </section>
      </aside>
    </>
  )
}

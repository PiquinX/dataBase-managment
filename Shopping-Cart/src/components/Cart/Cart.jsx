import { useCart } from '../../Hooks/useCart'
import { useTotalPrice } from '../../Hooks/useTotalPrice'
import { useSideBar } from '../../Hooks/useSideBar'
import { CartItems } from './CartItems'

export function Cart () {
  // we call the custom hook useCart to get the cart state and pass it throught the useTotalPrice Hook.
  const { cart } = useCart()
  // We call the custom hook useTotalPrice to get the totalPrice state. We must pass the cart.
  const { totalPrice } = useTotalPrice({ cart })
  // This customs hook allows us to make a side navBar but we must use the attribute data-side-bar.
  const { show, setShow, sideBarData } = useSideBar()

  // We apply styles depending on the show state.
  const cartContainerClass = show ? 'right-0' : 'translate-x-full delay-300'
  const cartBarClass = show ? 'right-0' : 'translate-x-full'

  // To handle the show state on click.
  const handleClick = () => setShow(!show)

  return (
    <>
      <div onClick={handleClick} className='absolute z-50 text-3xl text-white cursor-pointer right-10 2xl:right-24 top-[1.68rem]'>
        <i className='fa-solid fa-cart-shopping' />
        <div className='rounded-[50%] bg-red-600 flex justify-center items-center text-sm w-4 h-4 absolute -top-1 -right-2'>{cart.length}</div>
      </div>

      <section className={`${cartContainerClass} flex justify-end fixed z-[500] backdrop-blur-sm h-full w-full bg-[#0006]`}>
        <div data-side-bar={`${sideBarData}`} className='z-[1000] flex-grow' />

        <div className={`${cartBarClass} z-[500] grid grid-rows-cart sm:w-[500px] w-[90%] delay-75 duration-200 bg-white h-full overflow-hidden`}>
          <header className='flex items-center justify-around w-full h-full pl-4 pr-5 border-b sm:justify-between sm:pl-10'>
            <h3 className=''>SHOPPING CART</h3>
            <div onClick={handleClick} className='grid text-2xl text-black cursor-pointer group place-content-center w-14 h-14'><i className='duration-150 group-hover:rotate-180 fa-solid fa-xmark' /></div>
          </header>
          <main className='flex flex-col items-center justify-center w-full h-full overflow-y-scroll bar'>
            <CartItems />
          </main>
          <footer className='flex items-start justify-center h-full pl-4 min-[500px]:pt-3 min-[900px]:pt-6 min-[1440px]:pt-10  sm:pl-10 border-t-2 shadow-md'>
            <p className='font-bold'>TOTAL: {totalPrice}$</p>
          </footer>
        </div>
      </section>
    </>
  )
}

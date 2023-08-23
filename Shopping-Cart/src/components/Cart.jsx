import { useCart } from '../Hooks/useCart'
import { useTotalPrice } from '../Hooks/useTotalPrice'
import { useSideBar } from '../Hooks/useSideBar'

export function Cart () {
  // we call the custom hook useCart to get the cart state and the functions to handle it.
  const { cart, addToCart, removeFromCart, removeOneFromCart } = useCart()
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
      <div onClick={handleClick} className='absolute z-50 text-3xl text-white cursor-pointer right-10 top-6'>
        <i className='fa-solid fa-cart-shopping' />
        <div className='rounded-[50%] bg-red-600 flex justify-center items-center text-sm w-4 h-4 absolute -top-1 -right-2'>{cart.length}</div>
      </div>

      <section className={`${cartContainerClass} flex justify-end fixed z-[500] backdrop-blur-sm h-full w-full bg-[#0006]`}>
        <div data-side-bar={`${sideBarData}`} className='z-[1000] flex-grow' />

        <div className={`${cartBarClass} grid grid-rows-cart sm:w-[500px] w-[90%] delay-75 duration-200 bg-white h-full overflow-hidden`}>
          <header className='flex items-center justify-around w-full h-full pl-4 pr-5 border-b sm:justify-between sm:pl-10'>
            <h3 className=''>SHOPPING CART</h3>
            <div onClick={handleClick} className='grid text-2xl text-black cursor-pointer group place-content-center w-14 h-14'><i className='duration-150 group-hover:rotate-180 fa-solid fa-xmark' /></div>
          </header>
          <main className='flex flex-col items-center justify-center w-full h-full'>
            {
               cart.length === 0
                 ? <p>The Cart is empty.</p>
                 : <div className='w-full h-full overflow-x-auto bar'>{
                      cart.map(item => (
                        <div key={item.id} className='flex w-full gap-4 py-3 pl-4 pr-5 border-b sm:pl-10 h-max'>
                          <div className='w-32 h-full border'>
                            <img src={item.thumbnail} className='w-full h-36' />
                          </div>

                          <div className='flex flex-col gap-3 grow'>
                            <h3>{item.title}</h3>
                            {/*
                                        <p>description</p>
                                        <p>{discountPercentage}</p>
                                        <p>{rating}</p>
                                        <p>{stock}</p>
                                        <p>{brand}</p>
                                        <p>{category}</p>
                                    */}
                            <p className='flex justify-between w-[85%]'>
                              <span className='font-bold text-blue-700'>{Math.round(((item.price * item.quantity) - ((item.price * item.quantity) * item.discountPercentage) / 100) * 100) / 100}$</span>
                              <span className='text-gray-600 line-through'>{item.price * item.quantity},00$</span>
                            </p>
                            <div className='flex items-center gap-2 border border-black rounded-3xl w-max'>
                              <button onClick={() => removeOneFromCart(item)} className='px-2 pt-0.5 pb-1 text-2xl font-bold'> - </button>
                              <p className='w-8 px-2 text-center'>{item.quantity}</p>
                              <button onClick={() => addToCart(item)} className='px-2 pt-0.5 pb-1 text-2xl font-bold'> + </button>
                            </div>
                            <button className='m-auto w-max' onClick={() => removeFromCart(item)}>
                              <i className='fa-regular fa-trash-can' />
                            </button>
                          </div>
                        </div>
                      ))
                    }
                   </div>
            }
          </main>
          <footer className='flex items-start justify-center h-full pl-4 min-[500px]:pt-3 min-[900px]:pt-6 min-[1440px]:pt-10  sm:pl-10 border-t-2 shadow-md'>
            <p className='font-bold'>TOTAL: {totalPrice}$</p>
          </footer>
        </div>
      </section>
    </>
  )
}

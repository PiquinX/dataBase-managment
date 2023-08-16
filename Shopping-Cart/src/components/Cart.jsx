import { useCart } from "../Hooks/useCart"
import { useEffect, useState } from "react"

export function Cart (){
    const { cart, addToCart, removeFromCart, removeOneFromCart } = useCart()
    const [show, setShow] = useState(false)
    const[totalPrice, setTotalPrice] = useState()

    const cartContainerClass = show ? '' : 'translate-x-full'
    const cartBarClass = show ? '' : 'translate-x-full'

    const handleClick = ()=> setShow(!show)

    const updateTotalPrice = (cart) =>{
      let totalPrice = 0
      for (let i = 0; i < cart.length; i++) {
        const item = cart[i]

        totalPrice += Math.round( ( item.price - (item.price * item.discountPercentage) /100 ) * 100 ) /100
      }

      setTotalPrice(Math.round(totalPrice*100) / 100) 
    }

    useEffect(()=>{
      updateTotalPrice(cart)
    },[cart])

    return(
      <>
        <div onClick={handleClick} className="absolute z-50 text-3xl text-white cursor-pointer right-10 top-6"><i className="fa-solid fa-cart-shopping"></i></div>

        <div className={`${cartContainerClass} flex justify-end fixed z-[1000] h-full w-full bg-[#0006]`}>

          <div className={`${cartBarClass} w-[25%] delay-75 duration-200 left-full bg-white h-full pb-10 overflow-hidden`}>
            <header className="flex items-center justify-between w-full pl-10 border-b">
              <h3 className="">SHOPPING CART</h3>
              <div onClick={handleClick} className="grid text-2xl text-black cursor-pointer group place-content-center w-14 h-14"><i className="duration-150 group-hover:rotate-180 fa-solid fa-xmark"></i></div>
            </header>
            <main className="h-[90%] flex flex-col justify-center items-center pl-10 pr-5">
            {
               cart.length === 0 
               ? <p>The Cart is empty.</p>
               : <div className="h-full overflow-x-auto bar">{
                      cart.map(item => (
                          <div key={item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.thumbnail} />
                            {/*
                                      <p>description</p>
                                      <p>{discountPercentage}</p>
                                      <p>{rating}</p>
                                      <p>{stock}</p>
                                      <p>{brand}</p>
                                      <p>{category}</p>
                                  */}
                            <p className='flex gap-3'>
                              <span className='font-bold text-blue-700'>{Math.round( ( item.price - (item.price * item.discountPercentage) /100 ) * 100 ) /100}$</span>
                              <span className='text-gray-600 line-through'>{item.price},00$</span>
                            </p>
                            <div className="flex border rounded">
                              <button onClick={()=> removeOneFromCart(item)} > - </button>
                              <p>{item.quantity}</p>
                              <button onClick={()=> addToCart(item)} > + </button>
                            </div>
                            <button onClick={()=> removeFromCart(item)} >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                      ))
                    }
                </div>
            }
            </main>
            <footer className="h-full pl-10 border-t shadow-md shadow-black">
              TOTAL: {totalPrice}$
            </footer>
          </div>
        </div>
      </>
    )
}
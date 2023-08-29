import { useCart } from '../../Hooks/useCart'

export function CartItems () {
  // we call the custom hook useCart to get the cart state and the functions to handle it.
  const { cart, addToCart, removeFromCart, removeOneFromCart } = useCart()

  return (
    <>
      {
        cart.length === 0
          ? <p>The Cart is empty.</p>
          : <div className='w-full h-full'>{
                cart.map(item => (
                  <div key={item.id} className='flex w-full gap-4 py-3 pl-4 pr-5 border-b sm:pl-10 h-max'>
                    <div className='w-32 h-full border'>
                      <img src={item.thumbnail} className='w-full h-36' />
                    </div>

                    <div className='flex flex-col gap-3 grow'>
                      <h3>{item.title}</h3>
                      <p className='flex justify-between w-[50%]'>
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
    </>
  )
}

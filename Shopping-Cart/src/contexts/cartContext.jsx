import { createContext } from 'react'
import { useCartReducer } from '../reducers/Cart/useCartReducer'

// We create the context, this one is used to be called with the useContext().
export const CartContext = createContext()

// We create a provider, this one is used to wrap in the things that we want to be using the context.
export function CartProvider ({ children }) {
  // We call the custom Hook to get the cart state and the functions to update it.
  const { state, addToCart, removeFromCart, removeOneFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      removeOneFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

import { useReducer, useEffect } from 'react'
import { CART_FUNCTION_NAMES, InitialCart, CartReducer } from './CartReducer'

export function useCartReducer () {
  // We call the useReudcer() passing the initial value and the CartReducer.
  const [state, dispatch] = useReducer(CartReducer, InitialCart)

  // Function to add items to the cart.
  const addToCart = product => dispatch({
    type: CART_FUNCTION_NAMES.add,
    payload: product
  })

  // Function to remove one whole item from the cart.
  const removeFromCart = product => dispatch({
    type: CART_FUNCTION_NAMES.remove,
    payload: product
  })

  // Function to remove one item from the cart (the quantity property)
  const removeOneFromCart = product => dispatch({
    type: CART_FUNCTION_NAMES.removeOne,
    payload: product
  })

  // Function to remove all the items of the cart.
  const clearCart = product => dispatch({
    type: CART_FUNCTION_NAMES.clear,
    payload: product
  })

  // An Effect to save the cart in the localStorage.
  useEffect(() => {
    localStorage.setItem('Cart', state)
  }, [state])

  return { state, addToCart, removeFromCart, removeOneFromCart, clearCart }
}

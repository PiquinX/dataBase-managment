import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

export function useCart () {
  // We call the CartContext to get the cart state and all the functions to update it.
  const { cart, addToCart, removeFromCart, removeOneFromCart, clearCart } = useContext(CartContext)

  return { cart, addToCart, removeFromCart, removeOneFromCart, clearCart }
}

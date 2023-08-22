import { useState, useEffect } from 'react'

export function useTotalPrice ({ cart }) {
  // This is the state which will contain the totalPrice of the cart.
  const [totalPrice, setTotalPrice] = useState()

  // This function calculates the totalPrice and set the totalPrice state with the result.
  const updateTotalPrice = (cart) => {
    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i]

      totalPrice += Math.round(((item.price * item.quantity) - ((item.price * item.quantity) * item.discountPercentage) / 100) * 100) / 100
    }

    setTotalPrice(Math.round(totalPrice * 100) / 100)
  }

  // This Effect executes the updateTotalPrice function each time cart changes.
  useEffect(() => {
    updateTotalPrice(cart)
  }, [cart])

  return { totalPrice }
}

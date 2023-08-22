// All the cart functions, this is a good practice because it simplifies the code. You only have to change the value here and will change everywhere.
export const CART_FUNCTION_NAMES = {
  add: 'ADD_TO_CART',
  remove: 'REMOVE_FROM_CART',
  removeOne: 'REMOVE_ONE_FROM_CART',
  clear: 'CLEAR'
}

// We declare the Initial value, if its in the localStorage we get it, and if's not we make an empty array.
export const InitialCart = JSON.parse(localStorage.getItem('Cart')) || []

// this function contains all the functions of the context. 'State' is the state, and action contains the prop and the function that will be executed.
export const CartReducer = (state, action) => {
  // We get both values, the one that dictates which funcion will be excecuted(type) and the other which is kind of a prop (in this case the product that will be updated).
  const { type, payload } = action

  // This switch decides which function will be excecuted.
  switch (type) {
    case CART_FUNCTION_NAMES.add: {
      // We look for the position of the item in the cart(state being the cart).
      const productIndex = state.findIndex(cartItem => cartItem.id === payload.id)

      // If the index is founded, it has to be equal or greater than 0.
      if (productIndex >= 0) {
        // We make a clone with this function to make it literally the same.
        const newState = structuredClone(state)

        // We update the quantity of the product founded.
        newState[productIndex].quantity += 1

        return newState
      }

      // If the items is not founded we add the item and the quantity of the item.
      return [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]
    }

    case CART_FUNCTION_NAMES.remove: {
      // We look for the position of the item in the cart(state being the cart).
      const productIndex = state.findIndex(cartItem => cartItem.id === payload.id)
      // We make a clone with this function to make it literally the same.
      const newState = structuredClone(state)

      // We delete the item from the state(carte).
      newState.splice(productIndex, 1)

      return newState
    }

    case CART_FUNCTION_NAMES.removeOne: {
      // We look for the position of the item in the cart(state being the cart).
      const productIndex = state.findIndex(cartItem => cartItem.id === payload.id)
      // We make a clone with this function to make it literally the same.
      const newState = structuredClone(state)

      // We update the quantity of the product founded.
      newState[productIndex].quantity -= 1

      // If the quantity of the product is equal to 0 it means that this items is no longer in the cart, so we delete it from the state(carte).
      if (newState[productIndex].quantity <= 0) newState.splice(productIndex, 1)

      return newState
    }

    case CART_FUNCTION_NAMES.clear: {
      // We make the cart return to an empty array.
      return []
    }
  }
}

import { useCart } from "../Hooks/useCart"

export function Cart (){
    const { cart, addToCart, removeFromCart, removeOneFromCart, clearCart } = useCart()

    return(
        <div>
            {
               cart.length === 0 
               ? <p>The Cart is empty.</p>
               : cart.map(item => (
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
                      <p>{item.price}$</p>
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
    )
}
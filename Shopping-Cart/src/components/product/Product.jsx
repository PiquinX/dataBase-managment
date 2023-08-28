import allProducts from '../../mocks/products.json'
import { useFilters } from '../../Hooks/useFilters'
import { useCart } from '../../Hooks/useCart'
import { ImagesProduct } from './ImagesContainer'
import { Rating } from './Rating'
import { useSort } from '../../Hooks/useSort'
import { applyDiscount } from '../../services/applyDiscount'

export function Products () {
  const { sortProducts } = useSort()
  // We call the customHook to get the function which Filters the products.
  const { filterProducts } = useFilters()
  // We call the function addToCart from the useCart custom Hook.
  const { addToCart } = useCart()

  // We filter the products.
  const filteredProducts = filterProducts(allProducts.products)

  const sortedProducts = sortProducts(filteredProducts)

  return (
    <div className='grid gap-10 place-items-center grid-cols-responsive'>
      {
        sortedProducts.length === 0
          ? <p className='text-2xl text-center'>No matching results</p>
          : sortedProducts.map(product => (
            <div key={product.id} className='flex flex-col justify-center gap-2 px-5 pb-3 bg-white border rounded max-w-[500px] w-full'>
              <ImagesProduct imgs={product.images} />
              <p className='font-bold text-green-400'>{Math.round(product.discountPercentage)}% OFF</p>
              <Rating rating={product.rating} />
              <p className='flex gap-3'>
                <span className='font-bold text-blue-700'>{applyDiscount(product)}$</span>
                <span className='text-gray-600 line-through'>{product.price},00$</span>
              </p>
              <p className=''>{product.title}</p>
              <button className='py-3 text-blue-700 duration-75 border-2 border-blue-700 rounded-lg hover:text-white hover:bg-blue-700 focus:text-white focus:bg-blue-700' onClick={() => addToCart(product)}>Add to Cart <i className='fa-solid fa-cart-shopping' /></button>
            </div>
          ))
      }
    </div>
  )
}

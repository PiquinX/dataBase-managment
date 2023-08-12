import allProducts from '../mocks/products.json'
import { useFilters } from '../Hooks/useFilters'

export function Products () {
  // We call the customHook to get the function which Filters the products.
  const { filterProducts } = useFilters()

  // We filter the products.
  const filteredProducts = filterProducts(allProducts.products)

  return (
    <div>
      {
                filteredProducts.map(product => (
                  <Product key={product.id} {...product} />
                ))
            }
    </div>
  )
}

function Product ({ title, description, price, discountPercentage, rating, stock, brand, category, images }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h3>{title}</h3>
      <ImagesProduct img={images} />
      {/*
                <p>description</p>
                <p>{discountPercentage}</p>
                <p>{rating}</p>
                <p>{stock}</p>
                <p>{brand}</p>
                <p>{category}</p>
            */}
      <p>{price}$</p>
      <button>Add to Cart</button>
    </div>
  )
}

export function ImagesProduct ({ img }) {
  return (
    <div className='w-48 h-48 overflow-hidden'>
      <img src={img[3]} />
    </div>
  )
}

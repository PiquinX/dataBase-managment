import allProducts from '../mocks/products.json'
import { useFilters } from '../Hooks/useFilters'
import { useCart } from '../Hooks/useCart';
import { useState } from 'react';

export function Products () {
  // We call the customHook to get the function which Filters the products.
  const { filterProducts } = useFilters()
  const { addToCart } = useCart()

  // We filter the products.
  const filteredProducts = filterProducts(allProducts.products)

  return (
    <div className='grid gap-10 px-96 grid-cols-responsive'>
      {
                filteredProducts.map(product => (
                  <div key={product.id} className='flex flex-col justify-center gap-4 px-10'>
                      <h3 className='font-bold'>{product.title}</h3>
                      <ImagesProduct imgs={product.images} />
                      {/*
                                <p>{rating}</p>
                            */}
                      <p className='flex gap-3'>
                        <span className='text-gray-600 line-through'>{product.price}$</span>
                        <span className='font-bold'>{product.price - Math.round(product.price * product.discountPercentage / 100)}$</span>
                        <span className='text-green-400'>{Math.round(product.discountPercentage)}% OFF</span>
                      </p>
                      <Rating rating={product.rating}/>
                      <button onClick={()=> addToCart(product)}>Add to Cart</button>
                  </div>
                ))
            }
    </div>
  )
}

export function ImagesProduct ({ imgs }) {
  const [image, setImage] = useState(0)

  const handleDecrease = ()=>{
    if(image === 0) return
    setImage(image - 1)
  }

  const handleIncrease = ()=>{
    if (image === imgs.length - 1) return
    setImage(image + 1)
  }
  
  return (
    <div className='relative grid w-full h-56 px-10 overflow-hidden bg-white rounded place-content-center'>
      <button onClick={handleDecrease} className='absolute z-50 left-5 top-[44%]'>
        <i className="fa-regular fa-circle-left"></i>
      </button>
      <button onClick={handleIncrease} className='absolute z-50 right-5 top-[44%]'>
        <i className="fa-regular fa-circle-right"></i>
      </button>
      
      <div className='relative grid w-full h-56 px-10 overflow-hidden bg-white rounded place-content-center'>
        {
          imgs.map((img, index) => {
            const imgClass = index === image 
            ? '-translate-x-1/2'
            : index > image 
            ? 'translate-x-1/2'
            : '-translate-x-96'
            return(
              <img key={index} src={img} className={`${imgClass} duration-75 absolute -translate-x-1/2 -translate-y-1/2 max-h-48 top-1/2 left-1/2`} />
            )
          })
        }
      </div>
      <div className='flex justify-center gap-3 mb-10'>
        {
          imgs.map((img, index) => {
            const buttonColor = index === image ? 'bg-slate-500' : 'bg-slate-300'
            return(
              <button key={index} onClick={()=> setImage(index)} className={`${buttonColor} w-3 h-3 rounded-full`}></button>
            )
          })
        }
      </div>
    </div>
  )
}

function Rating ({ rating }){
  const isShowable = rating >= 4 ? 'block' : 'hidden'

  return (
    <div className={`${isShowable} text-sm flex gap-1`}>
      <i className="text-yellow-400 fa-solid fa-star"></i>
      <i className="text-yellow-400 fa-solid fa-star"></i>
      <i className="text-yellow-400 fa-solid fa-star"></i>
      <i className="text-yellow-400 fa-solid fa-star"></i>
      <Star rating={rating} />
    </div>  
  )
}

function Star({ rating }){
  if (rating > 4.5 )return (<i className="text-yellow-400 fa-solid fa-star"></i>)
  if (rating === 4 ) return (<i className="text-gray-400 fa-regular fa-star"></i>)
  if (rating <= 4.5) return (<i className="text-yellow-400 fa-solid fa-star-half-stroke"></i>)
}

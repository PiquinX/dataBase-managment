export function Rating ({ rating }){
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
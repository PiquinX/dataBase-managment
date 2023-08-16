import { useState } from "react"

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
      <div className='relative z-10 flex flex-col items-center justify-around w-full gap-5 overflow-hidden bg-white rounded h-80' >
        <button onClick={handleDecrease} className='absolute z-10 left-0 top-[37%]'>
          <i className="fa-regular fa-circle-left"></i>
        </button>
        <button onClick={handleIncrease} className='absolute z-10 right-0 top-[37%]'>
          <i className="fa-regular fa-circle-right"></i>
        </button>
        
        <div className='relative grid w-[85%] h-56 overflow-hidden bg-white rounded place-content-center'>
          {
            imgs.map((img, index) => {
              const imgClass = index === image 
              ? '-translate-x-1/2'
              : index > image 
              ? 'translate-x-1/2'
              : '-translate-x-96'
              return(
                <img key={index} src={img} className={`${imgClass} object-cover duration-75 absolute -translate-x-1/2 -translate-y-1/2 h-56 w-full top-1/2 left-1/2`} />
              )
            })
          }
        </div>
        <div className='flex justify-center gap-2'>
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
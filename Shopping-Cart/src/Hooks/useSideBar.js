import { useEffect, useId, useState } from "react"

export function useSideBar (){
    //This state contains a boolean which tells if the cartBar is open or not.
    const [show, setShow] = useState(false)
    const sideBarData = useId()

    // This Effect allows the cartBar to detect if we click outside it, closing when it happen.
    useEffect(()=>{
        addEventListener("click", (event)=>{
            const clickedAttribute = event.target.getAttribute('data-side-bar')
          if (clickedAttribute === sideBarData) setShow(false)
        })
      },[])

      return ({setShow, show, sideBarData})
}
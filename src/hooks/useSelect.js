import { useState, useEffect } from 'react'

export function useSelect () {
  // This state contains if the selectMenu is displayed or not.
  const [isShowing, setIsShowing] = useState(false)

  // This effect adds the event listener which contains the functionality of the custom select.
  useEffect(() => {
    document.addEventListener('click', functinalitySelect)

    return () => {
      document.removeEventListener('click', functinalitySelect)
    }
  }, [])

  // This function checks if you are clicking the select button.
  const functinalitySelect = (e) => {
    const isSelectButton = e.target.matches('[data-dropdown-button]')

    if (!isSelectButton) setIsShowing(false)
  }

  return { isShowing, setIsShowing }
}

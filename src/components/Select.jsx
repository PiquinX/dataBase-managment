import { useSelect } from '../hooks/useSelect'

export function Select ({ options, changeValue, value, tabIndex = 0 }) {
  // The states contains if the select it's shown or not.
  const { isShowing, setIsShowing } = useSelect()

  // We apply styles depending on the isShowing state.
  const selectClass = isShowing ? 'pointer-events-auto top-full opacity-100' : 'pointer-events-none top-1/2 opacity-0'
  const buttonClass = isShowing ? 'before:rotate-[-135deg] before:top-[.78rem] text-white before:border-white bg-[#3f577c]' : 'text-white before:border-white font-bold before:rotate-45 before:top-[.45rem] sm:before:top-[.55rem]'

  // It changes the state of isShowing.
  const clickHandle = () => setIsShowing(!isShowing)

  // Updates the selectValue and closes the select.
  const optionHandle = (e) => {
    setIsShowing(false)
    changeValue(e.target.textContent)
  }

  return (
    <div className='relative text-sm select-none sm:text-base'>
      <button tabIndex={tabIndex} data-dropdown-button onClick={clickHandle} className={`${buttonClass} w-[200px] bg-[#172335] sm:w-[225px] font-bold border-white duration-75 rounded border-2 flex py-1 pr-8 relative px-4 before:absolute before:duration-150 before:w-[.65rem] before:h-[.65rem] before:border-b-2 before:border-r-2 before:right-3`}>
        {value}
      </button>
      <div className={`${selectClass} z-50 duration-75 absolute bg-[#172335] text-white font-bold border-2 border-white shadow-select rounded w-[200px] sm:w-[225px] `}>
        {
                options.map((option, index) => (
                  <button onClick={optionHandle} tabIndex={index + tabIndex} key={index} className='w-full px-4 py-1 text-left cursor-pointer hover:text-white hover:bg-[#3f577c]'>{option}</button>
                ))
            }
      </div>
    </div>
  )
}

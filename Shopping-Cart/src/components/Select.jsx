import { useSelect } from '../hooks/useSelect'

export function Select ({ options, changeValue, value, id }) {
  // The states contains if the select it's shown or not.
  const { isShowing, setIsShowing } = useSelect()

  // We apply styles depending on the isShowing state.
  const selectClass = isShowing ? 'block' : 'hidden'
  const buttonClass = isShowing ? 'before:rotate-[-135deg] before:top-[.78rem] text-white before:border-white bg-blue-700' : 'text-blue-700 before:border-blue-700 font-bold before:rotate-45 before:top-[.55rem]'

  // It changes the state of isShowing.
  const clickHandle = () => setIsShowing(!isShowing)

  // Updates the selectValue and closes the select.
  const optionHandle = (e) => {
    setIsShowing(false)
    changeValue(e.target.textContent)
  }

  return (
    <div className='relative select-none'>
      <button id={id} data-dropdown-button onClick={clickHandle} className={`${buttonClass} w-[225px] font-bold border-blue-900 duration-75 rounded border-2 flex py-1 pr-8 relative px-4 before:absolute before:duration-150 before:w-[.65rem] before:h-[.65rem] before:border-b-2 before:border-r-2 before:right-3`}>{value}</button>
      <ul className={`${selectClass} absolute bg-white text-blue-700 font-bold border-2 border-blue-700 shadow-select rounded w-[225px] `}>
        {
                options.map((option, index) => (
                  <li onClick={optionHandle} key={index} className='px-4 py-1 cursor-pointer hover:text-white hover:bg-blue-700'>{option}</li>
                ))
            }
      </ul>
    </div>
  )
}

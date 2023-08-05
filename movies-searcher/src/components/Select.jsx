import { useSelect } from '../hooks/useSelect'

export function Select ({ options, changeValue, value }) {
  // estado que contiene si el select se muesta o no.
  const {isShowing, setIsShowing} = useSelect()

  // clases que demuestran si esta visible o no.
  const selectClass = isShowing ? 'block' : 'hidden'
  const buttonClass = isShowing ? 'border-[#4381e6] before:rotate-[-135deg] before:top-[.78rem]' : 'border-white before:rotate-45 before:top-[.55rem]'

  // clase que muestra que opcion esta seleccionada en el select.
  const selectedClass = value === 'Default' ? 'before:top-[3px]' : value === 'From "A" to "Z"' ? 'before:top-[35px]' : 'before:top-[67px]'

  // cambia el estado isShowing
  const clickHandle = () => {
    setIsShowing(!isShowing)
  }

  // Actualiza el valor del select
  const optionHandle = (e) => {
    setIsShowing(false)
    changeValue(e.target.textContent)
  }

  return (
    <div className='relative'>
      <button data-dropdown-button onClick={clickHandle} className={`${buttonClass} w-[162px] duration-75 rounded border-2 flex py-1 pr-8 relative px-4 before:absolute before:duration-150 before:w-[.65rem] before:h-[.65rem] before:border-b-2 before:border-r-2 before:border-white before:right-3`}>{value}</button>
      <ul className={`${selectClass} absolute bg-[#202a37] shadow-select rounded w-[162px] before:h-[26px] ${selectedClass} before:absolute before:border-l-2 before:left-[2px] before:border-[#4381e6]`}>
        {
              options.map((option, index) => (
                <li onClick={optionHandle} key={index} className='py-1 px-4 rounded cursor-pointer hover:bg-[#3c4f68]'>{option}</li>
              ))
          }
      </ul>
    </div>
  )
}

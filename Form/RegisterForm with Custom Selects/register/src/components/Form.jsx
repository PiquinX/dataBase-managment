import { Input } from './input/Input'
import { InputPassword } from './input/InputPassword'
import { useValueInput } from '../hooks/upgradeInputsValue'
import { SelectContainer } from './select/SelectContainer'
import { Politics } from './Politics'

export function Form () {
  // useValueInput hook tiene el valor del input y la funcion para actualizarlo que se le pasa directo al input. Esto para poder tener el control de sus valores.
  const [updateInputValue1, inputValue1] = useValueInput()
  const [updateInputValue2, inputValue2] = useValueInput()
  const [updateInputValue3, inputValue3] = useValueInput()
  const [updateInputPasswordValue1, inputPasswordValue1] = useValueInput()
  const [updateInputPasswordValue2, inputPasswordValue2] = useValueInput()
  console.log(inputValue1, inputValue2, inputValue3)

  return (
    <form action='' method='POST' className='form-container'>
      <Input value={inputValue1} exportValue={updateInputValue1} placeholder='Nombre Completo' type='text' nameId='name' tabIndex={1} />
      <Input value={inputValue2} exportValue={updateInputValue2} placeholder='Email' type='email' nameId='email' tabIndex={2} />
      <Input value={inputValue3} exportValue={updateInputValue3} placeholder='Nombre de usuario' type='text' nameId='username' tabIndex={3} />
      <InputPassword value={inputPasswordValue1} placeholder='Contraseña' nameId='password1' tabIndex={[4, 5]} exportValue={updateInputPasswordValue1} />
      <InputPassword value={inputPasswordValue2} placeholder='Confirmar Contraseña' nameId='password2' tabIndex={[6, 7]} exportValue={updateInputPasswordValue2} />

      { // Si las 2 contrasenias son distintas una de otra se imprime.
        inputPasswordValue1 !== inputPasswordValue2 
        && <p className='bad-entries'>Las dos contraseñas deben ser iguales.</p> 
      }

      <SelectContainer tabIndex={[8, 9, 10]} />
      <Politics tabIndex={[11, 12, 13]} />

      <button type='submit' className='boton-registrarse' tabIndex='14'>Registrate</button>

      <div className='links-container'>
        <p>Si ya tenes cuenta <a tabIndex='15' href="{% url 'login' %}">Inicia Sesion.</a></p>
      </div>
    </form>
  )
}

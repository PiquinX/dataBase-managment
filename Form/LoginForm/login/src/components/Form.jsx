import { Input } from './input/Input'
import { InputPassword } from './input/InputPassword'

export function Form () {


  return (
    <form action='' method='POST' className='form-container'>
      <Input placeholder='Email' type='email' nameId='email' tabIndex={1} />
      <Input placeholder='Nombre de usuario' type='text' nameId='username' tabIndex={2} />
      <InputPassword placeholder='Contraseña' nameId='password1' tabIndex={[3, 4]}/>

      <button type='submit' className='boton-registrarse' tabIndex='5'>Iniciar Sesion</button>

      <div className='links-container'>
        <p>Si no tienes cuenta, <a tabIndex='6' href="{% url 'register' %}">Registrate.</a></p>
      </div>
    </form>
  )
}

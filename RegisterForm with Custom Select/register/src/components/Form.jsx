import { Input } from './input/Input'
import { InputPassword } from './input/InputPassword'
import { useValueInput } from '../hooks/upgradeInputsValue'
import { SelectContainer } from './select/SelectContainer'
import { Politics } from './Politics'

export function Form (){
    const [updateInputValue1, valorInput1] = useValueInput()
    const [updateInputValue2, valorInput2] = useValueInput()
    console.log(valorInput1,valorInput2)

    return (
        <form action="" method="POST" className="form-container"> 
            <Input placeholder='Nombre Completo' type='text' nameId='name' tabIndex={1} />
            <Input placeholder='Email' type='email' nameId='email' tabIndex={2} />
            <Input placeholder='Nombre de usuario' type='text' nameId='username' tabIndex={3} />
            <InputPassword placeholder='Contraseña' nameId='password1' tabIndex={[4, 5]} exportValue={updateInputValue1} />
            <InputPassword placeholder='Confirmar Contraseña' nameId='password2' tabIndex={[6, 7]} exportValue={updateInputValue2} />
            {
                valorInput1 !== valorInput2 && <p className='bad-entries' >Las dos contraseñas deben ser iguales.</p> 
            }

            <SelectContainer tabIndex={[8, 9, 10]}/>
            <Politics tabIndex={[11, 12, 13]}/>

            <button type="submit" className="boton-registrarse" tabIndex="14">Registrate</button>

            <div className="links-container">
                <p>Si ya tenes cuenta <a tabIndex="15" href="{% url 'login' %}">Inicia Sesion.</a></p>
            </div>
        </form> 
    )
}
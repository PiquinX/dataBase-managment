import { Input } from './Input'
import { InputPassword } from './InputPassword'

export function Form (){
    return (
        <form action="" method="POST" className="form-container"> 
            <Input placeholder='Nombre Completo' type='text' nameId='name' tabIndex={1} />
            <Input placeholder='Email' type='email' nameId='email' tabIndex={2} />
            <Input placeholder='Nombre de usuario' type='text' nameId='username' tabIndex={3} />
            <InputPassword placeholder='Contraseña' nameId='password1' tabIndex={[4, 5]} />
            <InputPassword placeholder='Confirmar Contraseña' nameId='password2' tabIndex={[6, 7]} />
        </form> 
    )
}
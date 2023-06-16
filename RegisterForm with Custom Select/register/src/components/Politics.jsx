export function Politics({ tabIndex }){
    return (
        <div className="links-container">
            <p>Al registrarte aceptas nuestras <a tabIndex={tabIndex[0]} >condiciones</a>,</p>
            <p>nuestra <a tabIndex={tabIndex[1]} >Politica de privacidad</a>,</p>
            <p>y nuestra <a tabIndex={tabIndex[2]} >Politica de cookies</a></p>
        </div>
    )
}
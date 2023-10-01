export async function updateFaltaSubirlo (ID){
    try {
        const res = await fetch(`http://127.0.0.1:5000/change_falta_subirlo/${ID}`, {
            method : 'PUT',
            headers: {
              'Content-Type': 'application/json',
            }
        })
    
        const resul = await res.json()
        
        console.log(resul.message)
    
        return resul
      } catch (e) {
        throw new Error(e)
      }
}
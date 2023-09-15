from flask import Flask,jsonify,request
from flask_cors import CORS
import pandas as pd
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/get_all_users', methods=['GET'])
#selecciona todos los datos de la tabla que le pases
def get_all_users():
    with sqlite3.connect('data_base.db') as conn:
        datos = []
        query = "SELECT * FROM usuarios"
        df = pd.read_sql_query(query, conn)
        datos.append(df.to_dict(orient="records"))
        return jsonify(datos)
    
    
@app.route('/get_all_by_ID/<int:id>', methods=['GET'])
#selecciona los datos que tengan la id de todas las tablas
def get_all_by_ID(id):
     with sqlite3.connect('data_base.db') as conn:
        # Crear un diccionario de consultas SQL por tabla
        queries = {
            'usuarios': f"SELECT * FROM usuarios WHERE USUARIO_ID = {id}",
            'observaciones': f"SELECT * FROM observaciones WHERE USUARIO_ID = {id}",
            'donaciones': f"SELECT * FROM donaciones WHERE USUARIO_ID = {id}",
            'direcciones': f"SELECT * FROM direccion WHERE USUARIO_ID = {id}",
            'financieros': f"SELECT * FROM datos_financieros WHERE USUARIO_ID = {id}"
        }

        # Crear un diccionario para almacenar los resultados
        data = {}

        for table_name, query in queries.items():
            df = pd.read_sql_query(query, conn)
            data[table_name] = df.to_dict(orient='records')

        return jsonify(data)
    
@app.route('/update_data/<int:id>', methods=['PUT'])
def update_data(id):
    with sqlite3.connect('data_base.db') as conn:
        values = request.get_json()
        cursor = conn.cursor()
        queries = [
            f"""UPDATE usuarios SET ESTADO_DE_USUARIO = {values['estado']}, TIPO_DE_USUARIO = {values['tipo']} , DNI = {values['dni']}, FECHA_DE_NACIMIENTO = {values['nacimiento']}, APELLIDO = {values['apellido']}, NOMBRE = {values['nombre']}, 
                                    MAIL = {values['mail']}, CUIL_CUIT = {values['cuil']}, TELEFONO_MOVIL = {values['movil']}, TELEFONO_FIJO = {values['fijo']}, REFERENTE = {values['referente']}, OCUPACION = {values['ocupcacion']}, DIA_DE_ALTA = {values['fechaDeAlta']},
                                    FIRMA = {values['firma']} WHERE USUARIO_ID = {id}""",

            f"""UPDATE observaciones SET OBSERVACIONES = {values['observacion']} WHERE USUARIO_ID = {id}""",

            f"""UPDATE donaciones SET DONACION = {values['cantidad']}, FECHA_DE_DONACION = {values['fecha']}, ESTADO_DE_DONACION = {values['estado']}, TIPO_DE_DONACION = {values['tipo']}, FORMA_DE_PAGO = {values['metodoDePago']} WHERE USUARIO_ID={id}""",

            f"""UPDATE direccion SET CALLE = {values['calle']}, NUM = {values['numero']}, PISO = {values['piso']}, DEPTO = {values['depto']}, LOCALIDAD = {values['localidad']}, CODIGO_POSTAL = {values['codigoPostal']}, PROVINCIA = {values['provincia']} WHERE USUARIO_ID = {id}""",

            f"""UPDATE datos_financiero SET DBTO = {values['debito']}, VTO = {values['vto']}, COD_SEG = {values['codigoSeguridad']}, BANCO = {values['banco']}, SUCURSAL = {values['sucursal']}, TIPO_CTA = {values['tipoCTA']}, #_CUENTA = {values['']}, ESTADO = {values['estado']} WHERE USUARIO_ID = {id}"""

        ]

        try:
            for query in queries:
                cursor.execute(query)
        except Exception as e:
            return jsonify({"Messagge": f"error del tipo {e}"})
        
        return jsonify({"Messagge": "Datos actualizados correctamente"})
       
    
if __name__ == "__main__":
    app.run()
    
    

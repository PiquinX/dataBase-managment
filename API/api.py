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
        print(values['donaciones'])
        cursor = conn.cursor()
        query_usuario = """UPDATE usuarios SET 
                            ESTADO_DE_USUARIO = ?,
                            TIPO_DE_USUARIO = ?,
                            DNI = ?,
                            APELLIDO = ?,
                            NOMBRE = ?,
                            MAIL = ?,
                            CUIL_CUIT = ?,
                            TELEFONO_MOVIL = ?,
                            TELEFONO_FIJO = ?,
                            REFERENTE = ?,
                            OCUPACION = ?,
                            FIRMA = ?
                            WHERE USUARIO_ID = ?"""
            # Resto de tus consultas

        query_observaciones = """UPDATE observaciones SET
                                OBSERVACIONES = ?
                                WHERE USUARIO_ID = ? AND OBSERVACIONES_ID = ?"""

        query_donaciones = """UPDATE donaciones SET
                                DONACION = ?,
                                FECHA_DE_DONACION = ?,
                                ESTADO_DE_DONACIÓN = ?,
                                TIPO_DE_DONACIÓN = ?,
                                FORMA_DE_PAGO = ?
                                WHERE USUARIO_ID = ? AND DONACIONES_ID = ?"""   

        query_direcciones = """UPDATE direccion SET
                                CALLE = ?,
                                NUM = ?,
                                PISO = ?,
                                DEPTO = ?,
                                LOCALIDAD = ?,
                                CODIGO_POSTAL = ?,
                                PROVINCIA = ?
                                WHERE USUARIO_ID = ? AND DIRECCION_ID = ?"""

        query_financieros = """UPDATE datos_financieros SET
                                DBTO = ?,
                                VTO = ?,
                                COD_SEG = ?,
                                BANCO = ?,
                                SUCURSAL = ?,
                                TIPO_CTA = ?,
                                ESTADO = ?
                                WHERE USUARIO_ID = ? AND DATOS_FINANCIEROS_ID = ?"""

        try:
            cursor.execute(query_usuario, (
                values['usuario']['estado'],
                values['usuario']['tipo'],
                values['usuario']['dni'],
                values['usuario']['apellido'],
                values['usuario']['nombre'],
                values['usuario']['mail'],
                values['usuario']['cuil'],
                values['usuario']['movil'],
                values['usuario']['fijo'],
                values['usuario']['referente'],
                values['usuario']['ocupacion'],
                values['usuario']['firma'],
                id  # El ID debería estar aquí
            ))
            conn.commit()
            for value in values['donaciones']:
                cursor.execute(query_donaciones,(
                    value['cantidad'],
                    value['fecha'],
                    value['estado_donacion'],
                    value['tipo'],
                    value['metodoDePago'],
                    id,
                    value['donacion_id']
                ))
                conn.commit()

            for value in values['observaciones']:
                cursor.execute(query_observaciones,(
                    value['observacion'],
                    id,
                    value['observacion_id']
                ))
                conn.commit()

            for value in values['direcciones']:
                cursor.execute(query_direcciones,(
                    value['calle'],
                    value['numero'],
                    value['piso'],
                    value['depto'],
                    value['localidad'],
                    value['codigoPostal'],
                    value['provincia'],
                    id,
                    value['direccion_id']
                ))
                conn.commit()

            for value in values['financieros']:
                cursor.execute(query_financieros,(
                    value['debito'],
                    value['vto'],
                    value['codigoSeguridad'],
                    value['banco'],
                    value['sucursal'],
                    value['tipoCTA'],
                    value['estado_financiero'],
                    id,
                    value['financiero_id']
                ))
                conn.commit()

        

        except Exception as e:
            return jsonify({"message": f" {e}"})
        
        return jsonify({"message": "Datos actualizados correctamente"})    
if __name__ == "__main__":
    app.run()
    
    

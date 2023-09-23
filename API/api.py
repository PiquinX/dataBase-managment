from flask import Flask,jsonify,request
from flask_cors import CORS
import pandas as pd
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/insert_full_data', methods=['POST'])
def insert_full_data():
    with sqlite3.connect('data_base.db') as conn:
        datos = request.get_json()
        cursor = conn.cursor()

        if datos['usuario']['faltaSubirlo']:
            falta_subirlo = "Si"
        else:
            falta_subirlo = "No"

        query_usuarios = """INSERT INTO usuarios (ESTADO_DE_USUARIO, TIPO_DE_USUARIO, DNI, FECHA_DE_NACIMIENTO, APELLIDO, 
                                                  NOMBRE, MAIL, CUIL_CUIT, TELEFONO_MOVIL, TELEFONO_FIJO,
                                                  REFERENTE, OCUPACION, DIA_DE_ALTA, FIRMA, FALTA_SUBIRLO)
                                            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"""
        try:
            cursor.execute(query_usuarios, 
                        (   datos['usuario']['estado'],
                            datos['usuario']['tipo'],
                            datos['usuario']['dni'],
                            datos['usuario']['nacimiento'],
                            datos['usuario']['apellido'],
                            datos['usuario']['nombre'],
                            datos['usuario']['mail'],
                            datos['usuario']['cuil'],
                            datos['usuario']['movil'],
                            datos['usuario']['fijo'],
                            datos['usuario']['referente'],
                            datos['usuario']['ocupacion'],
                            datos['usuario']['fechaDeAlta'],
                            datos['usuario']['firma'],
                            falta_subirlo))
            conn.commit()

            query_id = "SELECT USUARIO_ID FROM usuarios ORDER BY USUARIO_ID DESC"
            cursor.execute(query_id)
            id = cursor.fetchone()
            print(type(id[0]))

            query_observaciones = """INSERT INTO observaciones (USUARIO_ID, OBSERVACIONES)
                                                        VALUES (?,?)"""
            
            for dato in datos['observaciones']:
                cursor.execute(query_observaciones, (id[0], dato['observacion']))
                conn.commit()
            
            query_direccion = """INSERT INTO direccion (USUARIO_ID, CALLE, NUM, PISO, DEPTO, LOCALIDAD, CODIGO_POSTAL, PROVINCIA)
                                                VALUES(?,?,?,?,?,?,?,?)"""

            for dato in datos['direcciones']:
                cursor.execute(query_direccion, (id[0], dato['calle'], dato['numero'], dato['piso'], dato['depto'],
                            dato['localidad'], dato['codigoPostal'], dato['provincia']))
                conn.commit()

            query_donaciones= """INSERT INTO donaciones (USUARIO_ID, DONACION, FECHA_DE_DONACION, ESTADO_DE_DONACION, 
                                                        TIPO_DE_DONACION, FORMA_DE_PAGO)
                                                    VALUES(?,?,?,?,?,?)"""
            
            for dato in datos['donaciones']:
                cursor.execute(query_donaciones, (id[0], dato['cantidad'], dato['fecha'], dato['estado_donacion'],
                                                dato['tipo'], dato['metodoDePago']))
                conn.commit()

            query_financieros = """INSERT INTO datos_financieros (USUARIO_ID, DBTO, VTO, COD_SEG, BANCO, SUCURSAL,
                                                                TIPO_CTA, ESTADO)
                                                            VALUES(?,?,?,?,?,?,?,?)"""
            
            for dato in datos['financieros']:
                cursor.execute(query_financieros, (id[0], dato['debito'], dato['vto'], dato['codigoSeguridad'],
                                                dato['banco'], dato['sucursal'], dato['tipoCTA'], dato['estado_financiero']))
                conn.commit()
            
            return jsonify({"message": "Datos insertados correctamente"})

        except Exception as e:
            return jsonify({"message": f"error del tipo: {e}"})

        
@app.route('/insert_data/<string:table>/<int:id>', methods=['POST'])
def insert_data(table,id):
    with sqlite3.connect('data_base.db') as conn:
        cursor = conn.cursor()
        print(table)

        if table == 'direcciones':
            query = f"""INSERT INTO direccion (USUARIO_ID, CALLE, NUM, PISO, DEPTO, LOCALIDAD, CODIGO_POSTAL, PROVINCIA)
                                                    VALUES({id},'','','','','','','')"""
        elif table == 'donaciones':
            query = f"""INSERT INTO donaciones (USUARIO_ID, DONACION, FECHA_DE_DONACION, ESTADO_DE_DONACION, 
                                                            TIPO_DE_DONACION, FORMA_DE_PAGO)
                                                        VALUES({id},'','','','','')"""
        elif table == 'financieros':
            query = f"""INSERT INTO datos_financieros (USUARIO_ID, DBTO, VTO, COD_SEG, BANCO, SUCURSAL,
                                                                    TIPO_CTA, ESTADO)
                                                                VALUES({id},'','','','','','','')"""
        elif table == 'observaciones':
            query = f"""INSERT INTO observaciones (USUARIO_ID, OBSERVACIONES)
                                                            VALUES ({id},'')"""
        
        cursor.execute(query)
        conn.commit()
        return jsonify({"message": "creado correctamente"})
    
@app.route('/delete_data/<string:table>/<int:id>', methods=['POST'])
def delete_data(table,id):
    with sqlite3.connect('data_base.db') as conn:
        cursor = conn.cursor()
        print(table)

        if table == 'direcciones':
            query = f"""DELETE FROM direccion WHERE DIRECCION_ID = {id}"""
        elif table == 'donaciones':
            query = f"""DELETE FROM donaciones WHERE DONACIONES_ID = {id}"""
        elif table == 'financieros':
            query = f"""DELETE FROM datos_financieros WHERE DATOS_FINANCIEROS_ID = {id}"""
        elif table == 'observaciones':
            query = f"""DELETE FROM observaciones WHERE OBSERVACIONES_ID = {id}"""
        
        cursor.execute(query)
        conn.commit()
        return jsonify({"message": "creado correctamente"})
    
    

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
                                ESTADO_DE_DONACION = ?,
                                TIPO_DE_DONACION = ?,
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
    
    

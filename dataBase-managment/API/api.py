from flask import Flask,jsonify,request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/get_all_users', methods=['GET'])
#selecciona todos los datos de la tabla que le pases
def get_all_users():
    #table = request.get_json()
    #print(table) 
    
    with sqlite3.connect('data_base.db') as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM usuarios')
        datos = []
        for fila in cursor.fetchall():
            registro = { 
                'id': fila[0],
                'estado': fila[1],
                'tipo': fila[2],
                'dni': fila[3],
                'nacimiento': fila[4],
                'apellido': fila[5],
                'nombre': fila[6],
                'mail': fila[7],
                'cuil': fila[8],
                'movil': fila[9],
                'fijo': fila[10],
                'referente': fila[11],
                'ocupcacion': fila[12],
                'fechaDeAlta': fila[13],
                'firma': fila[14]
            }
            datos.append(registro)
        return jsonify(datos)
    
# @app.route('/get_user_by_parameter', methods=['GET'])

# def get_user_by_parameter():
#     parameter = request.get_json()
#     print(parameter) 
    
#     with sqlite3.connect('databae.db') as conn:
#         cursor = conn.cursor()
#         cursor.execute('SELECT * FROM usuario WHERE APELLIDO = ?', (parameter['data'],))
#         users = cursor.fetchall()
#         return jsonify(users)
    
@app.route('/get_all_by_ID/<int:id>', methods=['GET'])
#selecciona los datos que tengan la id de todas las tablas
def get_all_by_ID(id):
    with sqlite3.connect('data_base.db') as conn:
        cursor = conn.cursor()
        # cursor.execute("SELECT name FROM sqlite_master WHERE type= 'table'")
        # tables = cursor.fetchall()
        observaciones = []
        donaciones = []
        direcciones = []
        financieros = []
        cursor.execute("SELECT * FROM usuarios WHERE USUARIO_ID = ?",(id,))
        for fila in cursor.fetchall():
            usuario = {
                'id': fila[0],
                'estado': fila[1],
                'tipo': fila[2],
                'dni': fila[3],
                'nacimiento': fila[4],
                'apellido': fila[5],
                'nombre': fila[6],
                'mail': fila[7],
                'cuil': fila[8],
                'movil': fila[9],
                'fijo': fila[10],
                'referente': fila[11],
                'ocupcacion': fila[12],
                'fechaDeAlta': fila[13],
                'firma': fila[14]
            }
        
        cursor.execute("SELECT * FROM observaciones WHERE USUARIO_ID = ?",(id,))
        for fila in cursor.fetchall():
            observacion = {
                'observacion_id': fila[0],
                'observacion': fila[2]
            }
            observaciones.append(observacion)
        
        cursor.execute("SELECT * FROM donaciones WHERE USUARIO_ID = ?",(id,))
        for fila in cursor.fetchall():
            donacion = {
                'donacion_id': fila[0],
                'donacion': fila[2],
                'fecha_donacion': fila[3],
                'estado': fila[4],
                'tipo': fila[5],
                'forma_de_pago': fila[6]
            }
            donaciones.append(donacion)

        cursor.execute("SELECT * FROM direccion WHERE USUARIO_ID = ?",(id,))
        for fila in cursor.fetchall():
            direccion = {
                'direccion_id': fila[0],
                'calle': fila[2],
                'num': fila[3],
                'piso': fila[4],
                'depto': fila[5],
                'localidad': fila[6],
                'codigo_postal': fila[7],
                'provincia': fila[8]
            }
            direcciones.append(direccion)

        cursor.execute("SELECT * FROM datos_financieros WHERE USUARIO_ID = ?",(id,))
        for fila in cursor.fetchall():
            datos_financieros = {
                'datos_financiero_id': fila[0],
                'dbto': fila[2],
                'vto': fila[3],
                'cod_seg': fila[4],
                'banco': fila[5],
                'sucursal': fila[6],
                'tipo_cta': fila[7],
                'cuenta': fila[8],
                'estado': fila[9]
            }
            financieros.append(datos_financieros)

        datos = {
            'usuario': usuario,
            'observacion': observaciones,
            'donacion': donaciones,
            'direccion': direcciones,
            'datos_financieros': financieros
        }
  
        return jsonify(datos)
    
if __name__ == "__main__":
    app.run()
    
    

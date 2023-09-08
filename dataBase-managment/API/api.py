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
        
      
        cursor.execute('''SELECT *
        FROM usuarios, observaciones, donaciones, direccion, datos_financieros
        WHERE usuarios.USUARIO_ID = ? 
        AND observaciones.USUARIO_ID = usuarios.USUARIO_ID
        AND donaciones.USUARIO_ID = usuarios.USUARIO_ID
        AND direccion.USUARIO_ID = usuarios.USUARIO_ID
        AND datos_financieros.USUARIO_ID = usuarios.USUARIO_ID''', ((id,)))
        data = cursor.fetchall()
        return jsonify(data)
    
if __name__ == "__main__":
    app.run()
    
    

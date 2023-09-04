from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/get_all_users', methods=['GET'])
#selecciona todos los datos de la tabla que le pases
def get_all_users():
    table = request.get_json()
    print(table) 
    
    with sqlite3.connect('data_base.db') as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM ?', (table['name'],))
        users = cursor.fetchall()
        return jsonify(users)
    
# @app.route('/get_user_by_parameter', methods=['GET'])

# def get_user_by_parameter():
#     parameter = request.get_json()
#     print(parameter) 
    
#     with sqlite3.connect('databae.db') as conn:
#         cursor = conn.cursor()
#         cursor.execute('SELECT * FROM usuario WHERE APELLIDO = ?', (parameter['data'],))
#         users = cursor.fetchall()
#         return jsonify(users)
    
@app.route('/get_all_by_ID', methods=['GET'])
#selecciona los datos que tengan la id de todas las tablas
def get_all_by_ID():
    parameter  = request.get_json()
    print(parameter) 
    
    with sqlite3.connect('data_base.db') as conn:
        cursor = conn.cursor()
        data = []
        cursor.execute("SELECT name FROM sqlite_master WHERE type= 'table'")
        tables = cursor.fetchall()
        
        for table in tables:
            cursor.execute('SELECT * FROM ? WHERE ID = ?', (table, parameter['id']))
            data.append(cursor.fetchall())
            print(data)
            
        return jsonify(data)
    
    

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
def update_data():
    pass
    
if __name__ == "__main__":
    app.run()
    
    

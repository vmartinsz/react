import os
from flask import Flask, render_template, json , request, jsonify
from flask_cors import CORS
from flaskext.mysql import MySQL

app = Flask(__name__)
CORS (app)
mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '123'
app.config['MYSQL_DATABASE_DB'] = 'python'
app.config['MYSQL_DATABASE_HOST'] = '172.17.0.2'
#app.config['MYSQL_DATABASE_HOST'] = '172.17.0.7'
mysql.init_app(app)




@app.route('/api/say_name5' , methods=['GET' , 'POST'])
def say_name5():
    
    json = request.get_json()
    nome = json['txtNome']
    telefone = json['txtTelefone']
    endereco = json['txtEndereco']
    print(nome)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute('insert into ap2 (nome, telefone, endereco) VALUES (%s, %s, %s)', (nome, telefone, endereco))
    conn.commit()
    return jsonify(
        first_name=nome,
        phone=telefone,
        address=endereco
        )

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host = '0.0.0.0', port = port)
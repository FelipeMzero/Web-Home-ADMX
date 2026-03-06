from flask import Flask, render_template

# O Flask já procura as pastas 'static' e 'templates' por padrão
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    # Usamos a porta 5000 que é o padrão do Flask
    app.run(debug=True, host='0.0.0.0', port=9000)
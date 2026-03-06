import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Define o caminho da pasta de imagens
    image_folder = os.path.join(app.static_folder, 'images')
    
    # Cria a pasta caso ela não exista para evitar erro de sistema
    if not os.path.exists(image_folder):
        os.makedirs(image_folder)
        
    # Lista apenas arquivos de imagem reais (png, jpg, jpeg)
    arquivos = [f for f in os.listdir(image_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    # Retorna o template passando a lista de arquivos encontrados
    return render_template('index.html', lista_imagens=arquivos)
if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=9000)
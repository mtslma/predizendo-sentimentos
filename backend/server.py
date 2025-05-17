from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

# Carregar o modelo e o vetor
with open("model_clf.pkl", 'rb') as f:
    data = pickle.load(f)
    model = data["model"]
    vectorizer = data["vectorizer"]

# Criar app Flask
app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data_json = request.get_json()

    if not data_json or 'mensagem' not in data_json:
        return jsonify({'error': 'Envie um JSON com a chave "mensagem"'}), 400

    mensagem = data_json['mensagem']

    if not isinstance(mensagem, str) or not mensagem.strip():
        return jsonify({'error': 'A mensagem deve ser um texto válido'}), 400

    mensagem_vect = vectorizer.transform([mensagem])
    pred = model.predict(mensagem_vect)[0]

    return jsonify({'mensagem': mensagem, 'sentimento': pred})

if __name__ == '__main__':
    app.run(port=8000)

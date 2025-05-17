from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

# Carregar o modelo e o label encoder
with open('model_clf.pkl', 'rb') as f:
    pipeline, label_encoder = pickle.load(f)

# Criar app Flask
app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if not data or 'mensagem' not in data:
        return jsonify({'error': 'Envie um JSON com a chave "mensagem"'}), 400

    mensagem = data['mensagem']

    if not isinstance(mensagem, str) or not mensagem.strip():
        return jsonify({'error': 'A mensagem deve ser um texto válido'}), 400

    pred = pipeline.predict([mensagem])
    sentimento = label_encoder.inverse_transform(pred)[0]

    return jsonify({'mensagem': mensagem, 'sentimento': sentimento})

if __name__ == '__main__':
    app.run(port=8000)
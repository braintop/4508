import os 
from dotenv import load_dotenv
load_dotenv()

from flask import Flask, jsonify
from flask_cors import CORS

from routes.chat_routes import chat_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(chat_bp, url_prefix='/api')

@app.get('/')
def index():
    return jsonify({'message': 'Hello, World!'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.getenv('PORT', 5002), debug=True)
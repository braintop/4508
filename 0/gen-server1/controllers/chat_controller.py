from flask import request, jsonify
from services.llm_service import ask_llm

class ChatController:
    
    
    @staticmethod
    def chat():
        try:
            data = request.get_json()
            if not data or 'message' not in data:
                return jsonify({'error': 'Message is required'}), 400

            message = data.get('message', '')
            response = ask_llm(message)
            return jsonify({'response': response}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500

        
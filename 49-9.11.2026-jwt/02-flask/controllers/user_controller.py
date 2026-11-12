from flask import jsonify, request
from werkzeug.security import generate_password_hash
from models.user_model import UserModel

class UserController:
 
    @staticmethod
    def all():
        return jsonify(UserModel.get_all())
 
    @staticmethod
    def one(user_id):
        user = UserModel.get_by_id(user_id)
 
        if not user:
            return jsonify(
                {'error': 'User not found'}
            ), 404
 
        return jsonify(user)

    @staticmethod
    def create():
        data = request.get_json(silent=True) or {}
 
        required = ['first_name', 'last_name',
                    'email', 'password', 'salary']
        try:
            salary = float(data['salary'])
            if salary < 0:
                raise ValueError()
 
            data['salary'] = salary
 
            new_id = UserModel.create(
                data,
                generate_password_hash(
                    str(data['password'])
                )
            )
            return jsonify(
                UserModel.get_by_id(new_id)
            ), 201
 
        except (ValueError, TypeError):
            return jsonify(
                {'error': 'Invalid salary'}
            ), 400
 


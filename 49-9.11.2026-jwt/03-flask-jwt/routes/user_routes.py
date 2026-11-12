from flask import Blueprint
from controllers.user_controller import UserController
from middleware.auth_middleware import check_token

user_bp = Blueprint('users', __name__)

user_bp.before_request(check_token)
user_bp.get('/users')(UserController.all)
user_bp.get('/users/<int:user_id>')(UserController.one)
user_bp.post('/users')(UserController.create)

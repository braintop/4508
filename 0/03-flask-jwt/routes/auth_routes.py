from flask import Blueprint

from controllers.authcontroller import AuthController

auth_bp = Blueprint('auth', __name__)

auth_bp.post('/auth/register')(AuthController.register)
auth_bp.post('/auth/login')(AuthController.login)

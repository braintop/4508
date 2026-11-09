from flask import Blueprint
from controllers.category_controller import CategoryController

category_bp = Blueprint('category_routes', __name__)

category_bp.get('/categories')(CategoryController.get_all_categories)
category_bp.get('/categories/<int:category_id>')(CategoryController.get_category_by_id)

from flask import Blueprint
from controllers.product_controller import ProductController

product_bp = Blueprint('product_routes', __name__)

product_bp.get('/products')(ProductController.get_all_products)
product_bp.get('/products/<int:product_id>')(ProductController.get_product_by_id)
product_bp.post('/products')(ProductController.create_product)

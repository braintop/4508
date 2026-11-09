from flask import jsonify, request
from models.product_model import ProductModel

class ProductController:
    @staticmethod
    def get_all_products():
        products = ProductModel.get_all_products()
        return jsonify(products)

    @staticmethod
    def get_product_by_id(product_id):
        product = ProductModel.get_product_by_id(product_id)
        return jsonify(product)


    @staticmethod
    def create_product():
        data = request.get_json()
        if not data or not all(k in data for k in ('name', 'price', 'quantity', 'category_id')):
            return jsonify({"error": "name, price, quantity, category_id are required"}), 400
        product_id = ProductModel.create_product(data['name'], data['price'], data['quantity'], data['category_id'])
        if product_id is None:
            return jsonify({"error": "Failed to create product"}), 500
        return jsonify({"product_id": product_id}), 201
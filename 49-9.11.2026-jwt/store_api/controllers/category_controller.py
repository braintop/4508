from flask import  jsonify
from models.category_model import CategoryModel

class CategoryController:
    @staticmethod
    def get_all_categories():
        categories = CategoryModel.get_all_categories()
        return jsonify(categories)

    @staticmethod
    def get_category_by_id(category_id):
        category = CategoryModel.get_category_by_id(category_id)
        return jsonify(category)

    @staticmethod
    def create_category(category_name):
        category = CategoryModel.create_category(category_name)
        return jsonify(category)
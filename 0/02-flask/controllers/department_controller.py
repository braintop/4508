from flask import jsonify
from models.department_model import DepartmentModel
 
class DepartmentController:
 
    @staticmethod
    def all():
        return jsonify(DepartmentModel.get_all())

from flask import Blueprint
from controllers.department_controller import DepartmentController
 
department_bp = Blueprint('departments', __name__)
 
department_bp.get('/departments')(DepartmentController.all)

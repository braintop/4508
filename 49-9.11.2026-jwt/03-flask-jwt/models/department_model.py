from config.db import get_connection
 
class DepartmentModel:
 
    @staticmethod
    def get_all():
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT department_id, department_name '
                'FROM departments ORDER BY department_id'
            )
            return cursor.fetchall()
        except Exception as e:
            print(f"Error getting all departments: {e}")
            return []
        finally:
            conn.close()

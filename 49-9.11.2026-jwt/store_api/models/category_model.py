from config.db import get_connection
class CategoryModel:
    @staticmethod
    def get_all_categories():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:
            cursor.execute("SELECT * FROM categories")
            return cursor.fetchall()
        except Exception as e:
            print(f"Error getting all categories: {e}")
            return []
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def get_category_by_id(category_id):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:
            cursor.execute("SELECT * FROM categories WHERE category_id = %s", (category_id,))
            return cursor.fetchone()
        except Exception as e:
            print(f"Error getting category by id: {e}")
            return None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def create_category(category_name):
        connection = get_connection()
        cursor = connection.cursor()
        try:
            cursor.execute("INSERT INTO categories (category_name) VALUES (%s)", (category_name,))
            connection.commit()
            return cursor.lastrowid
        except Exception as e:
            print(f"Error creating category: {e}")
            return None
        finally:
            cursor.close()
            connection.close()
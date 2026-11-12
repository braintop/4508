from config.db import get_connection
class ProductModel:
    @staticmethod
    def get_all_products():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:
            cursor.execute("SELECT * FROM products")
            return cursor.fetchall()
        except Exception as e:
            print(f"Error getting all products: {e}")
            return []
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def get_product_by_id(product_id):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:
            cursor.execute("SELECT * FROM products WHERE product_id = %s", (product_id,))
            return cursor.fetchone()
        except Exception as e:
            print(f"Error getting product by id: {e}")
            return None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def create_product(name, price, quantity, category_id):
        connection = get_connection()
        cursor = connection.cursor()
        try:
            cursor.execute("INSERT INTO products (name, price, quantity, category_id) VALUES (%s, %s, %s, %s)", (name, price, quantity, category_id))
            connection.commit()
            return cursor.lastrowid
        except Exception as e:
            print(f"Error creating product: {e}")
            return None
        finally:
            cursor.close()
            connection.close()


from config.db import get_connection


class TaskModel:

    @staticmethod
    def create_task(task):
        connection = get_connection()
        try:
            cursor = connection.cursor()
            cursor.execute(
                "INSERT INTO tasks (title, priority, category, completed, user_id) VALUES (%s, %s, %s, %s, %s)",
                (task['title'], task['priority'], task['category'], task['completed'], task['user_id'])
            )
            connection.commit()
            new_id = cursor.lastrowid
            cursor.close()
            return new_id
        except Exception as e:
            print(f"Error creating task: {e}")
            return None
        finally:
            connection.close()

    @staticmethod
    def get_task_by_id(user_id, task_id):
        connection = get_connection()
        try:
            cursor = connection.cursor(dictionary=True)
            cursor.execute(
                "SELECT * FROM tasks WHERE user_id = %s AND task_id = %s",
                (user_id, task_id)
            )
            return cursor.fetchone()
        except Exception as e:
            print(f"Error getting task by id: {e}")
            return None
        finally:
            connection.close()

    @staticmethod
    def get_all_tasks(user_id):
        connection = get_connection()
        try:
            cursor = connection.cursor(dictionary=True)
            cursor.execute(
                "SELECT * FROM tasks WHERE user_id = %s ORDER BY task_id DESC",
                (user_id,)
            )
            return cursor.fetchall()
        except Exception as e:
            print(f"Error getting all tasks: {e}")
            return None
        finally:
            connection.close()

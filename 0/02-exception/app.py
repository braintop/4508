def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Division by zero is not allowed")
    return a / b


try:
    result= divide(10, 0)
    print(result)
except ZeroDivisionError as e:
    print(f"Error: {e}")
finally:
    print("Division is done")

def parse_int(value):
    if value.isdigit():
        return int(value)
    else:
        raise ValueError(f"Invalid integer: {value}")

try:
    result= parse_int("10")
    print(result)
except ValueError as e:
    print(f"Error: {e}")


try:
    result= parse_int("10")
    print(result)
except ValueError as e:
    print(f"Error: {e}")




calculate_average(numbers):
    if len(numbers) == 0:
        raise ValueError("List is empty")
    
    s = 0
    for number in numbers:
        s += number
    return s / len(numbers)

try:
    result= calculate_average([1, 2, 3, 4, 5])
    print(result)
except ValueError as e:
    print(f"Error: {e}")

try:
    result= calculate_average([])
    print(result)
except ValueError as e:
    print(f"Error: {e}")



def get_element(list, index):

    if len(list) == 0:
        raise ValueError("List is empty")
    if index < 0:
        raise IndexError("Index out of range")
    return list[index]

try:
    result= get_element([1, 2, 3, 4, 5], 3)
    print(result)
except IndexError as e:
    print(f"Error: {e}")
except ValueError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Error: {e}")
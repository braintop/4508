person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

print(person)

person["age"] = 31

print(person)

person["city"] = "Los Angeles"

keys = person.keys() # ["name", "age", "city"]

print(keys)

values = person.values() # ["John", 31, "Los Angeles"]

print(values)

items = person.items() # [("name", "John"), ("age", 31), ("city", "Los Angeles")]

print(items)

for key, value in person.items():
    print(f"{key}: {value}")

for key in person.keys():
    print(f"{key}: {person[key]}")

for value in person.values():
    print(value)

for key in person.keys():
    print(key)

for value in person.values():
    print(value)


del person["city"]

print(person)

student = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
student["subject"]="Math"

print(student)

del student["city"]

students = [
    "John": {
        "Math": 90,
        "English": 85,
        "Science": 95
    },
    "Jane": {
        "Math": 80,
        "English": 85,
    },
    "Jim": {
        "Math": 70,
        "English": 75,
        "Science": 80
    }
}
]

def average_grade(students):
    sum_grades = 0
    for grade in student.items():
        sum_math_grades += grade["Math"]
    return sum_math_grades / len(student)

print(average_grade(students))
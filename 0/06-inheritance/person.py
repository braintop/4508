class Person:
    #phase 1 - conxtructor בנאי 
    def __init__(self, name, age, password):
        self.name = name
        self.age = age
        self.__password = password
    
    @property # getter
    def password(self):
        return self.__password

    @password.setter
    def password(self, value):
        if len(value) < 8:
            print("Password must be at least 8 characters long")
        else:
            self.__password = value

    def print_info(self):
        print(f"Name: {self.name}, Age: {self.age}")

    def jump(self):
        print(f"{self.name} is jumping {self.age} times")

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}"


class Student(Person):
    def __init__(self, name, age, password, grade):
        super().__init__(name, age, password) # פרוש המילה איניט זה לבנות ולאתחל 
        self.grade = grade

    def print_info(self):
        print(f"Name: {self.name}, Age: {self.age} , Grade: {self.grade}")

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, grade: {self.grade}"


p1 = Person("Sharon", 30, "12345678")
print(p1.name)
print(p1.age)
print(p1.password)
print(p1)

s1 = Student("Sharon", 30, "12345678", 90)
print(s1.name)
print(s1.age)
print(s1.password)
print(s1.grade)

s1.print_info()
print(s1)


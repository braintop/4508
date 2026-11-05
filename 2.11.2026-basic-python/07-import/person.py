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


if __name__ == "__main__":
    p1 = Person("Sharon", 30, "12345678")
    p1.print_info()
    print(p1)

    s1 = Student("Sharon", 30, "12345678", 90)
    s1.print_info()
    print(s1)
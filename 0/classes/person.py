class Student:
    #phase 1 - conxtructor בנאי 
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def print_info(self):
        print(f"Name: {self.name}, Age: {self.age}")

    def jump(self):
        print(f"{self.name} is jumping {self.age} times")

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}"

sharon = Student("Sharon", 30)
print(sharon.name)
print(sharon.age)

yehuda = Student("Yehuda", 25)
print(yehuda.name)
print(yehuda.age)


ortal = Student("Ortal", 20)
print(ortal.name)
print(ortal.age)

ortal.print_info()
yehuda.print_info()
sharon.print_info()

ortal.jump()
yehuda.jump()
sharon.jump()


print(sharon)
print(yehuda)
print(ortal)









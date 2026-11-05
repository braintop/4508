from person import Person, Student
from animal import *

d1 = Dog("Dog", "Woof")
d1.make_sound()
print(d1)

c1 = Cat("Cat", "Meow")
c1.make_sound()
print(c1)


p1 = Person("Sharon", 30, "12345678")
p1.print_info()
print(p1)

s1 = Student("Sharon", 30, "12345678", 90)
s1.print_info()
print(s1)


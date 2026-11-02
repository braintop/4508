class Animal:
    def __init__(self, name, age):
        self.name = name

    def print_info(self):
        print(f"Name: {self.name}")

    def __str__(self):
        return f"Name: {self.name}"

class Dog(Animal):
    def __init__(self, name, sound):
        super().__init__(name)
        self.sound = sound

    def make_sound(self):
        print(f"{self.name} is making sound: {self.sound}")

class Cat(Animal):
    def __init__(self, name, sound):
        super().__init__(name)
        self.sound = sound

    def make_sound(self):
        print(f"{self.name} is making sound: {self.sound}")

d1 = Dog("Dog", "Woof")
d1.make_sound()

c1 = Cat("Cat", "Meow")
c1.make_sound()

print(d1)
print(c1)






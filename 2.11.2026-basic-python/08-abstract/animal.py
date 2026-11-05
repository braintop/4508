from abc import ABC, abstractmethod
class Animal(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def make_sound(self):
        pass

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

s=Animal("Animal")

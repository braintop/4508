class Car:
    def __init__(self, brand, color, price):
        self.brand = brand
        self.color = color
        self.__price = price# __ is private

    @property # getter
    def price(self):
        return self.__price

    @price.setter
    def price(self, value):
        if value < 0:
            print("Price cannot be negative")
        else:
            self.__price = value

    def print_info(self):
        print(f"Brand: {self.brand}, Color: {self.color}, Price: {self.price}")

    def drive(self):
        print(f"The {self.brand} is driving")

    def __str__(self):
        return f"Brand: {self.brand}, Color: {self.color}, Price: {self.price}"

car1 = Car("Toyota", "Red", 10000)
car1.print_info()
print(car1)

#car1.price = -500

car1.price = 15000 # ? ??? ? ? ? ? ? ? ? ? ? ? ? ?

print(car1.price)


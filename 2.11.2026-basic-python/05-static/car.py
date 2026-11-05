class Car:

    #class variable
    STORE_NAME = "Sharon's Car Store"
    counter = 0
    def __init__(self, brand, color, price):
        if Car.counter >= 10:
            print("We have reached the maximum number of cars")
        else:
            self.brand = brand
            self.color = color
            self.__price = price# __ is private
            Car.counter += 1



    def get_counter():
        return Car.counter

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
        print(f"Store Name: {Car.STORE_NAME}")
        print(f"Car Number: {Car.counter}")
        print(f"Brand: {self.brand}, Color: {self.color}, Price: {self.price}")

    def drive(self):
        print(f"The {self.brand} is driving")

    def __str__(self):
        return f"Brand: {self.brand}, Color: {self.color}, Price: {self.price}"

car1 = Car("Toyota", "Red", 10000)
car2 = Car("Ford", "Blue", 20000)
car3 = Car("Chevrolet", "Green", 30000)
car4 = Car("Audi", "Black", 40000)
car5 = Car("BMW", "White", 50000)
car6 = Car("Mercedes", "Silver", 60000)
car7 = Car("Volvo", "Gray", 70000)
car8 = Car("Nissan", "Red", 80000)
car9 = Car("Hyundai", "Blue", 90000)
car10 = Car("Kia", "Green", 100000)
car11 = Car("Renault", "Yellow", 110000)
# car1.print_info()
# print(car1)

# #car1.price = -500

# car1.price = 15000 # ? ??? ? ? ? ? ? ? ? ? ? ? ? ?

# print(car1.price)

print(Car.STORE_NAME)
print(Car.get_counter())
print(Car.counter)


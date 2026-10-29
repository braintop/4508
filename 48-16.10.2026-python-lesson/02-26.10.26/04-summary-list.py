import random
numbers = []

for i in range(100):
    numbers.append(random.randint(1, 201))


for number in numbers:
    print(number, end=", ")
print("length of the list is: ", len(numbers))

n = int(input("Input a number: "))
if n in numbers:
    print("The number is in the list")
else:
    print("The number is not in the list")

count = 0
n2 = int(input("Input a number: "))
for number in numbers:
    if number == n2:
        count += 1
print("The number is in the list: ", count)

n3 = int(input("Input a number: "))
for number in numbers:
    if number == n3:
        print("The number is in the list")
        break
else:
    print("The number is not in the list")

n4 = int(input("Input a number: "))
for number in numbers:
    if number == n4:
        numbers.remove(number)
for number in numbers:
    print(number, end=", ")




n5 = int(input("Input a number: "))
new_numbers = []
for number in numbers:
    if number >  n5:
        new_numbers.append(number)

print(new_numbers)
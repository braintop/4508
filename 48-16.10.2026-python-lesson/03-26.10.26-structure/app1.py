numbers = (1, 2, 3, 4, 5)
print(numbers)
print(numbers[0])
print(numbers[1])
print(numbers[2])
print(numbers[3])
print(numbers[4])

for number in numbers:
    print(number)

print(len(numbers))

print(numbers.count(1))

#numbers[0] = 10 # error because tuple is immutable

numbers.append(6) # error because tuple is immutable
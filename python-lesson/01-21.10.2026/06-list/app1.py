fruits = ["apple", "banana", "cherry", "date", "elderberry"]

print(fruits)#['apple', 'banana', 'cherry', 'date', 'elderberry']
print(fruits[0])#apple
print(fruits[1])#banana
print(fruits[2])#cherry
print(fruits[3])#date
print(fruits[4])#elderberry

fruits[0] = "pineapple"
print(fruits)

fruits.append("grape")
print(fruits)# ['pineapple', 'banana', 'cherry', 'date', 'elderberry', 'grape']

fruits.remove("banana")
print(fruits)# ['pineapple', 'cherry', 'date', 'elderberry', 'grape']

last_fruit = fruits.pop()
print(last_fruit)# grape
print(fruits)# ['pineapple', 'cherry', 'date', 'elderberry']

second_fruit = fruits.pop(1)
print(second_fruit)# cherry
print(fruits)# ['pineapple', 'date', 'elderberry']

fruits.clear()
print(fruits)# []

fruits.append("apple")
print(fruits)# ['apple']

fruits.insert(0, "banana")
print(fruits)# ['banana', 'apple']

fruits.insert(1, "cherry")
print(fruits)# ['banana', 'cherry', 'apple']

fruits.insert(2, "date")
print(fruits)# ['banana', 'cherry', 'date', 'apple']

fruits.insert(3, "elderberry")
print(fruits)# ['banana', 'cherry', 'date', 'elderberry', 'apple']


fruits.sort()
print(fruits)# ['apple', 'banana', 'cherry', 'date', 'elderberry']

fruits.reverse()
print(fruits)# ['elderberry', 'date', 'cherry', 'banana', 'apple']


print(len(fruits))# 5
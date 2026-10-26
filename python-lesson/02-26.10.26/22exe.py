while True:
    num = int(input("Input a number: "))
    print(num)

#22 
num = int(input("Input a number: "))
while num > 0:
    for i in range(num, 0, -1):
        print(i)
    num = int(input("Input a number: "))
print("Done")


#23 
n = int(input("Input a number: "))
for i in range(1, n//2 + 1):
    if n % i == 0:
        print(i)


#24
n = int(input("Input a number: "))
if n <= 2:
    is_prime = False
else:
    is_prime = True
    for i in range(2, n//2 + 1):
        if n % i == 0:
            is_prime = False
            break


if is_prime:
    print("Prime")
else:
    print("Not prime")

        
print(n)


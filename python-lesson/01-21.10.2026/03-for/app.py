# for i in range(10):
#     print(i,end=" |")


# for i in range(3, 10, 2):
#     print(i,end=" |")
# count = 0
# for student in range(1, 4000):
#     print(f"student {student}")
#     print("print score")
#     score = int(input("Enter your score: "))
#     print(f"score {score}")
#     if score >= 60:
#         count += 1
#         print("pass")
#     else:
#         print("fail")
# print(f"pass {count}")



total = 0 
for i in range(1, 4):
    number = int(input("Enter your number: "))
    total += number
print(f"total {total}")
print(f"average {total / 3}")
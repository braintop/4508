def average1(numbers):
    if len(numbers) == 0:
        return None
    s = 0
    for number in numbers:
        s += number

    return s / len(numbers)
def average2(numbers):
    if len(numbers) == 0:
        return None
    return sum(numbers) / len(numbers)


numbers = [1, 2, 3, 4, 5]
avg = average1(numbers)
if avg is not None:
    print(f"Average: {avg}")
else:
    print("No numbers to average")



x = 50
if x in numbers:
    print("5 is in the list")
else:
    print("5 is not in the list")


def contains_value_1(numbers, value):
    for number in numbers:
        if number == value:
            return True
    return False

def contains_value_2(numbers, value):
    return value in numbers

scores = [100, 82, 90, 40, 58, 30]
if contains_value_1(scores, 30):
    print("30 is in the list")
else:
    print("30 is not in the list")

if contains_value_2(scores, 30):
    print("30 is in the list")
else:
    print("30 is not in the list")



yeuda_scores =[]

for i in range(10):
    grade = int(input(f"Enter a grade for student {i+1}: "))
    yeuda_scores.append(grade)

if contains_value_1(yeuda_scores, 100):
    print("100 is in the list")
else:
    print("100 is not in the list")


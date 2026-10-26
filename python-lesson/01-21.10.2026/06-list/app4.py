def average_list(numbers):
    if len(numbers) == 0:
        return None
    s = 0 
    for number in numbers:
        s += number
    return s/len(numbers)

def count_passing(numbers):
    if len(numbers) == 0:
        return 0
    count = 0
    for number in numbers:
        if number >= 60:
            count += 1
    return count

def show_reporot(numbers):
    
    avg = average_list(numbers)
    passed = count_passing(numbers)
    print(f"number of grades :{len(numbers)}, Average: {round(avg, 2)}, Passing: {passed}")

#program or main 
num_of_students = int(input("Input numbers of students: "))
grades = []
for i in range(num_of_students):
    grade = int(input(f"Input grade for student {i+1}: "))
    grades.append(grade)


show_reporot(grades)
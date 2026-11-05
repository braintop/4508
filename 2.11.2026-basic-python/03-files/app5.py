import pickle
line_count = 0
with open("content2.txt", "r") as f:
    for line in f:
        line_count += 1
print(f"Number of lines: {line_count}")


name = input("Enter your name: ")
city = input("Enter your city: ")
with open("content3.txt", "a") as f:
    f.write(f"{name} is from {city}\n")
print("finished writing to file")

with open("a.png", "rb") as source:
    data = source.read()
    with open("b.png", "wb") as destination:
        destination.write(data)
print("finished copying file")


data = {"name": "Alice", "age": 30}
with open("data1.pkl", "wb") as f:
    pickle.dump(data, f)
with open("data1.pkl", "rb") as f:
    data = pickle.load(f)
    print(data)




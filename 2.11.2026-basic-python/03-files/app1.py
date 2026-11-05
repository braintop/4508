import os
for i in range(10):
    name = f"/Users/braintopltd/Desktop/temp/sharon{i}"
    f= open(name, "w")
    f.write(f"This is the content of the file {name}")
    f.close()

try:
    os.mkdir("data")
except FileExistsError as e:
    print(f"Error: {e}")

print("finished creating files")



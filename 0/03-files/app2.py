try:
    f=open("/Users/braintopltd/Desktop/temp/sharon10.txt", "r")
    content = f.read()
    print(content)
except FileNotFoundError as e:
    print(f"Error: {e}")
finally:
    f.close()
    print("finished reading file")

with open("data/sharon100.txt", "r") as f:
    print(f.read())

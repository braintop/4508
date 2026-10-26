items = ["banana", -2, "cherry", 94, 45]
print(len(items))# 5

x = len(items)#length of list 
print(x)# 5

#index for 
for i in range(len(items)):
    print(items[i])# banana -2 cherry 94 45

#value for 
for value  in items:
    print(value)# banana -2 cherry 94 45



for i in range(len(items)):
    if i%2 == 0:
        print(items[i])# banana -2 cherry 94 45
    else:
        print(items[i])# banana -2 cherry 94 45


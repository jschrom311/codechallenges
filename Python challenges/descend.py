#Your task is to make a function that can take any non-negative integer as 
# a argument and return it with its digits in descending order. 
# Essentially, rearrange the digits to create the highest possible number.
#
#Ex.
#input: 21544 => output: 54421
#input: 12385469 => 98654321

def descending_order(num):
    numlist = []
    for i in range(len(str(num))):
        numlist.append(str(num)[i])
    sortedlist = sorted(numlist, reverse=True)
    sortedstring = ''.join(sortedlist)
    return int(sortedstring)
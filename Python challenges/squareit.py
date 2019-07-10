#Square every digit of a number.
#For example, if 9119 is run through the function, 811181 will come out.
#The function accepts an integer and returns an integer.
#

def square_digits(num):
    return int(''.join(str(int(n)**2) for n in str((num)))

#alternative solution
def squared_digits(num):
    d_squared = ""
    for d in str(num):
        d_squared += str(int(d)**2)
    return int(d_squared)
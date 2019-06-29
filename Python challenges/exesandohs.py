#Check to see if a string has the same amount of 'x's and 'o's. 
#The method must return a boolean and be case insensitive. 
#The string can contain any char.
#Examples:
#XO("ooxx") => true
#XO("xooxx") => false
#XO("ooxXm") => true

#Iterative solution
def xo(s):
    xcount = 0
    ocount = 0
    for char in s.lower():
        if char == 'x':
            xcount +=1
        elif char == 'o':
            ocount +=1
    return xcount == ocount

#Much better solution :)
def xo(s):
    return s.lower().count('x') == s.lower().count('o')
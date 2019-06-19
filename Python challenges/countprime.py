#Write a function that returns the number of prime
#numbers that exist up to and including a given number.
#
#By convention treat 0 and 1 as not prime.
#
#Ex.
#count_primes(100) --> 25
#

def count_primes(num):
    #check for 0 or 1 input
    if num < 2:
        return 0
    
    #2 or greater
    #store prime numbers
    primes = [2]
    #counter going to input num
    x = 3
    #x going through every number up to input num
    while x <= num:
        #check if x prime - can use for y in primes
        for y in range(3,x,2):
            if x%y == 0:
                x += 2
                break
        else:
            primes.append(x)
            x += 2
    print(primes)
    return len(primes)
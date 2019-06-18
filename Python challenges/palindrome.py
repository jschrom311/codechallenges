#Check if a given string is a palindrome
#
#A palindrome is a word, phrase, or sequence that
#reads the same backwards as forwards.
#EX. madam, taco cat, nurses run
#

def palindrome(s):
    return s == s[::-1]

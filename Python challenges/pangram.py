#Write a function to determine if a given string is a pangram.
#A pangram contains every letter of the alphabet.
#EX. The quick brown fox jumps over the lazy dog
#
#

import string

def ispangram(str1, alphabet=string.ascii_lowercase):
    alphaset = set(alphabet)
    return alphaset <= set(str1.lower())
'''Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.'''
from collections import Counter

def duplicate_count(text):
    #counter variable
    duplicates = 0
    #iterate over character list turned into dictionary
    for k, v in Counter(list(text.lower())).items():
        #increment the duplicate counter
        if v > 1:
            duplicates += 1

    return duplicates
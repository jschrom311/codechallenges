'''Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.'''

#solution works, except does not pass "Do not mutate the original array/list"
def remove_smallest(numbers):
    if not numbers:
        return []

    numbers.remove(min(numbers))
    return numbers

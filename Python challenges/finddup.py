#Given a list of ints, return True if the array
#contains a 3 next to a 3 somewhere.
#Ex. find_dup([1,3,3]) --> True
#find_dup([1,3,1,3]) --> False
#

def find_dup(nums):
    for i in range(0, len(nums)-1):
        if nums[i] == 3 and nums[i+1] == 3:
            return True
    return False


#another option inside the for loop:
#if nums[i:i+2] == [3,3]:
#   return True
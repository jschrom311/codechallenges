'''This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"'''

def accum(s):
    return '-'.join([str(s[i]*(i+1)).capitalize() for i in range(len(s))])
#another clean one-liner
def mumble(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))
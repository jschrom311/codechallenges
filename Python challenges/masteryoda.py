#MASTER YODA:
#Given a sentence, return a sentence with the words reversed.
#Ex. master_yoda('I am home')--> 'home am I'
#master_yoda('We are here now')--> 'now here are We'
#

def master_yoda(text):
    return ' '.join(text.split()[::-1])
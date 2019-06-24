#Guessing Game-
#Write a program that picks a random integer from 1 to 100
#and has players guess the number. Rules:
#1. If a player's guess is less than 1 or greater than 100 return 'OUT OF BOUNDS'
#2. On a player's first turn if their guess is:
#(a) within 10 of the number, return 'WARM'
#(b)further than 10 from the number, return 'COLD'
#3. On all subsequent turns, if a guess is:
#(a) closer to the number than the previous guess, return 'WARMER'
#(b) farther from the number than the previous guess, return 'COLDER'
#4.When the player's guess equals the number, return correct and the number of guesses.

#Pick a random integer between 1 to 100

import random
num = random.randint(1,100)

#Explain the rules

print("I'm thinking of a number between 1 and 100")
print("If your guess is more than 10 away from my number, I'll tell you you're COLD")
print("If your guess is within 10 of my number, I'll tell you you're WARM")
print("If your guess is farther than your most recent guess, I'll say you're getting COLDER")
print("If your guess is closer than your most recent guess, I'll say you're getting WARMER")
print("LET'S PLAY!")

#Create a list to store guesses

guesses = [0]

#While loop for valid guess

while True:
    guess = int(input("I'm thinking of a number between 1 and 100.\n  What is your guess? "))
    if guess < 1 or guess > 100:
        print('OUT OF BOUNDS! Please try again: ')
        continue
#While loop to compare guess to number
    if guess == num:
        print(f'Correct, you took only {len(guesses)} guesses!')
        break
    #add guess to list if incorrect
    guesses.append(guess)
    #Check guesses after first guess
    if guesses[-2]:  
        if abs(num-guess) < abs(num-guesses[-2]):
            print('WARMER!')
        else:
            print('COLDER!')
   
    else:
        if abs(num-guess) <= 10:
            print('WARM!')
        else:
            print('COLD!')

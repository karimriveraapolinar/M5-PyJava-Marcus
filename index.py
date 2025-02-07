
# PYTHON ERROR CODE FORM
# THERE ARE THREE ERRORS ON THIS FILE
# FIND THEM KARIM
print()

# 1. If-Else Statements

# A. Even/Odd --------------------------------------------------------
print('1A: Checks input if its even or odd')
num = int(input('Enter number: '))
if num % 2 == 0:
    print('Number is even')
else:
    print('Number is odd')

input('\nEnter to continue: ')
print()

# B. Voting ----------------------------------------------------------
print('1B: Input an age and see if your eligible to vote.')
age = int(input('Enter your age: '))
if age < 18:
    print('You are not eligible to vote.')
else:
    print('You are eligible to vote')

input('\nEnter to continue: ')
print()

# C. Positive/Negative/Zero ------------------------------------------
print('1C: Checks input if number is positive, negative, or zero')
integer = int(input('Enter a number: '))
if integer == 0:
    print('Number is zero.')
elif integer < 0:
    print('Number is negative.')
elif integer > 0:
    print('Number is positive.')
else:
    print('Input is not a number. I\'m very dissapointed in you.')

input('\nEnter to continue: ')
print()

# 2. For/While Loops

# A. Numbers 1-10 ----------------------------------------------------
print('2A: Prints numbers 1 to 10')
for i in range(1, 11):  # Fixed range to start from 1
    print(i)

input('\nEnter to continue: ')
print()

# B. Numbers 1-5 -----------------------------------------------------
print('2B: Prints numbers from 1 to 5')
i = 1
while i < 6:
    print(i)
    i += 1

input('\nEnter to continue: ')
print()

# C. Factorial Loop --------------------------------------------------
print('2C: Factorials')
num = int(input('Input a number: '))  
factorial = 1
for i in range(1, num + 1):  # Fixed loop to calculate factorial correctly
    factorial *= i
print(factorial)

input('\nEnter to continue: ')
print()

# 3. Functions and Scope

# A. Greeting --------------------------------------------------------
print('3A: Greeting')
name = input('Enter your name: ')
def greeting(name1):
    print('Hello my esteemed guest, ' + name1 + '.')
    print('If your name wasn\'t Karim, why are you here...')
greeting(name)

input('\nEnter to continue: ')
print()

# B. Even/Odd --------------------------------------------------------
print('3B: Function Even/Odd')
funcNum = input('Input a number: ')
def evenOdd(number):
    if number % 2 == 0:
        print('Number is even.')
    else:
        print('Number is odd.')
evenOdd(int(funcNum))

input('\nEnter to continue: ')
print()

# C. Vowel/Strings ---------------------------------------------------
print('3C: Vowel Checker')
userString = input('Enter a string: ')
def vowelChecker(string):
    vowelNum = 0
    for i in string:
        if i in 'aeiouAEIOU':  # Fixed to include 'e' and 'E'
            vowelNum += 1
    print(vowelNum)
vowelChecker(userString)

input('\nEnter to continue: ')
print()

# 4. Arrays & Objects

# A. Fruitloop -------------------------------------------------------
print('4A: Fruit List')
fruits = ['Orange', 'Apple', 'Banana', 'Durian', 'Mango']
for i in range(len(fruits)):
    print(fruits[i])

input('\nEnter to continue: ')
print()

# B. Dictionary ------------------------------------------------------
print('4B: Student Grades')
grades = {'Angel':95 , 'Bianca':97 , 'Troy':93 , 'Marcus':87 }
for key in grades:
    print(str(key) + ': ' + str(grades[key]))

input('\nEnter to continue: ')
print()

# C. Num Array -------------------------------------------------------
print('4C: Array')
arrayNum = [[10,11,15],[14,24,65],[72,12,26]]
d = 0
for a in range(len(arrayNum)):
    b = arrayNum[a]
    for c in range(len(b)):
        if b[c] > d:
            d = b[c]
print(d)

print()

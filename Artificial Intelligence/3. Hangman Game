import random
def choose_word():
    words = ["blue", "black", "orange", "white", "pink", "red", "violet"]
    return random.choice(words)
def display_word(word, guessed_letters):
    display = ""
    for letter in word:
        if letter in guessed_letters:
            display += letter
        else:
            display += "_"
    return display
print("Welcome to Hangman Game!")
name = input("Enter your name: ")
print(f"Hello, {name}! Let's play Hangman.")
word = choose_word()
max_attempts = 6
guessed_letters = []
attempts = 0
while attempts < max_attempts:
    print("\n" + display_word(word, guessed_letters))
    guess = input("Guess a letter: ").lower()
    if len(guess) != 1 or not guess.isalpha():
        print("Please enter a single letter.")
        continue
    if guess in guessed_letters:
        print("You already guessed that letter.")
        continue
    guessed_letters.append(guess)
    if guess not in word:
        attempts += 1
        print(f"Sorry, {guess} is not in the word. Attempts left: {max_attempts - attempts}")
    if display_word(word, guessed_letters) == word:
        print("Congratulations! You guessed the word:", word)
        break
if attempts == max_attempts:
    print("bSorry, you ran out of attempts. The word was:", word)

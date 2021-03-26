# Password Generator

This webpage helps user generate a random password. User picks a password length between and 8-128 characters, and whether they wants specific character types like: numbers, uppercase/lowercase letters, special characters.

[Password Generator](https://jtrevz.github.io/passwordgenerator/)

![Website with Generated Password](/assets/images/generator.png)

## Character Types

The logic behind the password generator pushes a specific letter string onto an array based on if you want that character type to be included or not. Then a number randomly picks between which character type based on what position they are in the array for each of the characters of the password.

## Randomization

Each character type has a specific random number generator based on how many characters are available in the array. Numbers doesn't need an array because you can just target it with a random number function.

![Caption](/assets/images/random.png)

## Criticisms

I have since found out that instead of listing out each character array into its own string I could have set each character type into a long string and split them into arrays.

Another improvement I could have made to make this simpler is to just combine all the array of character types into a single temporary array to avoid having to set random function arrays for each character type. Although that could have impacted the password with having way more letters, both uppercase and lowercase, thank numbers or special characters which could be an issue.

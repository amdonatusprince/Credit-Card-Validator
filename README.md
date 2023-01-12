# Credit-Card-Validator

This program uses regular expressions to validate a credit card number and determine the type of card. It takes in one argument, the card number. 

It checks if the card number matches the format of a Visa card, a Mastercard, an American Express or a Discover. Each card type has its own regex pattern. 

### Based on the card type, a specific regular expression is used to test the card number. 

The regex patterns should be as follow

> Visa starts with 4 and has 13 to 16 digits in total

> Mastercard starts with 51-55 and has 16 digits in total

> American Express starts with 34 or 37 and 15 digits in total 

> Discover starts with 6011 or 65 and 16 digits in total

If the card number matches the pattern for the given card type, the program returns "Valid card number", otherwise it returns "Invalid card number".


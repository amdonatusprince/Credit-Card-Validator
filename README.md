# Credit-Card-Validator

This program uses regular expressions to validate credit card numbers and it takes in two arguments

> The card number and the card type. 

### Based on the card type, a specific regular expression is used to test the card number. 

The regular expressions used are specific to the card type and are designed to match the format of the card number. 

The regex patterns should be as follow

> Visa starts with 4 and has 13 to 16 digits in total

> Mastercard starts with 51-55 and has 16 digits in total

> American Express starts with 34 or 37 and 15 digits in total 

> Discover starts with 6011 or 65 and 16 digits in total

If the card number matches the pattern for the given card type, the program returns "Valid card number", otherwise it returns "Invalid card number".

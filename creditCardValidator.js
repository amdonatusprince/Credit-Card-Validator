

function validateCreditCard(cardNumber) {

    var visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var mastercardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    var americanExpressRegex = /^3[47][0-9]{13}$/;
    var discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  
    if (visaRegex.test(cardNumber)) {
      console.log("Valid Visa card number");
    } else if (mastercardRegex.test(cardNumber)) {
      console.log("Valid Mastercard card number");
    } else if (americanExpressRegex.test(cardNumber)) {
      console.log("Valid American Express card number");
    } else if (discoverRegex.test(cardNumber)) {
      console.log("Valid Discover card number");
    } else {
      console.log("Invalid card number");
    }

  }
  
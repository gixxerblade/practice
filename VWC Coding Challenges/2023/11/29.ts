/**
 * Write a pattern that matches e-mail addresses.
 * The personal information part contains the following ASCII characters.
 * Uppercase (A-Z) and lowercase (a-z) English letters.
 * Digits (0-9).
 * Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 * Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
 * Input
 * valid_email('me-info@example.com');
 * Output
 * Valid email address!
 */

const valid_email = (email: string) => {
  const re = /[\w!#$%&'*\+\-/=?^_`{|}~]+.@[\w!#$%&'*\+\-/=?^_`{|}~]+.\.[a-zA-Z]{2,}/g;
  return re.test(email) ? 'Valid email address!' : 'Not a valid email address.';
}

console.log(valid_email('me-info@example.com')) // valid
console.log(valid_email('me-info@example.c')) // not valid
console.log(valid_email('@@@.com')) // not valid
console.log(valid_email('111@email.com')) // valid
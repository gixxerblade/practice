
const validateEmail = (str: string): string => {
  const emailRegEx: RegExp = /\b[\w\.\-\!\#\$\%\&'\*\+\/\=\?\^\_\`\{\|\}0-9]+[^\.]@[\w\.-]+\.\w{2,4}\b/gi
  return emailRegEx.test(str) ? 'Valid email address' : 'Not a valid email address'
}

console.log(validateEmail('valid.email.test@account.com')) // Valid email
console.log(validateEmail('valid.email.test.@account.com')) // Not a valid email


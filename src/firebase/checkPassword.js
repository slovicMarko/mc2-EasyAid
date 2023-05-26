const checkPasswordStrength = (password) => {
  const minLength = 8;
  const regexLowercase = /[a-z]/;
  const regexUppercase = /[A-Z]/;
  const regexDigit = /[0-9]/;
  const regexSpecialChar = /[!@#$%^&*]/;

  if (
    password.length >= minLength &&
    regexLowercase.test(password) &&
    regexUppercase.test(password) &&
    regexDigit.test(password) &&
    regexSpecialChar.test(password)
  ) {
    return true;
  } else {
    return false;
  }
};

export default checkPasswordStrength;

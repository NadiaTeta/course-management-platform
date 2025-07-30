function validateEmail(email) {
  const re = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  return password.length >= 6;
}

module.exports = { validateEmail, validatePassword };

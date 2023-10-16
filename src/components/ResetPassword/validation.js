const validation = (input) => {
  const passwordRegex = /^(?=.*\d).{8,30}$/;
  let errors = {};
  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = "Password should be the same";
  }
  return errors;
};

export default validation;

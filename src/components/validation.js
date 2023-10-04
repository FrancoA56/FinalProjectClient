export function validation(input) {
  let errors = {};
  const emailRegex = /^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d).{8,30}$/;
  const nameRegex = /^[a-zA-Z ]+$/;

  if (input.name.length > 20) {
    errors.name = "Name shouldn't have more than 20 characters";
  }
  if (!nameRegex.test(input.name)) {
    errors.name = "Name can only have letters";
  }
  if (!input.name) {
    errors.name = "Name shouldn't be empty";
  }
  // Validate mail
  if (!emailRegex.test(input.email)) {
    errors.email = "Incorrect email format";
  }
  if (input.email.length > 40) {
    errors.email = "Email shouldn't have more than 40 characters";
  }
  if (!input.email) {
    errors.email = "Email shouldn't be empty";
  }
  // Validate password
  if (!passwordRegex.test(input.password)) {
    errors.password =
      "Password should have a number";
  }
  if (input.password.length < 8 && input.password.length > 30) {
    errors.password = "Password should have between 8 and 30 characters";
  }

  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = "Password should be the same";
  }
  return errors;
}

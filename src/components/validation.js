export function validation(input) {
  let errors = {};
  const emailRegex = /^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d).{8,30}$/;
  const nameRegex = /^[a-zA-Z ]+$/;

  if (input.name.length > 20) {
    errors.name = "Name mustn't be more than 20 characters";
  }
  if (!nameRegex.test(input.name)) {
    errors.name = "Name can only have letters";
  }
  if (!input.name) {
    errors.name = "Name musn't be empty";
  }
  // Validate mail
  if (!emailRegex.test(input.email)) {
    errors.email = "Incorrect email format";
  }
  if (input.email.length > 40) {
    errors.email = "Email mustn't be more than 40 characters";
  }
  if (!input.email) {
    errors.email = "Email mustn't be empty";
  }
  // Validate password
  if (!passwordRegex.test(input.password)) {
    errors.password =
      "Password must have a number and have a length between 8 to 30 characters";
  }
  return errors;
}

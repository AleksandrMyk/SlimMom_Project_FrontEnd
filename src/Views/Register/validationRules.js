export default function validate(values) {
  const regLatin = new RegExp("^[a-zA-Z0-9]+$");

  let errors = {};

  if (!values.password) {
    errors.password = "*Введите пароль !!!";
  } else if (!regLatin.test(values.password)) {
    errors.password = "*Только латынские буквы!!!";
  } else if (values.password.length < 5) {
    errors.password = "*Пароль от 6 символов ";
  }

  if (!values.name) {
    errors.name = "*Введите имя!!!";
  } else if (values.name.length < 3) {
    errors.name = "*Имя должно быть от 3 символов ";
  }

  if (!values.login) {
    errors.login = "*Введите имя!!!";
  } else if (values.login.length < 3) {
    errors.login = "*Имя должно быть от 3 символов ";
  } else if (!regLatin.test(values.login)) {
    errors.login = "*Только латинские буквы!!!";
  }

  return errors;
}

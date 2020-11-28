export default function validate(values) {
  const regLatin = new RegExp("^[a-zA-Z0-9]+$");
  //   const regPassword = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{6,}$");
  const regName = new RegExp("^[А-Яа-яЁёs]+$");

  let errors = {};

  if (!values.password) {
    errors.password = "*Введите пароль !!!";
  } else if (!regLatin.test(values.password)) {
    errors.password = "*Только латынские буквы!!!";
  } else if (!values.password.length >= 6) {
    errors.password = "*Пароль от 6 символов ";
  }

  if (!values.name) {
    errors.name = "*Введите имя!!!";
  } else if (values.name.length < 3) {
    errors.name = "*Имя должно быть от 3 символов ";
  } else if (!regName.test(values.name)) {
    errors.name = "*Имя только на кириллице!!!";
  }

  if (!values.login) {
    errors.login = "*Введите имя!!!";
  } else if (!values.login.length >= 3 && !values.login.length <= 15) {
    errors.login = "*Имя должно быть от 3 до 15 символов ";
  } else if (!regLatin.test(values.login)) {
    errors.login = "*Только латинские буквы!!!";
  }

  return errors;
}

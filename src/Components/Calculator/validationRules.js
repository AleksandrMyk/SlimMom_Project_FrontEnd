export default function validate(values) {
  // const regLatin = new RegExp("^[a-zA-Z0-9]+$");
  const numbers = new RegExp("^[0-9]+$");
  //   const regPassword = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{6,}$");
  // const regName = new RegExp("^[А-Яа-яЁёs]+$");

  let errors = {};

  if (!values.height) {
    errors.height = "*Введите ваш Рост";
  } else if (!numbers.test(values.height)) {
    errors.height = "*Только цифры!!!";
  } else if (values.height < 99 || values.height > 199) {
    errors.height = "*Рост от 100 до 300 см";
  }

  if (!values.age) {
    errors.age = "*Введите ваш возраст";
  } else if (!numbers.test(values.age)) {
    errors.age = "*Только цифры!!!";
  } else if (values.age < 5 || values.age > 99) {
    errors.age = "*Возраст от 5 до 100 лет";
  }

  if (!values.currentWeight) {
    errors.currentWeight = "*Введите ваш текущий вес";
  } else if (!numbers.test(values.currentWeight)) {
    errors.currentWeight = "*Только цифры!!!";
  } else if (values.currentWeight < 30 || values.currentWeight > 200) {
    errors.currentWeight = "*Вес от 30 до 200 кг";
  }

  if (!values.targetWeight) {
    errors.targetWeight = "*Введите ваш желаемый вес";
  } else if (!numbers.test(values.targetWeight)) {
    errors.targetWeight = "*Только цифры!!!";
  } else if (values.targetWeight < 30 || values.targetWeight > 200) {
    errors.targetWeight = "*Вес от 30 до 200 кг";
  }

  if (!values.bloodType) {
    errors.bloodType = "*Введите вашу группу крови !!";
  }

  return errors;
}

export default function validate(values) {
  let errors = {};

  if (!values.height) {
    errors.height = "*Введите рост !!!";
  } else if (typeof values.height !== "number") {
    errors.height = "*Введите число";
  } else if (values.height < 140) {
    errors.height = "*Введите значение от 140";
  } else if (values.height > 220) {
    errors.height = "*Введите значение до 220";
  }

  if (!values.age) {
    errors.age = "*Введите возраст !!!";
  } else if (typeof values.age !== "number") {
    errors.age = "*Введите число";
  } else if (values.age < 18) {
    errors.age = "*Извините, Вы несовершеннолетни";
  } else if (values.age > 80) {
    errors.age = "*Извините, Вам противопоказано худеть";
  } else if (values.age > 120) {
    errors.age = "*Введите корректный возраст";
  }

  if (!values.currentWeight) {
    errors.currentWeight = "*Введите текущий вес !!!";
  } else if (typeof values.currentWeight !== "number") {
    errors.currentWeight = "*Введите число";
  } else if (values.currentWeight < 50) {
    errors.currentWeight = "*Введите значение от 50";
  } else if (values.currentWeight > 500) {
    errors.currentWeight = "*Введите значение до 500";
  }

  if (!values.targetWeight) {
    errors.targetWeight = "*Введите желаемый вес !!!";
  } else if (typeof values.targetWeight !== "number") {
    errors.targetWeight = "*Введите число";
  } else if (values.targetWeight < 40) {
    errors.targetWeight = "*Введите значение от 40";
  } else if (values.targetWeight > 500) {
    errors.targetWeight = "*Введите значение до 500";
  }

  if (!values.bloodType) {
    errors.bloodType = "*Выберите группу крови";
  }

  return errors;
}

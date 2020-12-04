import { useState } from "react";

const useForm = (callback, validate) => {
  const [bludType, setBludType] = useState(null);
  const [values, setValues] = useState({
    height: "",
    age: "",
    currentWeight: "",
    targetWeight: "",
    bloodType: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors({
      ...validate(values),
    });

    console.log("second");

    setValues({
      height: "",
      age: "",
      currentWeight: "",
      targetWeight: "",
      bloodType: "",
    });
    setBludType(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: Number(value),
    });
  };

  const handleBludChange = (e) => {
    setBludType(e.target.value);
    values.bloodType = Number(e.target.value);
    console.log(values);
  };

  return {
    handleChange,
    handleSubmit,
    handleBludChange,
    bludType,
    values,
    errors,
  };
};

export default useForm;

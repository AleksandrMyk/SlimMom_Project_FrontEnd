import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    height: null,
    age: null,
    currentWeight: null,
    targetWeight: null,
    bloodType: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values);
  };

  const handleBludChange = (e) => {
    setValues({
      ...values,
      bloodType: Number(e.target.value),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: Number(value),
    });
  };

  return {
    handleChange,
    handleSubmit,
    handleBludChange,
    values,
    errors,
  };
};

export default useForm;

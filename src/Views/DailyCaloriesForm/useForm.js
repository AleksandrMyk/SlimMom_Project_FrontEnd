import { useState, useEffect } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: Number(value),
    });
  };

  const handleBludChange = (e) => {
    setValues({
      ...values,
      bloodType: Number(e.target.value),
    });
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

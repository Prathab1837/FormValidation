import React, { useState } from 'react';

const useForm = (Validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;

    setValues((prevValues)=>{
      return{
        ...prevValues,
        [name]: value,
      };
    });
  };

  const[register, setRegister] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setRegister(Object.keys(errors).length === 0 && values.username.trim() && values.email.trim() && values.password.trim() && values.password2.trim() && values.password == values.password2);
    setErrors(Validate(values));
  }

  return {handleChange, values, handleSubmit, errors, register};
 
};

export default useForm;
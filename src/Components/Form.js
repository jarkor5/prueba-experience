import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../styles/form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      formErrors.email = 'Enter a valid Email';
    }
    if (!formData.password.trim()) {
      formErrors.password = 'Password is required';
    }
    return formErrors;
  };

  const validateField = (fieldName, value) => {
    let fieldError = '';
    switch (fieldName) {
      case 'name':
        fieldError = value.trim() ? '' : 'Name is required';
        break;
      case 'email':
        fieldError = value.trim() ? (isValidEmail(value) ? '' : 'Enter a valid Email') : 'Email is required';
        break;
      case 'password':
        fieldError = value.trim() ? '' : 'Password is Required';
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [fieldName]: fieldError,
    });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSuccessMessage('Success!');
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      setErrors({});
      setSearchParams(''); // Eliminamos cualquier parámetro de búsqueda
      window.location.href = '/success'; // Redireccionamos a la URL /success
    } else {
      setErrors(formErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div className="form">
      <div className='title-container'>
      <h1>Start Your Journey with a 7-day free trial</h1>
      </div>
      
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>First name*</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group-password">
          <label>Password*</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input className='password-input' type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
            <button className='eye-icon' type="button" onClick={togglePasswordVisibility} style={{ marginLeft: '5px', padding: '5px', cursor: 'pointer' }}>
              {showPassword ? <FaEyeSlash className='eye-icon' /> : <FaEye className='eye-icon' />}
            </button>
          </div>
          <div className='validation-span'>
            <span className='validation-span-two' id='eight-ch' style={{ marginTop: '10px', borderRadius: '5px' }}>
              {formData.password.length >= 8 ? <FaCheckCircle className="validation-icon" style={{ color: 'green' }} /> : <FaTimesCircle className="validation-icon" style={{ color: 'red' }} />}
              At least 8 characters
            </span>
            <span className='validation-span-two' style={{ marginTop: '10px', borderRadius: '5px' }}>
              {/\W/.test(formData.password) ? <FaCheckCircle className="validation-icon" style={{ color: 'green' }} /> : <FaTimesCircle className="validation-icon" style={{ color: 'red' }} />}
              Include special character
            </span>
          </div>
        </div>
        <button type="submit" className='send-button'>Create account</button>
      </form>

      <div className='login'>
        <p>Already have an account?</p> 
        <b href="#"> Log in</b>
      </div>
      <p className={successMessage ? "success" : "hidden"}>{successMessage}</p>
    </div>
  );
}

export default Form;

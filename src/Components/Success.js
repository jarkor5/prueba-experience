import React from 'react';
import '../styles/success.css'
import successImage from '../assets/cheque.png'

const Success = () => {
  return (
    <div className='success-container'>
      <div className='success-card'>
      <img className='succes-img' src={successImage} alt="Success" />  
      <h1>Success!</h1>
      <p>Account Created Successfully!</p>
      <h2>Awesome!</h2>
      </div>
      
    </div>
  );
};

export default Success;

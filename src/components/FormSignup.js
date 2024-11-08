import React from 'react';
import useForm from '../hooks/useForm';
import Validate from './Validate';
const FormSignup = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(Validate);
    return (
    <div className='form-content'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Get start with us today! Create your account</h1>
            <div className='form-input'>
                <label className='form-label' htmlFor="username">Username</label>
                <input className='form-input' name="username" id="username" type="text" placeholder='Enter your username' value={values.username} onChange={handleChange} />
                {errors.username && <p className='errormsg'>{errors.username}</p> }
            </div>
            <div className='form-input'>
                <label className='form-label' htmlFor='email'>Email</label>
                <input className='form-input' name='email' id='email' type="email" placeholder='Enter your email' value={values.email} onChange={handleChange} />
                {errors.email && <p className='errormsg'>{errors.email}</p> }
            </div>
            <div className='form-input'>
                <label className='form-label' htmlFor='password'>Password</label>
                <input className='form-input' name='password' id='password' type="password" placeholder='Enter your password' value={values.password} onChange={handleChange} />
                {errors.password && <p className='errormsg'>{errors.password}</p> }
            </div>
            <div className='form-input'>
                <label className='form-label' htmlFor='password2'>Confirm Password</label>
                <input className='form-input' name='password2' id='password2' type="password" placeholder='Confirm your password' value={values.password2} onChange={handleChange} />
                {errors.password2 && <p className='errormsg'>{errors.password2}</p> }
            </div>
            <div className='footer'>
            <button className='form-input-btn' type='submit'>Sign Up</button>
            <span>Already have an account? Login <a href='#'>here</a></span>
            </div>
        </form>
    </div>
  )
}

export default FormSignup
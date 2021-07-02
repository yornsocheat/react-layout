import React from 'react'
import PropTypes from 'prop-types'

const SignInForm = props => {
    return (
        <div className='card p-3 sign-form'>
            <div className='card-body'>
                <h2 className='card-title mb-3'>Sign In</h2>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label form-label-lg'>Email address</label>
                    <input className='form-control form-control-lg' placeholder='name@example.com' type='email' name='email' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label form-label-lg'>Password</label>
                    <input className='form-control form-control-lg' placeholder='Password *' type='password' name='password' />
                </div>
                <div className='form-check mb-3'>
                    <input className='form-check-input' type='checkbox' name='remember-me' />
                    <label htmlFor='remember-me' className='form-check-label'>Remember me</label>
                </div>
                <div className='d-grid gap-2'>
                    <button type='button' className='btn btn-primary btn-lg'>Sign In</button>
                </div>
                <hr />
                <div className='d-flex flex-column align-items-center'>
                    <button type='button' className='btn btn-link'>Forgot your password?</button>
                    <div className='d-flex flex-row align-items-center'>Don't have an account?<button type='button' className='btn btn-link'>Sign up</button></div>
                </div>

            </div>
        </div>
    )
}

SignInForm.propTypes = {
    id: PropTypes.string
}

export default SignInForm
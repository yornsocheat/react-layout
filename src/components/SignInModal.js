import React from 'react'
import PropTypes from 'prop-types'

const SignInModal = props => {
    return (
        <div className='modal fade' id={props.id}>
            <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Sign In</h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email address</label>
                            <input className='form-control' placeholder='name@example.com' type='email' name='email' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input className='form-control' placeholder='Password *' type='password' name='password' />
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                        <button type='button' className='btn btn-primary'>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

SignInModal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default SignInModal
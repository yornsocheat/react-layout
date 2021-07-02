import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { UPDATE_NAV_MODE } from '../libraries/store/actions'

class SignUp extends Component {
    componentDidMount () {
        const { dispatch } = this.props

        dispatch({ type: UPDATE_NAV_MODE, data: false })
    }

    render () {
        return (
            <div>Sign Up</div>
        )
    }
}

SignUp.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func
}

export default SignUp
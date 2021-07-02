import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SignInForm from '../components/SignInForm'
import Page from '../components/Page'
import { UPDATE_NAV_MODE } from '../libraries/store/actions'

class SignIn extends Component {
    componentDidMount () {
        const { dispatch } = this.props

        dispatch({ type: UPDATE_NAV_MODE, data: false })
    }

    render () {
        return (
            <Page>
                <SignInForm />
            </Page>
        )
    }
}

SignIn.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func
}

export default SignIn

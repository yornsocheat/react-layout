import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import NavItem from './Nav'
import c from '../libraries/constant'
import { UPDATE_NAV_MODE } from '../libraries/store/actions'

class MainNav extends Component {
    render () {
        const { className, navItems, dispatch } = this.props
        return (
            <nav id='main-menu' className={className}>
                <header>
                    <Button onClick={() => dispatch({ type: UPDATE_NAV_MODE, data: false })}>Back</Button>
                </header>
                <NavItem navItems={navItems} />
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item mr-2'>
                        <Link className='btn btn-outline-primary me-3' to={c.uri.signIn}>Sign In</Link>
                        <Link className='btn btn-primary' to={c.uri.signUp}>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

MainNav.propTypes = {
    className: PropTypes.string,
    navItems: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    dispatch: PropTypes.func
}

export default MainNav
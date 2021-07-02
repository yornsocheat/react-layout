import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    const now = new Date()
    const year = now.getFullYear()

    return (
        <footer id='footer'>
            <div className='copyright'>Copyright © 2019 - { year } Medicord</div>
            <div className='terms'>
                <div>Terms</div>
                <div>Privacy</div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Footer
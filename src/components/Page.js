import React from 'react'
import PropTypes from 'prop-types'

const Page = props => {
    return (
        <div className={`col-12 col-lg-10 ms-auto ${props.className}`}>
            {props.children}
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Page
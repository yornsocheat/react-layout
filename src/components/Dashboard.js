import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({ children, className }) => {
    return (
        <div id='flex-dashboard' className={className}>
            {children}
        </div>
    )
}

Dashboard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Dashboard
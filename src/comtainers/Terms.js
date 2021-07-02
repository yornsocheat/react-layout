import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Terms extends Component {
    render () {
        return (
            <div>
                <div className='container-fluid'>
                    Terms
                </div>
            </div>
        )
    }
}

Terms.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func
}

export default Terms

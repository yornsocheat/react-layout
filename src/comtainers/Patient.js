import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Patient extends Component {
    render () {
        return (
            <div>
                <div className='container-fluid'>
                    Patient
                </div>
            </div>
        )
    }
}

Patient.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Patient
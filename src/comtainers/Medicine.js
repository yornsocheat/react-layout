import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Medicine extends Component {
    render () {
        return (
            <div>
                <div className='container-fluid'>
                    Medicine
                </div>
            </div>
        )
    }
}

Medicine.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func
}

export default Medicine
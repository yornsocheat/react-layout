import React from 'react'
import PropTypes from 'prop-types'

const ButtonCollapse = props => {
    return (
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target={`#${props.collapseId}`} aria-controls={props.collapseId} aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>
    )
}

ButtonCollapse.propTypes = {
    collapseId: PropTypes.string
}

export default ButtonCollapse
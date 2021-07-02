import React from 'react'
import PropTypes from 'prop-types'

class NavItem extends React.Component {
    render () {
        const { label, icon, id, handleOnClick } = this.props

        return (
            <div className='navwrap-item' id={id} onClick={handleOnClick}>
                <span className='icon'><i className={`bi bi-${icon}`} /></span>
                <span className='label'>{label}</span>
            </div>
        )
    }
}

NavItem.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.string,
    navLabel: PropTypes.string,
    handleOnClick: PropTypes.func
}

export default NavItem
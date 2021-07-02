import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { UPDATE_NAV_MODE } from '../libraries/store/actions'

class Privacy extends Component {
    componentDidMount () {
        const { dispatch } = this.props

        dispatch({ type: UPDATE_NAV_MODE, data: false })
    }

    render () {
        return (
            <div>
                <div className='container-fluid'>
                Privacy
                </div>
            </div>
        )
    }
}

Privacy.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func
}

export default Privacy

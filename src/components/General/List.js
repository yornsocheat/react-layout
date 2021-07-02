import React from 'react'
import PropTypes from 'prop-types'

class List extends React.Component {
    render () {
        const { data } = this.props

        return data && (
            <div className='list-group m-3'>
                {
                    data.map((value, index) => {
                        return (
                            <div className='list-group-item' key={'lgi-' + index}>
                                {value}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

List.propTypes = {
    data: PropTypes.array
}

export default List
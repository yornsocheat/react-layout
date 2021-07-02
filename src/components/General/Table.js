import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Table extends React.Component {
    renderHeader = () => {
        const { dataBodys, dataHeaders } = this.props
        let theads = dataHeaders

        if (_.isUndefined(theads) && _.isArray(dataBodys)) {
            theads = _.keys(_.take(dataBodys)[0])
        }

        console.log(theads)

        return ! _.isEmpty(theads) && (
            <tr className='table-danger'>
                {theads.map((value, key) => <td key={'thead-th-' + key}>{_.capitalize(value)}</td>)}
            </tr>
        )
    }

    renderBody = () => {
        const { dataBodys } = this.props

        return dataBodys && (
            dataBodys.map((cols, key) => {
                return (
                    <tr key={key}>
                        {
                            _.toArray(cols).map((val, key) => {
                                return (
                                    <td key={'test' + key}>{val}</td>
                                )
                            })
                        }
                    </tr>
                )
            })
        )
    }

    render () {
        const { tableClassName } = this.props

        return (
            <div className='m-3'>
                <table className={`table ${tableClassName}`}>
                    <tbody>
                        {this.renderHeader()}
                        {this.renderBody()}
                    </tbody>
                </table>
            </div>
        )
    }
}

Table.propTypes = {
    tableClassName: PropTypes.string,
    dataHeaders: PropTypes.array,
    dataBodys: PropTypes.array
}

export default Table
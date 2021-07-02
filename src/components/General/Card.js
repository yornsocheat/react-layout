import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
    render () {
        const { cardText, cardImageUrl, cardTitle, cardSubTitle } = this.props

        return (
            <div className='card m-3'>
                {cardImageUrl && <img className='card-img-top' alt={cardTitle} title={cardTitle} src={cardImageUrl} />}
                <div className='card-body'>
                    {cardTitle && <h4 className='card-title'>{cardTitle}</h4>}
                    {cardSubTitle && <h6 className='card-subtitle'>{cardSubTitle}</h6>}
                    <p className='card-text'>{cardText}</p>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cardTitle: PropTypes.string,
    cardSubTitle: PropTypes.string,
    cardText: PropTypes.string,
    cardImageUrl: PropTypes.string
}

export default Card
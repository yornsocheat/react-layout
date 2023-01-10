import React from 'react';
import { trimClassName } from '../../libraries/services/helper';

export const Card = ({ className, cardBodyClassName, cardText, cardImageUrl, cardTitle, cardSubTitle }) => {
	return (
		<div className={trimClassName('card m-3', className)}>
			{cardImageUrl && <img className="card-img-top" alt={cardTitle} title={cardTitle} src={cardImageUrl} />}
			<CardBody className={cardBodyClassName}>
				{cardTitle && <h4 className="card-title">{cardTitle}</h4>}
				{cardSubTitle && <h6 className="card-subtitle">{cardSubTitle}</h6>}
				<p className="card-text">{cardText}</p>
			</CardBody>
		</div>
	);
};

export const CardBody = ({ className, children }) => {
	return <div className={trimClassName('card-body', className)}>{children}</div>;
};

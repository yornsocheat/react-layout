import React from 'react';
import { trimClassName } from '../../libraries/services/helper';

export const Card = ({ className, cardBodyClassName, cardText, cardImageUrl, cardTitle, cardSubTitle, children }) => {
	return (
		<div className={trimClassName('card m-3', className)}>
			{cardImageUrl && <CardImage cardTitle={cardTitle} url={cardImageUrl} />}
			{cardTitle || cardText ? (
				<CardBody className={cardBodyClassName} title={cardTitle} subTitle={cardSubTitle} text={cardText} />
			) : (
				children
			)}
		</div>
	);
};

export const CardImage = ({ cardTitle, url }) => {
	return url && <img className="card-img-top" alt={cardTitle} title={cardTitle} src={url} />;
};

export const CardBody = ({ className, title, subTitle, text }) => {
	return (
		<div className={trimClassName('card-body', className)}>
			{title && <h4 className="card-title">{title}</h4>}
			{subTitle && <h6 className="card-subtitle">{subTitle}</h6>}
			{text && <p className="card-text">{text}</p>}
		</div>
	);
};

import React, { createElement } from 'react';

export const Display = ({ size = 1, children }) => {
	return <div className={`display-${size}`}>{children}</div>;
};

export const Heading1 = ({ tag = 'h1', children }) => {
	const tags = {
		h: <h1>{children}</h1>,
		p: <p className="h1">{children}</p>,
		div: <div className="h1">{children}</div>,
	};
	return tags[tag] || <h1>{children}</h1>;
};

export const Heading = ({ tag = 'h1', className, children }) => {
	return createElement(tag, { className }, children);
};

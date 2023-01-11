import React, { createElement } from 'react';

export const Display = ({ size = 1, children }) => {
	return <div className={`display-${size}`}>{children}</div>;
};

export const Heading = ({ tag = 'h1', className, children }) => {
	return createElement(tag, { className }, children);
};

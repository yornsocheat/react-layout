import React from 'react';
import { trimClassName } from '../../libraries/services/helper';

export const ListGroup = ({ className, data, children }) => {
	const renderData = (data) => {
		return (
			data &&
			data.isArray() &&
			data.map((value, index) => {
				return (
					<div className="list-group-item" key={'lgi-' + index}>
						{value}
					</div>
				);
			})
		);
	};

	return <div className={trimClassName('list-group m-3', className)}>{renderData(data) || children}</div>;
};

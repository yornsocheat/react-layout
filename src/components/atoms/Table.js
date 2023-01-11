import React from 'react';
import _ from 'lodash';

export const Table = ({ dataBodys, dataHeaders, tableClassName }) => {
	const renderHeader = () => {
		let theads = dataHeaders;

		if (_.isUndefined(theads) && _.isArray(dataBodys)) {
			theads = _.keys(_.take(dataBodys)[0]);
		}

		return (
			!_.isEmpty(theads) && (
				<tr className="table-danger">
					{theads.map((value, key) => (
						<td key={'thead-th-' + key}>{_.capitalize(value)}</td>
					))}
				</tr>
			)
		);
	};

	const renderBody = () => {
		return (
			dataBodys &&
			dataBodys.map((cols, key) => {
				return (
					<tr key={key}>
						{_.toArray(cols).map((val, key) => {
							return <td key={'test' + key}>{val}</td>;
						})}
					</tr>
				);
			})
		);
	};

	return (
		<div className="m-3">
			<table className={`table ${tableClassName}`}>
				<tbody>
					{renderHeader()}
					{renderBody()}
				</tbody>
			</table>
		</div>
	);
};

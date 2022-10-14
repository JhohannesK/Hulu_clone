import React from 'react';
import Thumbnail from './Thumbnail';

const Results = ({ results }) => {
	return (
		<div>
			{results.map((items) => {
				return <Thumbnail key={items.id} result={items} />;
			})}
		</div>
	);
};

export default Results;

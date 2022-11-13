import React from 'react';
import Thumbnail from './Thumbnail';

interface ResultsProps {
	results: Array<{
		adult: boolean;
		backdrop_path: string;
		genre_ids: number[];
		id: number;
		media_type: string;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: number;
		poster_path: string;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
		original_name?: string;
	}>;
}

const Results = ({ results }: ResultsProps) => {
	return (
		<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-5 space-x-3 p-3 md:p-5'>
			{results.map((items) => {
				return <Thumbnail key={items.id} result={items} />;
			})}
		</div>
	);
};

export default Results;

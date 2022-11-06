import React from 'react';
import { RequestProps } from '../pages';
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
	}>;
}

const Results = ({ results }: ResultsProps) => {
	console.log(results);
	return (
		<div>
			{results.map((items) => {
				return <Thumbnail key={items.id} result={items} />;
			})}
		</div>
	);
};

export default Results;

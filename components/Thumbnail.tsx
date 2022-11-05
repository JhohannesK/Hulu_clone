import React from 'react';
import Image from 'next/image';

const Thumbnail = ({ result }) => {
	const base_url = 'https://image.tmdb.org/t/p/w400/';
	return (
		<div>
			<Image
				src={`${base_url}
		${result.backdrop_path || result.poster_path}`}
				alt={result.title}
				width={1080}
				height={500}
			/>
			<h1>{result.title}</h1>
			<div>{result.overview}</div>
		</div>
	);
};

export default Thumbnail;

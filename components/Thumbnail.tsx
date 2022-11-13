import React from 'react';
import Image from 'next/image';
import { RequestProps } from './_shared/types';

interface ThumbnailProps {
	result: RequestProps;
}

const Thumbnail = ({ result }: ThumbnailProps) => {
	const [display, setDisplay] = React.useState(false);
	const base_url = 'https://image.tmdb.org/t/p/w400/';
	return (
		<div>
			<Image
				src={`${base_url}
		${result.backdrop_path || result.poster_path}`}
				alt={result.title}
				width={1080}
				height={500}
				className='rounded-2xl hover:scale-105 transition duration-200 ease-in-out transform cursor-pointer'
			/>
			<h1 className='text-xl bold'>
				{result.title || result.original_name || result.original_title}
			</h1>
			<div
				className={
					display
						? ' transition-all duration-500'
						: 'truncate text-gray-500' +
						  ' transition-all duration-500 cursor-pointer'
				}
				// onClick={() => setDisplay(!display)}
			>
				{result.overview}
			</div>
		</div>
	);
};

export default Thumbnail;

import Image from 'next/image';
import HeaderItems from './HeaderItems';
import {
	HomeIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

const Headers = () => {
	return (
		<header className='flex flex-col sm:flex-row m-5 items-center justify-between h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				<HeaderItems title={'Home'} Icon={HomeIcon} />
				<HeaderItems title={'Trending'} Icon={LightningBoltIcon} />
				<HeaderItems title={'verified'} Icon={BadgeCheckIcon} />
				<HeaderItems title={'collection'} Icon={CollectionIcon} />
				<HeaderItems title={'search'} Icon={SearchIcon} />
				<HeaderItems title={'user'} Icon={UserIcon} />
			</div>
			<Image
				className='object-contain'
				src='https://links.papareact.com/ua6'
				width={200}
				height={100}
				alt='logo'
			/>
		</header>
	);
};

export default Headers;

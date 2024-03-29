interface HeaderItemsProps {
	title: string;
	Icon: any;
}

const HeaderItems: React.FC<HeaderItemsProps> = ({ title, Icon }) => {
	return (
		<div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white uppercase'>
			<Icon className='h-8 mt-4 group-hover:animate-bounce' />
			<p className='opacity-0 group-hover:opacity-100 tracking-widest'>
				{title}
			</p>
		</div>
	);
};

export default HeaderItems;

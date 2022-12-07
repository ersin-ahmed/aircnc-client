import Image from 'next/image';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import postStore from '../store/postStore';

export default function Card() {
	const store = postStore();
	const cardData = {
		imgUrl: '/images/cardimg.webp',
		// cardLocation: 'Stola, Slovakia',
		cardLocation: store.postData[0].location,
		// forDates: 'Dec 7-12',
		forDates: store.postData[0].availability,
		// price: '$86',
		price: `${store.postData[0].price}$`,
	};
	const images = [
		'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
		'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
		'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
	];

	const properties = {
		prevArrow: (
			<button className='text-transparent group-hover:text-white transition-all p-1 z-10'>
				<IoIosArrowDropleft size={35} />
			</button>
		),
		nextArrow: (
			<button className='text-transparent group-hover:text-white transition-all p-1'>
				<IoIosArrowDropright size={35} />
			</button>
		),
	};

	return (
		<div className='my-8'>
			<div className='pb-2 slide-container group'>
				{/* <Image
					className='rounded-xl h-[26vh] w-full object-cover shadow-md'
					src={cardData.imgUrl}
					width='700'
					height='600'
					alt='cardimg'
				/> */}
				<Fade
					{...properties}
					transitionDuration={600}
					indicators
					autoplay={false}
				>
					<div className='each-fade'>
						<div
							className='h-[27vh] rounded-xl'
							style={{
								backgroundImage: `url(${images[0]})`,
								backgroundSize: 'cover',
							}}
						></div>
					</div>
					<div className='each-fade'>
						<div
							className='h-[27vh] rounded-xl'
							style={{
								backgroundImage: `url(${images[1]})`,
								backgroundSize: 'cover',
							}}
						></div>
					</div>
					<div className='each-fade'>
						<div
							className='h-[27vh] rounded-xl'
							style={{
								backgroundImage: `url(${images[2]})`,
								backgroundSize: 'cover',
							}}
						></div>
					</div>
				</Fade>
			</div>
			<div className='flex justify-between items-center'>
				<h2 className='font-semibold'>{cardData.cardLocation}</h2>
				<span className='flex items-center gap-2'>
					<AiFillStar /> 4.84
				</span>
			</div>
			<h3 className='text-slate-400'>{cardData.forDates}</h3>
			<div className='flex justify-between items-center'>
				<h4>
					<span className='font-semibold'>{cardData.price}</span> a night
				</h4>
				<span className='pr-1'>
					<AiOutlineHeart size={20} />
				</span>
			</div>
		</div>
	);
}

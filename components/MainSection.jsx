import Card from './Card';
import postStore from '../store/postStore';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { Fade } from 'react-slideshow-image';
import Link from 'next/link';
import 'react-slideshow-image/dist/styles.css';
export default function MainSection() {
	const store = postStore();
	// console.log(store.postData[0].images);
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
		<section className='px-2 pt-12 flex flex-col justify-center items-center bg-slate-50'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-1 md:px-20 py-8'>
				{store.postData.map((post) => (
					<div
						key={post._id}
						className='my-4 pb-10 border-b-2 border-slate-300'
					>
						<div key={post._id} className='pb-2 slide-container group'>
							<Fade
								{...properties}
								transitionDuration={600}
								indicators
								autoplay={false}
							>
								{post.images.map((image) => (
									<div key={post._id} className='each-fade'>
										<div
											className='h-[27vh] rounded-xl'
											style={{
												backgroundImage: `url(${image.url})`,
												backgroundSize: 'cover',
											}}
										></div>
									</div>
								))}
							</Fade>
						</div>
						<Link href='/underdevelopment'>
							<div className='flex justify-between items-center'>
								<h2 className='font-semibold'>{post.location}</h2>
								<span className='flex items-center gap-2'>
									<AiFillStar /> 4.84
								</span>
							</div>
							<h3 className='text-slate-400'>{post.availability}</h3>
							<div className='flex justify-between items-center'>
								<h4>
									<span className='font-semibold'>{post.price}</span> a night
								</h4>
								<span className='pr-1'>
									<AiOutlineHeart size={20} />
								</span>
							</div>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}

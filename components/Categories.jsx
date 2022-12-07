import Link from 'next/link';
import { MdCabin } from 'react-icons/md';
import { FaMountain, FaSkiing, FaHotel, FaBars, FaTimes } from 'react-icons/fa';
import { GiPalmTree, GiIsland } from 'react-icons/gi';
import { TbBuildingCastle, TbBeach } from 'react-icons/tb';
import { useState } from 'react';

export default function Categories() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<nav className='fixed z-50 top-16 flex justify-center items-center h-16 w-full p-2 bg-slate-100 border-b'>
			<ul className='hidden md:flex justify-center items-center text-rose-500'>
				<Link href='/underdevelopment' className='flex items-center mx-6'>
					<li className='flex flex-col items-center'>
						<MdCabin size={25} />
						<span className='font-semibold text-xs text-rose-500'>Cabins</span>
					</li>
				</Link>
				<Link href='/underdevelopment' className='flex items-center mx-6'>
					<li className='flex flex-col items-center'>
						<FaMountain size={25} />
						<span className='font-semibold text-xs text-rose-500'>
							Top of the world
						</span>
					</li>
				</Link>
				<Link href='/underdevelopment' className='flex items-center mx-6'>
					<li className='flex flex-col items-center'>
						<FaSkiing size={25} />
						<span className='font-semibold text-xs text-rose-500'>
							Ski-in/out
						</span>
					</li>
				</Link>
				<Link href='/underdevelopment' className='flex items-center mx-6'>
					<li className='flex flex-col items-center'>
						<FaHotel size={25} />
						<span className='font-semibold text-xs text-rose-500'>Luxe</span>
					</li>
				</Link>
				<Link href='/underdevelopment' className='flex items-center mx-6'>
					<li className='flex flex-col items-center'>
						<GiPalmTree size={25} />
						<span className='font-semibold text-xs text-rose-500'>
							Tropical
						</span>
					</li>
				</Link>
				<Link href='/underdevelopment' className='flex items-center mx-6'>
					<li className='flex flex-col items-center'>
						<GiIsland size={25} />
						<span className='font-semibold text-xs text-rose-500'>Islands</span>
					</li>
				</Link>
				<Link href='/underdevelopment' className='flex items-center mx-6'>
					<li className='flex flex-col items-center'>
						<TbBuildingCastle size={25} />
						<span className='font-semibold text-xs text-rose-500'>Castles</span>
					</li>
				</Link>
				<Link href='/underdevelopment' className='flex items-center mx-6'>
					<li className='flex flex-col items-center'>
						<TbBeach size={25} />
						<span className='font-semibold text-xs text-rose-500'>
							Beachfront
						</span>
					</li>
				</Link>
			</ul>
			{/* Hamburger Menu */}
			<div onClick={handleClick} className='md:hidden z-10 text-rose-600'>
				{!nav ? (
					<div className='flex justify-center items-center gap-4'>
						<p className='font-bold text-2xl pb-2'>Categories</p>{' '}
						<FaBars size={25} />
					</div>
				) : (
					<div className='flex justify-center items-center gap-4'>
						<p className='font-bold text-2xl pb-2'>Categories</p>{' '}
						<FaTimes size={25} />
					</div>
				)}
			</div>
			{/* Mobile Menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute flex flex-col justify-start items-center top-16 left-0 w-full h-screen font-bold text-rose-500 bg-slate-100'
				}
			>
				<Link href='underdevelopment'>
					<li className='flex justify-center items-center gap-2 py-2 my-2 text-2xl border-b-2 border-rose-200'>
						<MdCabin size={30} />
						<span className='font-semibold text-rose-500'>Cabins</span>
					</li>
				</Link>
				<Link href='underdevelopment'>
					<li className='flex justify-center items-center gap-2 py-2 my-2 text-2xl border-b-2 border-rose-200'>
						<FaMountain size={30} />
						<span className='font-semibold text-rose-500'>
							Top of the world
						</span>
					</li>
				</Link>
				<Link href='underdevelopment'>
					<li className='flex justify-center items-center gap-2 py-2 my-2 text-2xl border-b-2 border-rose-200'>
						<FaSkiing size={30} />
						<span className='font-semibold text-rose-500'>Ski-in/out</span>
					</li>
				</Link>
				<Link href='underdevelopment'>
					<li className='flex justify-center items-center gap-2 py-2 my-2 text-2xl border-b-2 border-rose-200'>
						<FaHotel size={30} />
						<span className='font-semibold text-rose-500'>Luxe</span>
					</li>
				</Link>
				<Link href='underdevelopment'>
					<li className='flex justify-center items-center gap-2 py-2 my-2 text-2xl border-b-2 border-rose-200'>
						<GiPalmTree size={30} />
						<span className='font-semibold text-rose-500'>Tropical</span>
					</li>
				</Link>
				<Link href='underdevelopment'>
					<li className='flex justify-center items-center gap-2 py-2 my-2 text-2xl border-b-2 border-rose-200'>
						<GiIsland size={30} />
						<span className='font-semibold text-rose-500'>Islands</span>
					</li>
				</Link>
				<Link href='underdevelopment'>
					<li className='flex justify-center items-center gap-2 py-2 my-2 text-2xl border-b-2 border-rose-200'>
						<TbBuildingCastle size={30} />
						<span className='font-semibold text-rose-500'>Castles</span>
					</li>
				</Link>
				<Link href='underdevelopment'>
					<li className='flex justify-center items-center gap-2 py-2 my-2 text-2xl border-b-2 border-rose-200'>
						<TbBeach size={30} />
						<span className='font-semibold text-rose-500'>Beachfront</span>
					</li>
				</Link>
			</ul>
		</nav>
	);
}

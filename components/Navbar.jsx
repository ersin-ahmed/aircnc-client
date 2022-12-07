import authStore from '../store/authStore';
import { FaAirbnb } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [user, setUser] = useState(false);
	const store = authStore();

	return (
		<nav className='z-40 sticky top-0 bg-slate-100 flex justify-between items-center h-16 w-full p-2 border-b'>
			<Link href='/' className='flex items-center m-2 z-50'>
				<FaAirbnb size={40} className='rotate-180 text-rose-500' />
				<h1 className='font-bold text-rose-500 text-2xl p-1'>aircnc</h1>
			</Link>
			<ul className='flex items-center p-1 gap-1 font-semibold text-rose-500'>
				<li className='px-1 border-r-2 border-slate-300'>
					{store.isLoggedIn ? (
						<Link href='/underdevelopment'>Aircnc your home</Link>
					) : (
						<Link href='/login'>Aircnc your home</Link>
					)}
				</li>
				{store.isLoggedIn ? (
					<Link onClick={store.logout} href='/'>
						<li>Log Out</li>
					</Link>
				) : (
					<>
						<Link href='/login'>
							<li>Log In</li>
						</Link>

						<Link href='/register'>
							<li>Register</li>
						</Link>
					</>
				)}
			</ul>
		</nav>
	);
}

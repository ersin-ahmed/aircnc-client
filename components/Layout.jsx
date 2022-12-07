import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
}

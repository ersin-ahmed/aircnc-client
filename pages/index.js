import { useEffect } from 'react';
import Categories from '../components/Categories';
import MainSection from '../components/MainSection';
import postStore from '../store/postStore';
import Head from 'next/head';

const Page = () => {
	const store = postStore();
	useEffect(() => {
		store.setPostData();
	}, []);
	return (
		<>
			<Head>
				<title>Aircnc | Airbnb Clone</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Categories />
			<MainSection />
		</>
	);
};

export default Page;

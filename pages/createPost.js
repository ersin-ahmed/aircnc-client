import CreatePost from '../components/CreatePost';
import Head from 'next/head';

export default function CreatePostPage() {
	return (
		<>
			<Head>
				<title>Add your Home</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<CreatePost />
		</>
	);
}

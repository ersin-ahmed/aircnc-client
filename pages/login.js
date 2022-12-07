import Login from '../components/Login';
import Head from 'next/head';

export default function LoginPage() {
	return (
		<>
			<Head>
				<title>Login to Aircnc</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Login />
		</>
	);
}

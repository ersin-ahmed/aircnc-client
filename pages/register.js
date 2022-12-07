import Register from '../components/Register';
import Head from 'next/head';

export default function RegisterPage() {
	return (
		<>
			<Head>
				<title>Register an account on Aircnc</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Register />
		</>
	);
}

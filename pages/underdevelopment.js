import Head from 'next/head';

export default function Underdevelopment() {
	return (
		<>
			<Head>
				<title>Under Development</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='w-full h-[60vh] flex justify-center items-center '>
				<div className='bg-amber-100 w-[90vw] md:w-[50vw] h-[50vh] md:h-[20vw] flex justify-center items-center text-center rounded-xl shadow-lg'>
					<h1 className='font-bold text-4xl'>Under Development!</h1>
				</div>
			</div>
		</>
	);
}

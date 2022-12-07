import { useForm } from 'react-hook-form';
import { BiHotel } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/router';
import authStore from '../store/authStore';

export default function CreatePost() {
	const store = authStore();
	const router = useRouter();
	const { register, handleSubmit } = useForm();
	const onSubmit = async (data) => {
		const formData = new FormData();
		for (let i = 0; i < data.image.length; i++) {
			formData.append('image', data.image[i]);
		}
		formData.append('location', data.location);
		formData.append('availability', data.availability);
		formData.append('price', data.price);
		formData.append('category', data.category);
		// formData.append('user', userId);
		// formData.append('postedBy', username);
		// formData.append('image', data.image[0]);
		const token = localStorage.getItem('token').replace(/"/g, '');
		const res = await fetch('https://aircnc-api-2ne5.onrender.com/api/posts', {
			method: 'POST',
			body: formData,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => res.json());
		// alert(JSON.stringify(`${res.message}, status: ${res.status}`));

		store.reset();
		router.push('/');
	};
	return (
		<div className='flex flex-col justify-center items-center pt-14'>
			<section className='w-full max-w-sm text-center m-8'>
				<h1 className='flex flex-col justify-center items-center m-2 text-xl font-semibold'>
					<BiHotel /> Add Your Place On Aircnc
				</h1>
			</section>
			<section className='w-full max-w-sm'>
				<form
					name='image'
					onSubmit={handleSubmit(onSubmit)}
					className='bg-slate-100 shadow-md rounded-md px-8 pt-6 pb-8 mb-4'
				>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='location'
						>
							Location
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							placeholder='Enter the Location of Your Place'
							name='location'
							{...register('location')}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='availability'
						>
							Availability
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							placeholder='Enter the Available Dates'
							name='availability'
							{...register('availability')}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='price'
						>
							Price / A Night
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							placeholder='Enter The Price for a Night'
							name='price'
							{...register('price')}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='image'
						>
							Upload Images
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='file'
							name='image'
							multiple={true}
							{...register('image')}
						/>
					</div>
					<h3 className='text-gray-700 text-sm font-bold mb-2'>
						Choose Category
					</h3>
					<ul className='w-full mx-auto text-sm font-medium text-gray-900 bg-slate-50 rounded-lg broder border-gray-200 shadow-xl'>
						<li className='w-full rounded-t-lg border-b border-gray-200'>
							<div className='flex items-center pl-3'>
								<input
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									type='radio'
									name='cabin'
									id='cabin'
									value='cabin'
									{...register('category')}
								/>
								<label
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900'
									htmlFor='cabin'
								>
									Cabin
								</label>
							</div>
						</li>
						<li className='w-full rounded-t-lg border-b border-gray-200'>
							<div className='flex items-center pl-3'>
								<input
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									type='radio'
									name='mountainresort'
									id='mountainresort'
									value='mountainresort'
									{...register('category')}
								/>
								<label
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900'
									htmlFor='mountainresort'
								>
									Mountain Resort
								</label>
							</div>
						</li>
						<li className='w-full rounded-t-lg border-b border-gray-200'>
							<div className='flex items-center pl-3'>
								<input
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									type='radio'
									name='skiresort'
									id='skiresort'
									value='skiresort'
									{...register('category')}
								/>
								<label
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900'
									htmlFor='skiresort'
								>
									Ski Resort
								</label>
							</div>
						</li>
						<li className='w-full rounded-t-lg border-b border-gray-200'>
							<div className='flex items-center pl-3'>
								<input
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									type='radio'
									name='luxuryhotel'
									id='luxuryhotel'
									value='luxuryhotel'
									{...register('category')}
								/>
								<label
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900'
									htmlFor='luxuryhotel'
								>
									Luxury Hotel
								</label>
							</div>
						</li>
						<li className='w-full rounded-t-lg border-b border-gray-200'>
							<div className='flex items-center pl-3'>
								<input
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									type='radio'
									name='tropicalresort'
									id='tropicalresort'
									value='tropicalresort'
									{...register('category')}
								/>
								<label
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900'
									htmlFor='tropicalresort'
								>
									Tropical Resort
								</label>
							</div>
						</li>
						<li className='w-full rounded-t-lg border-b border-gray-200'>
							<div className='flex items-center pl-3'>
								<input
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									type='radio'
									name='privateisland'
									id='privateisland'
									value='privateisland'
									{...register('category')}
								/>
								<label
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900'
									htmlFor='privateisland'
								>
									Private Island
								</label>
							</div>
						</li>
						<li className='w-full rounded-t-lg border-b border-gray-200'>
							<div className='flex items-center pl-3'>
								<input
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									type='radio'
									name='castle'
									id='castle'
									value='castle'
									{...register('category')}
								/>
								<label
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900'
									htmlFor='castle'
								>
									Castle
								</label>
							</div>
						</li>
						<li className='w-full rounded-b-lg border-b border-gray-200'>
							<div className='flex items-center pl-3'>
								<input
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									type='radio'
									name='beachfrontproperty'
									id='beachfrontproperty'
									value='beachfrontproperty'
									{...register('category')}
								/>
								<label
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900'
									htmlFor='beachfrontproperty'
								>
									Beachfront Property
								</label>
							</div>
						</li>
					</ul>

					<div className='pt-4 flex justify-center'>
						<input
							className='cursor-pointer bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline" type="button'
							type='submit'
							value='Add'
							onClick={store.loading}
						/>
					</div>
					{store.isLoading && (
						<div className='flex justify-center pt-4'>
							<CgSpinner size={30} className='animate-spin' />
						</div>
					)}
				</form>
			</section>
		</div>
	);
}

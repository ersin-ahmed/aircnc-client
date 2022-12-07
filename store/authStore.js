import create from 'zustand';
import axios from 'axios';

function getUser() {
	if (typeof window !== 'undefined') {
		// Perform localStorage action
		const item = localStorage.getItem('key');
		return item;
	}
}

const user = getUser();

const authStore = create((set) => ({
	user: user ? user : null,
	isLoading: false,
	message: '',

	isLoggedIn: user ? false : true,

	userData: {
		username: '',
		email: '',
		password: '',
	},

	loginData: {
		email: '',
		password: '',
	},

	// Set userData state from Register Form
	setUserData: (e) => {
		const { name, value } = e.target;
		set((state) => {
			return {
				userData: {
					...state.userData,
					[name]: value,
				},
			};
		});
	},

	// Set loginData state from Login From
	setLoginData: (e) => {
		const { name, value } = e.target;
		set((state) => {
			return {
				loginData: {
					...state.loginData,
					[name]: value,
				},
			};
		});
	},

	// Register user
	register: async () => {
		try {
			const { userData } = authStore.getState();
			// const response = await axios.post(
			// 	'http://localhost:4000/api/users/',
			// 	userData
			// );
			const response = await axios.post(
				'https://aircnc-api-2ne5.onrender.com/api/users/',
				userData
			);
			set({
				user: response.data.username,
				userData: {
					username: '',
					email: '',
					password: '',
				},
				message: '',
			});
			if (response.data) {
				localStorage.setItem('user', JSON.stringify(response.data));
				localStorage.setItem(
					'username',
					JSON.stringify(response.data.username)
				);
				localStorage.setItem('email', JSON.stringify(response.data.email));
				localStorage.setItem('id', JSON.stringify(response.data._id));
				localStorage.setItem('token', JSON.stringify(response.data.token));
			}
		} catch (error) {
			console.log(error);
			set({
				userData: {
					username: '',
					email: '',
					password: '',
				},
				message:
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString(),
			});
		}
	},

	login: async () => {
		try {
			const { loginData } = authStore.getState();
			// const response = await axios.post(
			// 	`http://localhost:4000/api/users/login`,
			// 	loginData
			// );
			const response = await axios.post(
				`https://aircnc-api-2ne5.onrender.com/api/users/login`,
				loginData
			);
			set({
				user: response.data.username,
				loginData: {
					email: '',
					password: '',
				},
				isLoggedIn: true,
			});
			if (response.data) {
				localStorage.setItem('user', JSON.stringify(response.data));
				localStorage.setItem(
					'username',
					JSON.stringify(response.data.username)
				);
				localStorage.setItem('email', JSON.stringify(response.data.email));
				localStorage.setItem('id', JSON.stringify(response.data._id));
				localStorage.setItem('token', JSON.stringify(response.data.token));
			}
		} catch (error) {
			console.log(error);
			set({
				loginData: {
					email: '',
					password: '',
				},
				message:
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString(),
			});
		}
	},
	// Log user out
	logout: () => {
		set({
			user: '',
			loginData: {
				email: '',
				password: '',
			},
			isLoading: false,
			isLoggedIn: false,
		});
		localStorage.removeItem('user');
		localStorage.removeItem('username');
		localStorage.removeItem('email');
		localStorage.removeItem('id');
		localStorage.removeItem('token');
	},
	reset: () => {
		set({
			isError: false,
			isSuccess: false,
			isLoading: false,
			message: '',
		});
	},

	loading: () => {
		set({
			isLoading: true,
		});
	},
}));

export default authStore;

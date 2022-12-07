import create from 'zustand';

const postStore = create((set) => ({
	postData: [],

	setPostData: async () => {
		// const res = await fetch(`http://localhost:4000/api/posts/all`);
		const res = await fetch(
			`https://aircnc-api-2ne5.onrender.com/api/posts/all`
		);
		const posts = await res.json();
		console.log({ posts });
		set({
			postData: [...posts],
		});
	},
}));

export default postStore;

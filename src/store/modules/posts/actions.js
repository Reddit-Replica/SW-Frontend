export default {
	async hide(_, payload) {
		const hide = {
			id: payload.id,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/hide', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(hide),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},

	async createPost(/*context, payload*/) {
		// 	const userInfo = {
		// 	};
		// 	const baseurl = payload.baseurl;
		// 	const response = await fetch(baseurl + '/login/forget-password', {
		// 		method: 'POST',
		// 		headers: { 'Content-Type': 'application/json' },
		// 		body: JSON.stringify(userInfo),
		// 	});
		// 	const responseData = await response.json();
		// 	if (response.status == 200) {
		// 		localStorage.setItem('response', response.status);
		// 		console.log(response);
		// 	} else if (response.status == 400) {
		// 		const error = new Error(responseData.error);
		// 		throw error;
		// 	} else {
		// 		const error = new Error('server error');
		// 		throw error;
		// 	}
	},
};

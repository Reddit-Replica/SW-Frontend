export default {
	async getUserData(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + `/user`);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		context.commit('setUserData', {
			responseData,
			responseStatus: response.status,
		});
	},
	async AddNewSocialLink(context, payload) {
		const newSocialLink = payload.newSocialLink;
		// const baseurl = payload.baseurl;
		// const response = await fetch(baseurl + `/user`);
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to fetch User Data!'
		// 	);
		// 	throw error;
		// }

		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/social-link', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newSocialLink),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}

		context.commit('addUserSocialLink', {
			newSocialLink,
		});
	},
};

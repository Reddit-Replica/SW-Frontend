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
};

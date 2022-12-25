export default {
	/**
	 * Make a request to get user posts data,
	 * @action getUserPostData=setUserPostData
	 * @param {object} payload An object contains baseurl and user name.
	 * @returns {integer} return status Code
	 */
	async getUserPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/posts`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// 	limit: `${payload.params.limit}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// ?sort=new&time=all&before=&after=&limit=10
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/posts?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get more user posts data,
	 * @action getUserMorePostData=setUserMorePostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserMorePostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/posts`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			`${baseurl}+/user/${payload.userName}/posts?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserMorePostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get  user pinned posts data,
	 * @action getUserPinnedPostData=setUserPinnedPostData
	 * @param {object} payload An object contains baseurl and user name.
	 * @returns {integer} return status Code
	 */
	async getUserPinnedPostData(context, payload) {
		const baseurl = payload.baseurl;
		// //console.log('pinned-post-body', payload.body);
		// let url = new URL(baseurl + `/pinned-posts`);
		// let params = {
		// 	username: payload.body.username,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		//console.log('stst');
		const response = await fetch(
			baseurl + `/pinned-posts?username=${payload.body.username}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
			// console.log(error);
		}
		//console.log('getUserPinnedPostData', responseData);
		if (response.status == 200)
			context.commit('setUserPinnedPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get overview posts data,
	 * @action getUserOverviewData=setUserOverviewData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserOverviewData(context, payload) {
		//console.log('overvie Actions');

		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/overview`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// 	limit: payload.params.limit,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// //console.log(url);
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/overview?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log('overvie Actions', responseData);
		if (response.status == 200)
			context.commit('setUserOverviewData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get more overview posts data,
	 * @action getUserMoreOverviewData=setUserMoreOverviewData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserMoreOverviewData(context, payload) {
		//console.log('overvie Actions');

		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/overview`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// 	limit: payload.params.limit,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/overview?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log('overvie Actions', responseData);
		if (response.status == 200)
			context.commit('setUserMoreOverviewData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get  saved posts data,
	 * @action getUserSavedData=setUserOverviewData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserSavedData(context, payload) {
		//console.log('overvie Actions');

		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/saved`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/saved?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log('saved Actions', responseData);
		if (response.status == 200)
			context.commit('setUserOverviewData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get more saved posts data,
	 * @action getUserMoreSavedData=setUserMoreOverviewData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserMoreSavedData(context, payload) {
		//console.log('overvie Actions');

		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/saved`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/saved?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log('saved Actions', responseData);
		if (response.status == 200)
			context.commit('setUserMoreOverviewData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get history posts data,
	 * @action getUserHistoryPostData=setUserPostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserHistoryPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/history`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/history?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get more history posts data,
	 * @action getUserMoreHistoryPostData=setUserMorePostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserMoreHistoryPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/history`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/history?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserMorePostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get upvoted posts data,
	 * @action getUserUpVotedPostData=setUserMorePostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserUpVotedPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/upvoted`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/upvoted?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get more upvoted posts data,
	 * @action getUserMoreUpVotedPostData=setUserMorePostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserMoreUpVotedPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/upvoted`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// 	limit: `${payload.params.limit}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/upvoted?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserMorePostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get  downvoted posts data,
	 * @action getUserDownVotedPostData=setUserPostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserDownVotedPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/downvoted`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/downvoted?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get more downvoted posts data,
	 * @action getUserMoreDownVotedPostData=setUserMorePostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserMoreDownVotedPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/downvoted`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// 	limit: `${payload.params.limit}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/downvoted?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserMorePostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get  hidden posts data,
	 * @action getUserHiddenPostData=setUserPostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserHiddenPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/hidden`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/hidden?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get more hidden posts data,
	 * @action getUserMoreHiddenPostData=setMoreUserPostData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserMoreHiddenPostData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/hidden`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// 	limit: `${payload.params.limit}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/userpostdata`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/hidden?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		//console.log(responseData);
		if (response.status == 200)
			context.commit('setMoreUserPostData', {
				responseData,
				responseStatus: response.status,
			});
		return response.status;
	},
	/**
	 * Make a request to get User Comments Data data,
	 * @action getUserCommentsData=setUserCommentsData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserCommentsData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/comments`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/user-comments`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/comments?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		// if (response.status == 200)
		context.commit('setUserCommentsData', {
			responseData,
			responseStatus: response.status,
		});
		return response.status;
	},
	/**
	 * Make a request to  get User More Comments Data,
	 * @action getUserMoreCommentsData=setUserMoreCommentsData
	 * @param {object} payload An object contains baseurl and user name and query parameters sort,time,before,after,limit.
	 * @returns {integer} return status Code
	 */
	async getUserMoreCommentsData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/user/${payload.userName}/comments`);
		// let params = {
		// 	sort: `${payload.params.sort}`,
		// 	time: `${payload.params.time}`,
		// 	before: `${payload.params.before}`,
		// 	after: `${payload.params.after}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/user-comments`); // mock server
		const response = await fetch(
			baseurl +
				`/user/${payload.userName}/comments?sort=${payload.params.sort}&time=${payload.params.time}&before=${payload.params.before}&after=${payload.params.after}&limit=${payload.params.limit}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		// if (response.status == 200)
		context.commit('setUserMoreCommentsData', {
			responseData,
			responseStatus: response.status,
		});
		return response.status;
	},
	/**
	 * Make a request to get Insights Data,
	 * @action getInsightsData=setInsightsData
	 * @param {object} payload An object contains baseurl and user name.
	 * @returns {integer} return status Code
	 */
	async getInsightsData(context, payload) {
		const baseurl = payload.baseurl;
		// let url = new URL(baseurl + `/post-insights`);
		// let params = {
		// 	id: `${payload.params.id}`,
		// };
		// Object.keys(params).forEach((key) =>
		// 	url.searchParams.append(key, params[key])
		// );
		// const response = await fetch(baseurl + `/post-insights`); // mock server
		const response = await fetch(
			baseurl + `/post-insights?id=${payload.params.id}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		); // API
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to fetch User Data!'
			);
			throw error;
		}
		if (response.status == 200)
			context.commit('setInsightsData', {
				responseData,
			});
		return responseData;
	},
	/**
	 * Make a request to approve Post Or Comment,
	 * @action approvePostOrComment=ApprovePostOrComment || ApprovePostOverview || ApproveCommentOverview
	 * @param {object} payload An object contains baseurl ,ApprovePostOrCommentData type post or comment and id of the post,username,page String overview or '' .
	 * @returns {integer} return status Code
	 */
	async approvePostOrComment(context, payload) {
		const ApprovePostOrCommentData = payload.ApprovePostOrCommentData; // id ,type
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/approve', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(ApprovePostOrCommentData),
		});
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		//console.log('commit');
		if (response.status == 200) {
			if (ApprovePostOrCommentData.type == 'post') {
				if (payload.page != 'overview')
					context.commit('ApprovePostOrComment', {
						ApprovePostOrCommentData,
					});
				else
					context.commit('ApprovePostOverview', {
						ApprovePostOrCommentData,
					});
			} else if (ApprovePostOrCommentData.type == 'comment') {
				context.commit('ApproveCommentOverview', {
					ApprovePostOrCommentData,
				});
			}
		}
		return response.status;
	},
	/**
	 * Make a request to remove Post Or Comment,
	 * @action removePostOrComment=removePostOrComment || removePostOverview
	 * @param {object} payload An object contains baseurl ,removePostOrCommentData type post or comment and id of the post , page String 'overview' or '' .
	 * @returns {integer} return status Code
	 */
	async removePostOrComment(context, payload) {
		const removePostOrCommentData = payload.removePostOrCommentData; // id ,type
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/remove', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(removePostOrCommentData),
		});
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		if (response.status == 200 && removePostOrCommentData.type == 'post')
			if (payload.page != 'overview')
				context.commit('removePostOrComment', {
					removePostOrCommentData,
				});
			else
				context.commit('removePostOverview', {
					removePostOrCommentData,
				});
		return response.status;
	},
	/**
	 * Make a request to save Post Or CommentData,
	 * @action savePostOrComment
	 * @param {object} payload An object contains baseurl ,savePostOrCommentData type post or comment and id of the post .
	 * @returns {integer} return status Code
	 */
	async savePostOrComment(context, payload) {
		const savePostOrCommentData = payload.savePostOrCommentData; // id ,type
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/save', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(savePostOrCommentData),
		});
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		// if (response.status == 200)
		// 	context.commit('rPostOrComment', {
		// 		removePostOrCommentData,
		// 	});
		return response.status;
	},
	/**
	 * Make a request to unsave Post Or CommentData,
	 * @action unSavePostOrComment
	 * @param {object} payload An object contains baseurl ,savePostOrCommentData type post or comment and id of the post .
	 * @returns {integer} return status Code
	 */
	async unSavePostOrComment(context, payload) {
		const savePostOrCommentData = payload.savePostOrCommentData; // id ,type
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/unsave', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(savePostOrCommentData),
		});
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		// if (response.status == 200)
		// 	context.commit('rPostOrComment', {
		// 		removePostOrCommentData,
		// 	});
		return response.status;
	},
	/**
	 * Make a request to lock UnLock Post Or Comment,
	 * @action lockUnLockPostOrComment=lockUnLockPostOrComment || lockUnLockPostOverview
	 * @param {object} payload An object contains baseurl ,lockUnlockData type post or comment and id of the post, key lock or unlock , page overview or not .
	 * @returns {integer} return status Code
	 */
	async lockUnLockPostOrComment(context, payload) {
		const lockUnlockData = payload.lockUnlockData; // id ,type
		//console.log(lockUnlockData);
		const baseurl = payload.baseurl;
		let response;
		if (payload.key == 'lock') {
			response = await fetch(baseurl + '/lock', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(lockUnlockData),
			});
		} else {
			response = await fetch(baseurl + '/unlock', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(lockUnlockData),
			});
		}
		// const responseData = await response.json();
		if (!response.ok) {
			// const error = new Error(
			// 	responseData.message || 'Failed to send request.'
			// );
			// throw error;
		}
		//console.log(response.status);
		//console.log(responseData);
		if (response.status == 200 && lockUnlockData.type == 'post')
			if (payload.page != 'overview')
				context.commit('lockUnLockPostOrComment', {
					lockUnlockData,
					key: payload.key,
				});
			else
				context.commit('lockUnLockPostOverview', {
					lockUnlockData,
					key: payload.key,
				});
		return response.status;
	},
	/**
	 * NOT USED YET
	 * Make a request to mark UnMark Send Me Reply,
	 * @action markUnMarkSendMeReply
	 * @param {object} payload An object contains baseurl ,sendReplyData type post or comment and id of the post.
	 * @returns {integer} return status Code
	 */
	async markUnMarkSendMeReply(context, payload) {
		const sendReplyData = payload.sendReplyData; // id ,type
		//console.log(sendReplyData);
		const baseurl = payload.baseurl;
		let response;
		response = await fetch(baseurl + '/send-replies', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(sendReplyData),
		});

		// const responseData = await response.json();
		if (!response.ok) {
			// const error = new Error(
			// 	responseData.message || 'Failed to send request.'
			// );
			// throw error;
		}
		//console.log(response.status);
		//console.log(responseData);
		if (response.status == 200)
			context.commit('markUnMarkSendMeReply', {
				sendReplyData,
			});
		return response.status;
	},
	/**
	 * NOT USED YET
	 * Make a request to lock UnLock Post Or Comment,
	 * @action lockUnLockPostOrComment=lockUnLockPostOrComment || lockUnLockPostOverview
	 * @param {object} payload An object contains baseurl ,lockUnlockData type post or comment and id of the post, key lock or unlock .
	 * @returns {integer} return status Code
	 */
	async unlockPostOrComment(context, payload) {
		const ApprovePostOrCommentData = payload.ApprovePostOrCommentData; // id ,type
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/unlock', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(ApprovePostOrCommentData),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		//console.log(response.status);
		//console.log(responseData);
		// if(response.status == 200)
		context.commit('ApprovePostOrComment', {
			ApprovePostOrCommentData,
		});
		return response.status;
	},
	/**
	 * NOT USED YET
	 * Make a request to mark Post As Spoiler,
	 * @action markPostAsSpoiler=markPostAsSpoiler
	 * @param {object} payload An object contains baseurl ,lockUnlockData type post or comment and id of the post, key lock or unlock .
	 * @returns {integer} return status Code
	 */
	async markPostAsSpoiler(context, payload) {
		const spoilerData = payload.spoilerData; // id of post
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/mark-spoiler', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(spoilerData),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		//console.log(response.status);
		//console.log(responseData);
		// if(response.status == 200)
		context.commit('markPostAsSpoiler', {
			spoilerData,
		});
		return response.status;
	},
	/**
	 * NOT USED YET
	 * Make a request to mark Post As Spoiler,
	 * @action unmarkPostAsSpoiler=unmarkPostAsSpoiler
	 * @param {object} payload An object contains baseurl ,spoilerData  .
	 * @returns {integer} return status Code
	 */
	async unmarkPostAsSpoiler(context, payload) {
		const spoilerData = payload.spoilerData; // id of post
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/unmark-spoiler', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(spoilerData),
		});
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
		//console.log(response.status);
		//console.log(responseData);
		// if(response.status == 200)
		context.commit('unmarkPostAsSpoiler', {
			spoilerData,
		});
		return response.status;
	},
	/**
	 * Make a request to mark UnMark Post As Spoiler,
	 * @action markUnMarkPostAsSpoiler=markUnMarkPostAsSpoiler || markUnMarkPostAsSpoilerOverview
	 * @param {object} payload An object contains baseurl ,spoilerData  (id of post,type mark/unmark).
	 * @returns {integer} return status Code
	 */
	async markUnMarkPostAsSpoiler(context, payload) {
		const spoilerData = payload.spoilerData; // id of post
		const baseurl = payload.baseurl;
		let response;
		if (payload.spoilerData.type == 'mark') {
			response = await fetch(baseurl + '/mark-spoiler', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(spoilerData),
			});
		} else {
			response = await fetch(baseurl + '/unmark-spoiler', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(spoilerData),
			});
		}
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		// if(response.status == 200)
		if (payload.page != 'overview')
			context.commit('markUnMarkPostAsSpoiler', {
				spoilerData,
			});
		else
			context.commit('markUnMarkPostAsSpoilerOverview', {
				spoilerData,
			});
		return response.status;
	},
	/**
	 * Make a request to mark un mark Post As NSFW,
	 * @action markPostAsNSFW=markPostAsNSFW || markPostAsNSFWOverview
	 * @param {object} payload An object contains baseurl ,nsfwData (type:mark/unmark,id of the post).
	 * @returns {integer} return status Code
	 */
	async markPostAsNSFW(context, payload) {
		const nsfwData = payload.nsfwData; // id of post
		const baseurl = payload.baseurl;
		let response;
		if (payload.nsfwData.type == 'mark') {
			response = await fetch(baseurl + '/mark-nsfw', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(nsfwData),
			});
		} else {
			response = await fetch(baseurl + '/unmark-nsfw', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(nsfwData),
			});
		}
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		// if(response.status == 200)
		if (payload.page != 'overview')
			context.commit('markPostAsNSFW', {
				nsfwData,
			});
		else
			context.commit('markPostAsNSFWOverview', {
				nsfwData,
			});
		return response.status;
	},
	/**
	 * Make a request to pin Unpin Post,
	 * @action pinUnpinPost=pinUnpinPost
	 * @param {object} payload An object contains baseurl ,pinUnpinData(id,pin true or false)  .
	 * @returns {integer} return status Code
	 */
	async pinUnpinPost(context, payload) {
		const pinUnpinData = payload.pinUnpinData; // id of post pin boolean
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/pin-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(pinUnpinData),
		});
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		// if(response.status == 200)
		context.commit('pinUnpinPost', {
			pinUnpinData,
		});
		return response.status;
	},
	/**
	 * Make a request to hide Unhide Post,
	 * @action hideUnhidePost
	 * @param {object} payload An object contains baseurl ,hideUnhideData (id,key:hide or un unhide) .
	 * @returns {integer} return status Code
	 */
	async hideUnhidePost(context, payload) {
		const hideUnhideData = payload.hideUnhideData; // id of post pin boolean
		const baseurl = payload.baseurl;
		let response;
		if (hideUnhideData.key == 'hide') {
			response = await fetch(baseurl + '/hide', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify({ id: hideUnhideData.id }),
			});
		} else if (hideUnhideData.key == 'unhide') {
			response = await fetch(baseurl + '/unhide', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify({ id: hideUnhideData.id }),
			});
		}
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		// if(response.status == 200)
		// context.commit('pinUnpinPost', {
		// 	pinUnpinData,
		// });
		return response.status;
	},
	/**
	 * Make a request to mark Spam,
	 * @action markSpam=markSpam || markSpamOverview
	 * @param {object} payload An object contains baseurl ,markSpamData(id of the post,type post or comment , reason), username,page :overview or not  .
	 * @returns {integer} return status Code
	 */
	async markSpam(context, payload) {
		const markSpamData = payload.markSpamData; // id of post pin boolean
		//console.log('markSpamActions', markSpamData);
		const baseurl = payload.baseurl;
		let response;
		try {
			response = await fetch(baseurl + '/mod-spam', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(markSpamData),
			});
		} catch (error) {
			console.log(error);
		}
		// const responseData = await response.json();
		if (!response.ok) {
			// const error = new Error(
			// 	responseData.message || 'Failed to send request.'
			// );
			// throw error;
			// //console.log(responseData);
		}
		//console.log(response.status);
		//console.log(responseData);
		if (response.status == 200 && markSpamData.type == 'post')
			if (payload.page != 'overview')
				context.commit('markSpam', {
					payload,
				});
			else
				context.commit('markSpamOverview', {
					payload,
				});
		return response.status;
	},
	/**
	 * NOT USED YET
	 * Make a request to unmark Spam,
	 * @action unmarkSpam=unmarkSpam || unmarkSpamOverview
	 * @param {object} payload An object contains baseurl ,unmarkSpamData  .
	 * @returns {integer} return status Code
	 */
	async unmarkSpam(context, payload) {
		const unmarkSpamData = payload.unmarkSpamData; // id of post pin boolean
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/unmark-spam', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(unmarkSpamData),
		});
		// const responseData = await response.json();
		// if (!response.ok) {
		// 	const error = new Error(
		// 		responseData.message || 'Failed to send request.'
		// 	);
		// 	throw error;
		// }
		//console.log(response.status);
		//console.log(responseData);
		// if(response.status == 200)
		context.commit('unmarkSpam', {
			payload,
		});
		return response.status;
	},
};

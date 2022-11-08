export default {
	async forgetPasswordhandle(context, payload) {
		const userInfo = {
			username: payload.username,
			email: payload.email,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/login/forget-password', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userInfo),
		});

		const responseData = await response.json();
		console.log(response.status);
		console.log(responseData);
		if (response.ok) {
			console.log(response);
			console.log(responseData);
		} else if (!response.ok) {
			console.log(response);
			console.log(responseData);
			const error = new Error(responseData.error);
			console.log(responseData.error);
			throw error;
		}
	},
	async forgetuserdhandle(context, payload) {
		const userInfo = {
			email: payload.email,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/login/forget-username', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userInfo),
		});

		const responseData = await response.json();
		if (response.ok) {
			console.log(response);
			console.log(responseData);
			console.log(responseData.token);
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			console.log(responseData.error);
			throw error;
		}
	},
	async ressethandle(context, payload) {
		const userInfo = {
			newPassword: payload.password,
			verifyPassword: payload.verifyPassword,
		};
		const baseurl = payload.baseurl;
		const id = payload.id;
		const token = payload.token;

		const response = await fetch(
			baseurl + '/reset-password/' + id + '/' + token,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(userInfo),
			}
		);

		const responseData = await response.json();
		if (response.ok) {
			console.log(response);
			console.log(responseData);
			console.log(responseData.token);
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			console.log(responseData.error);
			throw error;
		}
	},
	async signuphandle(context, payload) {
		const userInfo = {
			username: payload.username,
			password: payload.password,
			email: payload.email,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userInfo),
		});

		const responseData = await response.json();
		console.log(responseData);
		console.log(response.ok);
		if (response.ok) {
			if (responseData.token && responseData.username) {
				localStorage.setItem('accessToken', responseData.token);
				localStorage.setItem('userName', responseData.username);
				context.commit('setUser', {
					userName: responseData.username,
					accessToken: responseData.token,
					response: response,
				});
			}
		}
		if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
		// context.commit('setUser', {
		// 	userName: userInfo.username,
		// 	accessToken: responseData.split(' ')[1],
		// });
	},
	async loginhandle(context, payload) {
		const userInfo = {
			username: payload.username,
			password: payload.password,
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userInfo),
		});

		const responseData = await response.json();

		if (response.ok) {
			console.log(response);
			console.log(response.status);
			if (responseData.token && responseData.username) {
				localStorage.setItem('accessToken', responseData.token);
				localStorage.setItem('userName', responseData.username);
				localStorage.setItem('response', response.status);
				context.commit('setUser', {
					userName: responseData.username,
					accessToken: responseData.token,
					response: response.status,
				});
			}
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
};
//get request example
/*const response = await fetch('link');
const responseData = await response.json();

if (response.ok) {
	console.log(response);
	console.log(response.status);
} else if (!response.ok) {
	const error = new Error(responseData.error);
	throw error;
}
*/

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

		const responseData = response;

		if (response.status == 200) {
			localStorage.setItem('response', response.status);
			//this.$cookies.set('response', response.status);
			//this.$cookies.set('response', response.status);
			//this.$cookie.setCookie('response', response.status);
			console.log(response);
		} else if (response.status == 400) {
			const error = new Error(responseData.error);
			throw error;
		} else {
			const error = new Error('server error');
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

		const responseData = response;

		if (response.status == 200) {
			localStorage.setItem('response', response.status);
			//this.$cookies.set('response', response.status);
			console.log(response);
			console.log(responseData);
		} else if (response.status == 400) {
			const error = new Error(responseData.error);
			console.log(responseData.error);
			throw error;
		} else {
			const error = new Error('server error');
			throw error;
		}
	},
	async resethandle(context, payload) {
		const userInfo = {
			newPassword: payload.password,
			verifyPassword: payload.passwordVerify,
		};
		const baseurl = payload.baseurl;
		const id = payload.id;
		const token = payload.token;
		console.log(id);
		console.log(token);
		console.log(userInfo);

		const response = await fetch(
			baseurl + '/reset-password/' + id + '/' + token,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(userInfo),
			}
		);

		const responseData = await response.json();
		console.log(response);
		console.log(responseData);
		//console.log(responseData.token);
		if (response.status == 200) {
			localStorage.setItem('response', response.status);
			//this.$cookies.set('response', response.status);
			if (responseData.token)
				//localStorage.setItem('accessToken', responseData.token);
				this.$cookies.set('accessToken', responseData.token);
		} else if (response.status == 400) {
			const error = new Error(responseData.error);
			console.log(responseData.error);
			throw error;
		} else if (response.status == 403) {
			const error = new Error('invalid token');

			throw error;
		} else {
			const error = new Error('server error');
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
		localStorage.setItem('response', response.status);
		//this.$cookies.set('response', response.status);
		// console.log(response.status);
		if (response.ok) {
			console.log(response);
			console.log(response.status);
			if (responseData.token && responseData.username) {
				localStorage.setItem('accessToken', responseData.token);
				localStorage.setItem('userName', responseData.username);
				// localStorage.setItem('response', response.status);
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
	async available_user(context, payload) {
		const baseurl = payload.baseurl;
		// console.log(payload.username);
		// console.log(baseurl);
		console.log(baseurl + '/username-available?username=' + payload.username);
		const response = await fetch(
			baseurl + '/username-available' + '?username=' + payload.username
		);
		const responseData = await response.json();
		localStorage.setItem('response', response.status);
		console.log(response.status);
		if (response.ok) {
			if (!responseData.Error) {
				context.commit('setUser', {
					response: response.status,
				});
			}
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
	async available_email(context, payload) {
		const baseurl = payload.baseurl;
		// console.log(payload.username);
		// console.log(baseurl);
		console.log(baseurl + '/email-available?email=' + payload.email);
		const response = await fetch(
			baseurl + '/email-available' + '?email=' + payload.email
		);
		const responseData = await response.json();
		localStorage.setItem('response', response.status);
		console.log(response.status);
		if (response.ok) {
			if (!responseData.Error) {
				context.commit('setUser', {
					response: response.status,
				});
			}
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
	logout_handle(context) {
		localStorage.removeItem('userName');
		localStorage.removeItem('accessToken');
		localStorage.removeItem('response');
		context.commit('setUser', {
			accessToken: null,
			userName: null,
		});
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

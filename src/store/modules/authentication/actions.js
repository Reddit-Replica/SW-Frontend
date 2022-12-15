/**
 * @module AuthenticationActions
 */
export default {
	/**
	 * action for forget Password handle for sending forget password request
	 * @action  forgetPasswordhandle
	 * @param {Object} payload username and email .
	 * @returns {void}
	 */
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

		if (response.status == 200) {
			//localStorage.setItem('response', response.status);
			context.commit('setResponse', {
				response: response.status,
			});
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
	/**
	 * action for forget username handle sending forget username request
	 * @action  forgetuserdhandle
	 * @param {Object} contains  email .
	 * @returns {void}
	 */
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

		if (response.status == 200) {
			//localStorage.setItem('response', response.status);
			context.commit('setResponse', {
				response: response.status,
			});
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
	/**
	 * action for reset handle
	 * @action  resethandle
	 * @param {Object} payload new password .
	 * @returns {void}
	 */
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
			//localStorage.setItem('response', response.status);
			context.commit('setResponse', {
				response: response.status,
			});
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
	/**
	 * action for Signup handle for sending Sign up request
	 * @action  signuphandle
	 * @param {Object} payload username, email and password .
	 * @returns {void}
	 */
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
				localStorage.setItem('Password', payload.password);
				console.log(localStorage.getItem('Password'));
				context.commit('setUser', {
					userName: responseData.username,
					accessToken: responseData.token,
					response: response,
				});
				context.commit('settype', 'normal');
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
	/**
	 * action for LogIn handle for sending Login request
	 * @action  loginhandle
	 * @param {Object} payload username and password .
	 * @returns {void}
	 */
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
		// localStorage.setItem('response', response.status);
		//this.$cookies.set('response', response.status);
		// console.log(response.status);
		if (response.status == 200) {
			console.log(response);
			console.log(response.status);
			if (responseData.token && responseData.username) {
				localStorage.setItem('accessToken', responseData.token);
				localStorage.setItem('userName', responseData.username);
				localStorage.setItem('Password', payload.password);
				console.log(localStorage.getItem('Password'));
				// localStorage.setItem('response', response.status);
				context.commit('setUser', {
					userName: responseData.username,
					accessToken: responseData.token,
					response: response.status,
				});
				context.commit('settype', 'normal');
			}
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
	/**
	 * action for Get RandomUsers request
	 * @action  getRandomUsers
	 * @param {Object} payload Count of users .
	 * @returns {void}
	 */
	async getRandomUsers(context, payload) {
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/random-username?count=5');
		const responseData = await response.json();
		if (response.status == 200) {
			const RandUsers = [];
			for (const key in responseData) {
				RandUsers.push(responseData[key]);
			}
			context.commit('setRandom', RandUsers);
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
	/**
	 * action for LogIn and signup with google and send request
	 * @action  googleSign
	 * @param {Object} payload type and id_token from google .
	 * @returns {void}
	 */
	async googleSign(context, payload) {
		const baseurl = payload.baseurl;
		const userInfo = {
			type: payload.type,
			accessToken: payload.id_token,
		};
		console.log('hamada');
		console.log(userInfo.accessToken);
		const response = await fetch(baseurl + '/signin/google', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userInfo.accessToken),
		});
		const responseData = await response.json();
		// localStorage.setItem('response', response.status);
		if (response.status == 200 || response.status == 201) {
			localStorage.setItem('accessToken', responseData.token);
			localStorage.setItem('userName', responseData.username);
			context.commit('setUser', {
				userName: responseData.username,
				accessToken: responseData.token,
				response: response.status,
			});
			context.commit('settype', 'google');
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			console.log(error);
			throw error;
		}
	},
	/**
	 * action for checking if username is available
	 * @action  available_user
	 * @param {Object} payload username .
	 * @returns {void}
	 */
	async available_user(context, payload) {
		const baseurl = payload.baseurl;
		// console.log(payload.username);
		// console.log(baseurl);
		console.log(baseurl + '/username-available?username=' + payload.username);
		const response = await fetch(
			baseurl + '/username-available' + '?username=' + payload.username
		);
		const responseData = await response.json();
		// localStorage.setItem('response', response.status);
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
	/**
	 * action for checking if email is available
	 * @action  available_email
	 * @param {Object} payload email .
	 * @returns {void}
	 */
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
	/**
	 * action for logout
	 * @action  logout_handle
	 * @param {Object} payload username and accessToken .
	 * @returns {void}
	 */
	logout_handle(context) {
		localStorage.removeItem('userName');
		localStorage.removeItem('accessToken');
		// localStorage.removeItem('response');
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

<template>
	<div class="container">
		<div class="row justify-content-center content">
			<h3 class="heading-3">Send A Private Message</h3>
			<form @submit.prevent="handleSubmit()">
				<div>
					<label class="heading-3" for="message-from">from</label>
					<select
						name="message-from"
						id="message-from"
						v-model="senderUsername"
					>
						<option
							:value="userName"
							selected="selected"
							:id="'message-from-options-' + userName"
						>
							{{ '/u/' + userName }}
						</option>
						<option
							v-for="subreddit in suggestedSender"
							:id="'message-from-options-' + subreddit.title"
							:key="subreddit.title"
							:value="subreddit.title"
						>
							{{ '/r/' + subreddit.title }}
						</option>
					</select>
					<p class="error" v-if="error == 'messageFrom'">
						please choose sender
					</p>
				</div>
				<div>
					<label for="message-to" class="heading-3"
						>to
						<span
							>(/u/username, or /r/name for that subreddit's moderators)</span
						>
					</label>
					<input
						type="text"
						name="message-to"
						id="message-to"
						v-model="receiverUsername"
					/>
					<p class="error" v-if="error == 'messageTo'">
						please enter a username
					</p>
				</div>
				<div>
					<label for="subject" class="heading-3">subject</label>
					<input name="subject" id="subject" v-model="subject" />
					<p class="error" v-if="error === 'subject'">please enter a subject</p>
				</div>
				<div>
					<label for="message" class="heading-3">message</label>
					<textarea
						name="message"
						id="message"
						rows="5"
						v-model="text"
					></textarea>
					<p class="error" v-if="error === 'message'">we need something here</p>
				</div>
				<div class="links">
					<a
						href="https://www.redditinc.com/policies/content-policy"
						target="__blank"
						id="content-policy-link"
						>content policy</a
					>
					<button
						class="link"
						href=""
						@click="changeTitle()"
						id="formatting-button"
					>
						{{ formatting }} help
					</button>
				</div>
				<div class="formatting-help" v-if="formatting == 'hide'">
					<p>
						reddit uses a slightly-customized version of
						<a
							href="https://daringfireball.net/projects/markdown/syntax"
							id="markdown-link"
							>Markdown</a
						>
						for formatting. See below for some basics, or check
						<a
							href="https://www.reddit.com/wiki/commenting/?utm_source=reddit&utm_medium=usertext&utm_name=frontpage&utm_content="
							id="the-commenting-wiki-page-link"
							>the commenting wiki page</a
						>
						for more detailed help and solutions to common issues.
					</p>
					<table>
						<tr>
							<th>You type</th>
							<th>You see</th>
						</tr>
						<tr>
							<td>*italic*</td>
							<td><i>italic</i></td>
						</tr>
						<tr>
							<td>**bold**</td>
							<td><strong>bold</strong></td>
						</tr>
						<tr>
							<td>[reddit!](https://reddit.com)</td>
							<td><router-link to="/">reddit!</router-link></td>
						</tr>
						<tr>
							<td>
								* item 1 <br />
								* item 2 <br />
								* item 3
							</td>
							<td>
								<li>item 1</li>
								<li>item 2</li>
								<li>item 3</li>
							</td>
						</tr>
						<tr>
							<td>> quoted text</td>
							<td>
								<blockquote class="block-quote">&nbsp;quoted text</blockquote>
							</td>
						</tr>
						<tr>
							<td>
								Lines starting with four spaces are treated like code:<br />
								&nbsp;&nbsp;&nbsp;&nbsp;if 1 * 2 &lt; 3: <br />
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print "hello,
								world!"
							</td>
							<td>
								Lines starting with four spaces are treated like code:<br />
								<pre>if 1 * 2 &lt; 3:<br/> &nbsp;&nbsp;&nbsp;&nbsp; print "hello, world!"</pre>
							</td>
						</tr>
						<tr>
							<td>~~strikethrough~~</td>
							<td><strike>strikethrough</strike></td>
						</tr>
						<tr>
							<td>super script</td>
							<td>super<sup>script</sup></td>
						</tr>
					</table>
				</div>
				<button class="submit-form" id="submit-form">Send</button>
				<span class="delivered" v-if="delivered"
					>your message has been delivered</span
				>
				<span class="error" v-if="errorResponse">{{ errorResponse }}</span>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			senderUsername: '',
			receiverUsername: '',
			subject: '',
			error: '',
			formatting: 'formatting',
			delivered: false,
			errorResponse: null,
		};
	},
	// @vuese
	//change title name
	beforeMount() {
		if (localStorage.getItem('accessToken')) {
			document.title = 'messages: compose';
			this.loadSuggestedSender();
		}
	},
	computed: {
		// @vuese
		//return suggested sender
		// @type string
		suggestedSender() {
			return this.$store.getters['messages/suggestedSender'];
		},
		// @vuese
		//return username
		// @type string
		userName() {
			return this.$store.state.userName;
		},
	},
	methods: {
		// @vuese
		//make form validation
		// @arg no argument
		formValidation() {
			this.delivered = false;
			this.errorResponse = null;
			if (this.senderUsername == '') {
				this.error = 'messageFrom';
			} else if (this.receiverUsername == '') {
				this.error = 'messageTo';
			} else if (this.subject == '') {
				this.error = 'subject';
			} else if (this.text == '') {
				this.error = 'message';
			} else this.error = '';
		},
		// @vuese
		//handle submit form and send post request
		// @arg no argument
		async handleSubmit() {
			this.formValidation();
			if (this.error != '') return;
			this.delivered = false;
			this.errorResponse = null;
			try {
				if (this.senderUsername == this.userName) {
					this.senderUsername = '/u/' + this.senderUsername;
				} else {
					this.senderUsername = '/r/' + this.senderUsername;
				}
				await this.$store.dispatch('messages/sendMessage', {
					text: this.text,
					senderUsername: this.senderUsername,
					receiverUsername: this.receiverUsername,
					isReply: false,
					subject: this.subject,
					baseurl: this.$baseurl,
				});
				if (this.$store.getters['messages/sentSuccessfully']) {
					this.receiverUsername = '';
					this.subject = '';
					this.text = '';
					this.delivered = true;
				} else {
					this.errorResponse = 'some thing wrong';
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
				this.delivered = false;
			}
		},
		// @vuese
		//change title to formatting or hide
		// @arg no argument
		changeTitle() {
			if (this.formatting == 'formatting') this.formatting = 'hide';
			else this.formatting = 'formatting';
		},
		// @vuese
		//load suggested senders from the store
		// @arg no argument
		async loadSuggestedSender() {
			try {
				await this.$store.dispatch('messages/loadSuggestedSender', {
					baseurl: this.$baseurl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style scoped>
.heading-3 {
	padding: 1rem 2rem 0rem 2rem;
	margin: 0;
}
.content {
	background-color: var(--color-white-1);
	padding-bottom: 1rem;
}
label {
	display: inline-block;
	font-size: 1.5em;
	letter-spacing: 1px;
	margin: 0;
	padding: 0.5rem 2rem;
	font-weight: bold;
}
label span {
	color: var(--color-grey-dark-2);
}
input,
select,
textarea {
	display: block;
	padding: 3px 6px;
	box-sizing: border-box;
	border: none;
	width: 56%;
	border: var(--line-7);
	font-size: 1.5em;
	margin: 0;
	margin-left: 2rem;
	margin-bottom: 0.2rem;
}
.links {
	text-align: center;
}
.links a,
.link {
	margin-left: 1rem;
}
.submit-form {
	background-color: var(--color-blue-2);
	border-radius: 1rem;
	padding: 0.3rem;
	color: var(--color-white-1);
	border-color: var(--color-blue-2);
	font-weight: bolder;
	font-size: medium;
	width: 9rem;
	text-transform: uppercase;
	margin-left: 1rem;
}
.error {
	color: var(--color-red-dark-1);
	padding: 0 2rem;
	font-size: small;
}
.link {
	border: none;
	color: #0d6efd;
	background-color: var(--color-white-1);
}
.formatting-help {
	border-top: var(--line-dashed-2);
	margin: 0.5rem 2rem;
	width: 56%;
}
table {
	width: 100%;
	margin: 5px 0px;
	font-size: 1.2rem;
	font-weight: 400;
	max-width: 60em;
	border-collapse: collapse;
	display: table;
	box-sizing: border-box;
	text-indent: initial;
	border-spacing: 2px;
	border-color: grey;
	clear: left;
	margin-top: 1.5em;
}
table td {
	text-align: left;
}
tr:first-child {
	width: 50%;
	border: 1px solid #c0c0c0;
	background-color: #ffff99;
}
td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
.block-quote {
	margin-left: 5px;
	border-left: 2px solid #c5c1ad;
}
.delivered {
	margin: 0.5rem 0 0 0.5rem;
	font-size: 1.5rem;
	display: inline;
	color: var(--color-dark-2);
}
</style>

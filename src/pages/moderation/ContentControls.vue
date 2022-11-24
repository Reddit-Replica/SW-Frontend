<template>
	<div class="content">
		<div class="text">
			Content controls
			<a
				href="https://mods.reddithelp.com/hc/en-us/articles/360009381491"
				id="content-controls"
				__blank="targe"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-info-circle icon-info"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					/>
				</svg>
			</a>
		</div>
		<div class="text-p">
			Set requirements and restrictions for how people post and comment in your
			community
		</div>
		<div class="main-box">
			<fieldset>
				<legend class="title-text">Post Requirements</legend>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">
									Provide members with posting guidelines
								</h3>
							</label>
						</div>
						<p class="field-text-2">
							Posting guidelines let people who are new to your community or
							posting for the first time know what your expectations are. If you
							have specific flair or formatting requirements for posts, this is
							the place to make it clear what you’d like.
						</p>
					</div>
					<div class="field-button">
						<switch-button id="provide-members"></switch-button>
					</div>
				</div>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">Require words in the post title</h3>
							</label>
						</div>
						<p class="field-text-2">
							Posts without these words in the title can’t be submitted. (Choose
							up to 15 words, 40 characters each.)
						</p>
					</div>
					<div class="field-button">
						<switch-button id="require-words"></switch-button>
					</div>
				</div>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">Ban words from the post title</h3>
							</label>
						</div>
						<p class="field-text-2">
							Posts with these words in the title can’t be submitted. (Choose up
							to 15 words, 40 characters each.)
						</p>
					</div>
					<div class="field-button">
						<switch-button id="ban-words-title"></switch-button>
					</div>
				</div>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">Ban words from the post body</h3>
							</label>
						</div>
						<p class="field-text-2">
							Posts with these words in the body can’t be submitted. (Choose up
							to 15 words, 40 characters each.)
						</p>
					</div>
					<div class="field-button">
						<switch-button id="ban-words-body"></switch-button>
					</div>
				</div>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">
									Require or ban links from specific domains
								</h3>
							</label>
						</div>
						<p class="field-text-2">
							Posts with links that don’t fit your requirements can’t be
							submitted.
						</p>
					</div>
					<div class="field-button">
						<switch-button id="require-or-ban"></switch-button>
					</div>
				</div>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">
									Restrict how often the same link can be posted
								</h3>
							</label>
						</div>
						<p class="field-text-2">
							Posts that have a link that has already been posted to your
							community can only be submitted within the number of days you
							select.
						</p>
					</div>
					<div class="field-button">
						<switch-button id="restrict-how-often"></switch-button>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend class="title-text">Advanced post requirements</legend>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">Require post flair</h3>
							</label>
						</div>
						<p class="field-text-2">
							Posts without flair can’t be submitted. (Note that this
							requirement is ignored if your community hasn’t set up flair yet.)
						</p>
					</div>
					<div class="field-button">
						<switch-button id="require-post-flair"></switch-button>
					</div>
				</div>
				<div class="field field-choose">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">Post text body</h3>
							</label>
						</div>
						<p class="field-text-2">Allow posts to have body text</p>
					</div>
					<div class="radio-box">
						<div class="form-check radio-box-1">
							<input
								class="form-check-input radio-input"
								type="radio"
								name="flexRadioDefault"
								id="flex-radio-default-1"
							/>
							<label class="form-check-label" for="flexRadioDefault1">
								Text body is optional for all post types
							</label>
						</div>
						<div class="form-check radio-box-1">
							<input
								class="form-check-input radio-input"
								type="radio"
								name="flexRadioDefault"
								id="flex-radio-default-2"
								checked
							/>
							<label class="form-check-label" for="flexRadioDefault2">
								Text body is required for text-only posts
							</label>
						</div>
						<div class="form-check radio-box-1">
							<input
								class="form-check-input radio-input"
								type="radio"
								name="flexRadioDefault"
								id="flex-radio-default-3"
								checked
							/>
							<label class="form-check-label" for="flexRadioDefault2">
								Text body is not allowed
							</label>
						</div>
					</div>
				</div>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">Restrict post title length</h3>
							</label>
						</div>
						<p class="field-text-2">
							Set a minimum and/or maximum post title length
						</p>
					</div>
					<div class="field-button">
						<switch-button id="title-length"></switch-button>
					</div>
				</div>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">Use title text RegEx requirements</h3>
							</label>
						</div>
						<p class="field-text-2">
							Use regular expressions for more advanced title matching. These
							use the
							<a class="a-field-text-2" href="#">Python RegEx syntax</a>
						</p>
					</div>
					<div class="field-button">
						<switch-button id="use-title-text"></switch-button>
					</div>
				</div>
				<div class="field">
					<div class="field-text">
						<div class="field-text-1">
							<label for="">
								<h3 class="h3-field-text">Use body text RegEx requirements</h3>
							</label>
						</div>
						<p class="field-text-2">
							Use regular expressions for more advanced body text matching.
							These use the
							<a class="a-field-text-2" href="#">Python RegEx syntax</a>
						</p>
					</div>
					<div class="field-button">
						<switch-button id="requirements"></switch-button>
					</div>
				</div>
			</fieldset>
		</div>
	</div>
</template>

<script>
import SwitchButton from '../../components/BaseComponents/SwitchButton.vue';
export default {
	components: { SwitchButton },
};
</script>

<style scoped>
.content {
	padding-top: 6.4rem;
	border-radius: 0 0 0.4rem 0.4rem;
	overflow: hidden;
}
.text {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-2);
	margin-bottom: 1.6rem;
}
.text-p {
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
	color: var(--color-dark-3);
	margin-bottom: 1.6rem;
}
.main-box {
	background: var(--main-white-color);
	padding: 1.6rem 2.4rem 12rem;
	position: relative;
}
.title-text {
	font-size: 2.2rem;
	font-weight: 500;
	line-height: 2.6rem;
	border-bottom: 1px solid var(--color-grey-dark-5);
	color: var(--color-dark-3);
	padding-bottom: 1.2rem;
	width: 100%;
}
.field {
	margin: 1.6rem 0;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-flow: row wrap;
	flex-flow: row wrap;
	margin-bottom: 3.2rem;
}
.field-choose {
	flex-direction: column;
}
.field-text {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	margin-right: 0.8rem;
	max-width: 80%;
}
.field-text-1 {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	-ms-flex-align: center;
	align-items: center;
}
.h3-field-text {
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2rem;
	color: var(--color-dark-3);
	display: -ms-flexbox;
	display: flex;
	margin-bottom: 0.4rem;
}
.field-text-2 {
	font-weight: 400;
	color: var(--color-grey-light-5);
	font-size: 1.2rem;
	line-height: 1.6rem;
}
.field-button {
	-ms-flex-align: center;
	align-items: center;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-positive: 1;
	flex-grow: 1;
	-ms-flex-pack: end;
	justify-content: flex-end;
}
.a-field-text-2 {
	color: var(--color-blue-2);
	text-decoration: inherit;
}
.radio-box {
	align-items: flex-start;
	flex-direction: column;
}
.radio-input {
	font-size: 1.4rem;
	font-weight: 400;
	font-family: inherit;
	margin-right: 0.5rem;
}
.radio-box-1 {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.8rem;
	cursor: default;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	-ms-flex-align: center;
	align-items: center;
	color: var(--color-dark-3);
}
</style>

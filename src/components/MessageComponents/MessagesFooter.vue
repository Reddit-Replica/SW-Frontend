<template>
	<div class="content">
		<div class="box">
			<div class="about">
				<ul class="list">
					<li class="title">about</li>
					<li>
						<a href="https://www.redditinc.com/blog" id="blog-link">blog</a>
					</li>
					<li>
						<a href="https://www.redditinc.com/" id="about-link">about</a>
					</li>
					<li>
						<a href="https://www.redditforbusiness.com/" id="advertising-link"
							>advertising</a
						>
					</li>
					<li>
						<a href="https://www.redditinc.com/careers" id="careers-link"
							>careers</a
						>
					</li>
				</ul>
			</div>
			<div class="about">
				<ul class="list">
					<li class="title">help</li>
					<li>
						<a
							href="https://www.redditinc.com/policies/content-policy"
							id="site-rules-link"
							>site rules</a
						>
					</li>
					<li>
						<a href="https://www.reddithelp.com/" id="reddit-help-center-link"
							>Reddit help center</a
						>
					</li>
					<li>
						<a
							href="https://www.reddit.com/wiki/reddiquette/"
							id="reddiquette-link"
							>reddiquette</a
						>
					</li>
					<li>
						<a
							href="https://www.redditinc.com/policies/moderator-code-of-conduct"
							id="mod-guidelines-link"
							>mod guidelines</a
						>
					</li>
					<li>
						<a href="https://www.reddit.com/contact/" id="contact-us-link"
							>contact us</a
						>
					</li>
				</ul>
			</div>
			<div class="about">
				<ul class="list">
					<li class="title">apps & tools</li>
					<li>
						<a
							href="https://apps.apple.com/us/app/reddit-the-official-app/id1064216828"
							id="reddit-for-iphone"
							>reddit for iphone</a
						>
					</li>
					<li>
						<a
							href="https://play.google.com/store/apps/details?id=com.reddit.frontpage"
							id="reddit-for-android"
							>Reddit for Android</a
						>
					</li>
					<li>
						<a
							href="https://www.reddit.com/message/compose/"
							id="mobile-website-link"
							>mobile website</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="p-footer">
			<p>
				Use of this site constitutes acceptance of our
				<a
					href="https://www.redditinc.com/policies/user-agreement"
					id="user-greement-link"
					>User Agreement</a
				>
				and
				<a
					href="https://www.reddit.com/policies/privacy-policy"
					id="privacy-policy-link"
					>Privacy Policy</a
				>
				. © 2022 reddit inc. All rights reserved.
			</p>
			<p>REDDIT and the ALIEN Logo are registered trademarks of reddit inc.</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
	text-align: center;
	margin-top: 10rem;
}
.content p a {
	color: var(--color-grey-dark-2);
	text-decoration: underline;
	clear: both;
}
.box > * {
	font-family: arial, verdana, helvetica, sans-serif;
	color: var(--color-grey-dark-2);
	font-size: 1.8rem;
	font-weight: normal;
	margin-bottom: 5px;
	margin-top: auto;
	box-sizing: border-box;
	display: inline-block;
	-webkit-flex: 0 0 20%;
	flex: 0 0 15%;
	max-width: 50rem;
	text-align: center;
	border-left: var(--line-3);
	height: 14rem;
}
.box {
	display: flex;
	align-items: flex-start;
	margin: 2rem;
	justify-content: center;
}
.box > *:first-child {
	border: none;
}
.title {
	font-size: 1.8rem;
}
.list {
	list-style: none;
	font-size: 1.2rem;
	display: flex;
	flex-direction: column;
	text-align: left;
}
a:hover {
	text-decoration: underline;
}
@media only screen and (max-width: 565px) {
	.p-footer {
		margin-top: 10rem;
	}
}
</style>

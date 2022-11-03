<template>
	<div class="content">
		<div class="box">
			<div class="about">
				<ul class="list">
					<li class="title">about</li>
					<li><a href="https://www.redditinc.com/blog">blog</a></li>
					<li><a href="https://www.redditinc.com/">about</a></li>
					<li><a href="https://www.redditforbusiness.com/">advertising</a></li>
					<li><a href="https://www.redditinc.com/careers">careers</a></li>
				</ul>
			</div>
			<div class="about">
				<ul class="list">
					<li class="title">help</li>
					<li>
						<a href="https://www.redditinc.com/policies/content-policy"
							>site rules</a
						>
					</li>
					<li><a href="https://www.reddithelp.com/">Reddit help center</a></li>
					<li>
						<a href="https://www.reddit.com/wiki/reddiquette/">reddiquette</a>
					</li>
					<li>
						<a
							href="https://www.redditinc.com/policies/moderator-code-of-conduct"
							>mod guidelines</a
						>
					</li>
					<li><a href="https://www.reddit.com/contact/">contact us</a></li>
				</ul>
			</div>
			<div class="about">
				<ul class="list">
					<li class="title">apps & tools</li>
					<li>
						<a
							href="https://apps.apple.com/us/app/reddit-the-official-app/id1064216828"
							>Reddit for iPhone</a
						>
					</li>
					<li>
						<a
							href="https://play.google.com/store/apps/details?id=com.reddit.frontpage"
							>Reddit for Android</a
						>
					</li>
					<li>
						<a href="https://www.reddit.com/message/compose/">mobile website</a>
					</li>
				</ul>
			</div>
		</div>
		<p>
			Use of this site constitutes acceptance of our
			<a href="https://www.redditinc.com/policies/user-agreement"
				>User Agreement</a
			>
			and
			<a href="https://www.reddit.com/policies/privacy-policy"
				>Privacy Policy</a
			>
			. © 2022 reddit inc. All rights reserved.
		</p>
		<p>REDDIT and the ALIEN Logo are registered trademarks of reddit inc.</p>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
	text-align: center;
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
</style>

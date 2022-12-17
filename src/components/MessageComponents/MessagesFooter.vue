<template>
	<div class="content">
		<div class="box">
			<div class="about">
				<ul class="list">
					<li class="title">about</li>
					<li>
						<a href="#" id="blog-link">blog</a>
					</li>
					<li>
						<a href="#" id="about-link">about</a>
					</li>
					<li>
						<a href="#" id="advertising-link">advertising</a>
					</li>
					<li>
						<a href="#" id="careers-link">careers</a>
					</li>
				</ul>
			</div>
			<div class="about">
				<ul class="list">
					<li class="title">help</li>
					<li>
						<a href="#" id="site-rules-link">site rules</a>
					</li>
					<li>
						<a href="#" id="reddit-help-center-link">Reddit help center</a>
					</li>
					<li>
						<a href="#" id="reddiquette-link">reddiquette</a>
					</li>
					<li>
						<a href="#" id="mod-guidelines-link">mod guidelines</a>
					</li>
					<li>
						<a href="#" id="contact-us-link">contact us</a>
					</li>
				</ul>
			</div>
			<div class="about">
				<ul class="list">
					<li class="title">apps & tools</li>
					<li>
						<a href="#" id="reddit-for-iphone">reddit for iphone</a>
					</li>
					<li>
						<a href="#" id="reddit-for-android">Reddit for Android</a>
					</li>
					<li>
						<a href="#" id="mobile-website-link">mobile website</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="p-footer">
			<p>
				Use of this site constitutes acceptance of our
				<a href="#" id="user-greement-link">User Agreement</a>
				and
				<a href="#" id="privacy-policy-link">Privacy Policy</a>
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
	margin-top: 25rem;
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
	.title {
		font-size: 1.2rem;
	}
	.list {
		font-size: 1rem;
	}
}
</style>

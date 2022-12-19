<template>
	<div class="not-found-user-page-container">
		<div class="not-found-user-page-box">
			<div class="not-found-logo">
				<img src="../../img/img-500.png" alt="" />
			</div>
			<div class="header-content">
				<p>Internal Server Error</p>
			</div>
			<div class="paragraph-content">
				<p>We're experiencing an internal server problem.</p>
				<p class="center">Please try again later.</p>
			</div>
			<div>
				<base-button
					button-text="GO HOME"
					class="go-home-button"
					id="go-home-button-button"
					@click="$router.push('/main')"
				></base-button>
			</div>
			<div class="user-agreement">
				Use of this site constitutes acceptance of our User Agreement and
				Privacy Policy. ©2022 reddit inc. All rights reserved. REDDIT and the
				ALIEN Logo are registered trademarks of reddit inc.
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
p {
	margin: 0;
	padding: 0;
}
.not-found-user-page-container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
}
.not-found-logo,
.not-found-logo img {
	width: 128px;
	height: 128px;
}
.not-found-user-page-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.header-content {
	font-size: 20px;
	font-weight: 500;
	line-height: 22px;
	color: #1c1c1c;
	margin-top: 32px;
	margin-bottom: 20px;
}
.paragraph-content {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: #505252;
	margin-top: 0;
	margin-bottom: 32px;
}
.center {
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
}
.go-home-button {
	/* border: 1px solid #ccc; */
	overflow: visible;
	word-wrap: break-word;
	background-color: var(--color-blue-2);
	color: var(--main-white-color);
	padding: 12px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	/* min-width: 32px; */
	padding: 4px 16px;
	align-items: center;
	border-radius: 9999px;
	display: flex;
	justify-content: center;
	text-align: center;
	width: 402px;
	position: relative;
}

.go-home-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
}
.go-home-button:hover::before {
	opacity: 0.08;
}
.user-agreement {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	color: #878a8c;
	margin-top: 15px;
	text-align: center;
	margin: 0 auto;
	max-width: 100%;
	padding: 36px 0;
	width: 476px;
}
</style>

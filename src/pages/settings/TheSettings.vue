<template>
	<div>the settings</div>
	<div><profile-settings></profile-settings></div>
</template>

<script>
export default {};
</script>

<style>
.h2-main-title {
	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	color: black;
	padding: 40px 0;
}
.h3-main-title {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	text-transform: uppercase;
	border-bottom: 1px solid lightgray;
	color: gray;
	margin-bottom: 32px;
	padding-bottom: 6px;
}
.h3-title {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: black;
	display: flex;
	margin-bottom: 4px;
}
.p-title-description {
	font-weight: 400;
	color: gray;
	font-size: 12px;
	line-height: 16px;
}
.input-field,
.text-area-field {
	background-color: white;
	border: 1px solid lightgray;
	color: black;
	box-sizing: border-box;
	border-radius: 4px;
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
}
.input-field {
	height: 48px;
	margin-bottom: 8px;
	padding: 12px 24px 4px 12px;
}
.text-area-field {
	resize: both;
	margin-bottom: 0px;
	padding: 8px;
}
.p-comment {
	color: gray;
	padding-top: 5px;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
}
</style>

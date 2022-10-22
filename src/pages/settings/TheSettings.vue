<template>
	<div>the settings</div>
	<!-- <div><profile-settings></profile-settings></div> -->
</template>

<!-- <script>
import SwitchButton from '../../components/SwitchButton.vue';
export default {
	components: {
		SwitchButton,
	},
};
</script> -->

<style>
.settings-page {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	display: flex;
	background-color: var(--color-white-1);
}
.settings-block {
	max-width: 688px;
	flex: 1 1 auto;
}
.h2-main-title {
	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	color: var(--color-dark-1);
	padding: 40px 0;
}
.h3-main-title {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	text-transform: uppercase;
	border-bottom: 1px solid var(--color-grey-light-2);
	color: var(--color-grey-dark-2);
	margin-bottom: 32px;
	padding-bottom: 6px;
}
.h3-title {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: var(--color-dark-1);
	display: flex;
	margin-bottom: 4px;
}
.p-title-description {
	font-weight: 400;
	color: var(--color-grey-dark-2);
	font-size: 12px;
	line-height: 16px;
}
.input-field,
.text-area-field {
	background-color: var(--color-white-1);
	border: 1px solid var(--color-grey-light-2);
	color: var(--color-grey-dark-1);
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
	color: var(--color-grey-dark-2);
	padding-top: 5px;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
}
.box {
	display: flex;
	flex-flow: row wrap;
	margin-bottom: 32px;
}
.box-flex-column {
	flex-direction: column;
}
.box-1 {
	display: flex;
	flex-direction: column;
	margin-right: 8px;
	max-width: 80%;
}
.box-2 {
	align-items: flex-start;
	margin-top: 12px;
	flex-direction: column;
	display: flex;
	justify-content: flex-end;
}
.box-switch-button {
	align-items: center;
	display: flex;
	justify-content: flex-end;
	flex-grow: 1;
}
</style>

<template>
	<div class="mod-card">
		<div class="mod-header">
			<div style="padding: 12px 0 0">
				<h2>You're a moderator of these communities</h2>
			</div>
		</div>
		<div class="mod-list">
			<ul>
				<li>
					<i></i>
					<span>
						<a href="">r/mjjk</a>
						<p>r member</p>
					</span>
					<base-button button-text="join" class="join-button"></base-button>
				</li>
				<li>
					<i></i>
					<span>
						<a href="">r/mjjk</a>
						<p>r member</p>
					</span>
					<base-button button-text="join" class="join-button"></base-button>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: {
		BaseButton,
	},
};
</script>
<style scoped>
.mod-card {
	margin-top: 16px;
	background-color: #ffffff;
	width: 100%;
}
.mod-header {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	border-radius: 3px 3px 0 0;
	color: #1a1a1b;
	display: flex;
	fill: var(--newCommunityTheme-widgetColors-sidebarWidgetTitleColor);
	padding: 0 12px 12px;
}
.mod-header h2 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	font-weight: 700;
}
/* li::before {
	content: '\f174';
	width: 20px;
	height: 20px;
} */
.mod-list {
	padding: 12px;
}
ul,
li,
p {
	list-style: none;
	text-decoration: none;
	margin: 0;
	padding: 0;
}
.mod-list i {
	display: inline-block;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #0079d3;
	margin-right: 9px;
	position: relative;
}
.mod-list i::after {
	content: 'r';
	color: #ffffff;
	background-color: transparent;
	width: 30px;
	height: 30px;
	position: absolute;
	font-size: 30px;
	z-index: 5;
	left: 0;
	top: 0;
	transform: translate(25%, -30%);
}
li {
	display: flex;
	width: 100%;
	margin-bottom: 12px;
}
span {
	display: flex;
	flex-direction: column;
	flex-basis: 1;
	flex-grow: 1;
	justify-content: flex-start;
	align-items: flex-start;
	color: #1a1a1b;
}
a,
p {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	color: #1a1a1b;
}
li span a:hover {
	text-decoration: underline;
}
.join-button {
	background-color: #0079d3;
	border-radius: 9999px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
	margin-right: 8px;
	padding: 4px 16px;
	text-align: center;
	line-height: 16px;
	border: none;
	width: 104px;
}
</style>

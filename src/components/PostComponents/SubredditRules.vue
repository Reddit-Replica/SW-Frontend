<template>
	<div class="rules">
		<div class="header">
			<p>r/{{ subredditName }} Rules</p>
		</div>
		<div class="body">
			<subreddit-rule
				v-for="(rule, index) in rules"
				:key="index"
				:rule="rule"
				:index="index + 1"
			></subreddit-rule>
		</div>
	</div>
</template>
<script>
import SubredditRule from './SubredditRule.vue';
export default {
	components: {
		SubredditRule,
	},
	props: {
		rules: {
			type: Array,
			default: () => [],
			required: true,
		},
		subredditName: {
			type: String,
			default: '',
			required: true,
		},
	},
};
</script>
<style scoped>
.rules {
	border-radius: 5px;
	margin: 22px 0;
	overflow: hidden;
	background-color: white;
}
.header {
	height: 34px;
	background-color: var(--color-green-2);
	color: white;
	font-size: 14px;
	font-weight: 600;
	padding: 12px;
	display: flex;
	align-items: center;
}
.body {
	padding: 12px 12px 6px 12px;
}
.rule:not(:last-of-type) {
	border-bottom: 1px solid var(--color-grey-light-2);
}
P {
	margin: 0;
}
</style>

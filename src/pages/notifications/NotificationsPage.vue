<template>
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<div>
			<notifications-top></notifications-top>
		</div>
	</div>
</template>

<script>
import NotificationsTop from '../../components/NotificationsComponents/NotificationsTop.vue';

export default {
	components: {
		NotificationsTop,
	},
};
</script>

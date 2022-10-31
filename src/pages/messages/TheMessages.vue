<template>
	<!-- header component -->
	<the-header :headerTitle="'Messages'"></the-header>
	<message-bar></message-bar>
	<inbox-bar v-if="showSecondBar"></inbox-bar>
	<div class="container">
		<div class="row">
			<div class="col-lg-7">
				<router-view v-slot="slotProps">
					<transition name="route" mode="out-in">
						<component :is="slotProps.Component"></component>
					</transition>
				</router-view>
			</div>
		</div>
	</div>
</template>

<script>
import MessageBar from '../../components/bars/MessageBar.vue';
import InboxBar from '../../components/bars/InboxBar.vue';
export default {
	components: {
		MessageBar,
		InboxBar,
	},
	computed: {
		showSecondBar() {
			return (
				this.$route.path !== '/message/compose' &&
				this.$route.path !== '/message/sent'
			);
		},
	},
};
</script>

<style scoped></style>

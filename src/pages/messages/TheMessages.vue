<template>
	<!-- header component -->
	<the-header :header-title="'Messages'"></the-header>
	<message-bar></message-bar>
	<inbox-bar v-if="showSecondBar"></inbox-bar>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-10 content-col">
				<router-view v-slot="slotProps">
					<transition name="route" mode="out-in">
						<component :is="slotProps.Component"></component>
					</transition>
				</router-view>
			</div>
		</div>
	</div>
	<messages-footer></messages-footer>
</template>

<script>
import MessageBar from '../../components/MessageComponents/MessageBar.vue';
import InboxBar from '../../components/MessageComponents/InboxBar.vue';
import MessagesFooter from '../../components/MessageComponents/MessagesFooter.vue';
export default {
	components: {
		MessageBar,
		InboxBar,
		MessagesFooter,
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

<style scoped>
.content-col {
	margin: 2rem;
}
</style>

<!-- <template>
	<ul>
		<social-link
			@get-link-data="getData"
			v-for="link in links"
			:key="link.title"
			:title="link.title"
			:image-url="link.imageUrl"
		>
		</social-link>
	</ul>
</template>

<script>
import SocialLink from './SocialLink.vue';

export default {
	components: {
		SocialLink,
	},

	data() {
		return {
			links: [
				{
					imageUrl:
						'https://www.redditstatic.com/desktop2x/img/social-links/reddit.png',

					title: 'Reddit',
				},
			],
		};
	},
	methods: {
		getData() {
			this.$emit('get-data', this.linkData);
		},
	},
};
</script> -->

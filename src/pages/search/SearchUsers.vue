<template>
	<div class="all">
		<div class="after-all">
			<div class="page-release">
				<div class="page">
					<div>
						<div class="upper-nav">
							<div class="searchin-nav">
								<div class="search-nav" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										href="/search/type=post"
										><button class="button-nav button-nav2">Posts</button></a
									>
								</div>
								<div class="search-nav" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										><button class="button-nav button-nav2">Comments</button></a
									>
								</div>
								<!-- href="/search/?q=Query&amp;type=comment" -->
								<div class="search-nav" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										><button class="button-nav button-nav2">
											Communities
										</button></a
									>
								</div>
								<!-- href="/search/?q=Query&amp;type=com" -->
								<div class="search-nav now-page" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										><button class="button-nav button-nav2">People</button></a
									>
								</div>
								<!-- href="/search/?q=Query&amp;type=ppl" -->
							</div>
						</div>
					</div>
					<div class="search-results">
						<div class="people">
							<div
								class="people-results"
								v-for="value in users"
								:key="value.UserName"
							>
								<div>
									<div>
										<a class="user-a"
											><div class="user-div">
												<div class="user-details">
													<div class="user-img-div">
														<div class="user-img-det"></div>
														<div class="user-img">
															<img class="image-user" />
														</div>
													</div>
												</div>
												<div class="people-content">
													<div class="people-content_release">
														<h6 class="people-name">
															u/{{ value.UserName }}&nbsp;
														</h6>
														<p class="karma-number">
															<span class="point-span" role="presentation"
																>&nbsp;•&nbsp;</span
															>{{ value.karma }} Karma&nbsp;
														</p>
													</div>
													<p class="p-details">{{ value.Pdetails }}&nbsp;</p>
												</div>
												<div class="follow" v-if="notFollowed" @click="toggle">
													<base-button
														button-text="Follow"
														class="follow-button"
													></base-button>
												</div>
												<div class="follow" v-if="!notFollowed" @click="toggle">
													<base-button
														button-text="Unfollow"
														class="follow-button"
													></base-button>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BaseButton from '../../components/BaseComponents/BaseButton.vue';
export default {
	data() {
		return {
			notFollowed: true,
			users: [
				{ UserName: 'Abd', karma: '11k' },
				{ UserName: 'Karim', karma: '11k', Pdetails: 'الحمد لله' },
			],
		};
	},
	methods: {
		toggle() {
			this.notFollowed = !this.notFollowed;
		},
	},
	components: { BaseButton },
};
</script>

<style scoped>
.all {
	z-index: 3;
}
.after-all {
	max-width: 1024px;
	display: flex;
	justify-content: center;
	margin: 0 auto;
}
.page-release {
	width: 80%;
	min-width: fit-content;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	padding: 24px 24px 0;
}
.page {
	padding: 24px 24px 0;
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	flex-grow: 1;
}
div {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
a {
	color: inherit;
	text-decoration: inherit;
}
.upper-nav {
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	margin-top: 24px;
}
.searchin-nav {
	display: flex;
}
.search-nav {
	display: flex;
}
.search-nav:hover {
	border-radius: 9999px;
	background-color: #ccc;
}
.now-page {
	border-radius: 9999px;
	background-color: #f6f7f8;
}
.search-nav-button {
	position: relative;
	margin-right: 4px;
}
.button-nav {
	background-color: var(--newCommunityTheme-field);
	opacity: 1;
	color: #000;
	font-weight: 700;
	padding: 12px 20px;
}
.button-nav::before {
	opacity: 0;
}
.button-nav2 {
	align-items: center;
	border-radius: 9999px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	text-align: center;
	width: auto;
	position: relative;
	background-color: var(--newCommunityTheme-button);
	border: none;
	color: #000;
	fill: var(--newCommunityTheme-body);
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-height: 32px;
	min-width: 32px;
}
.search-results {
	min-width: fit-content;
	max-width: 100%;
	width: 100%;
	display: flex;
	padding-top: 8px;
}
.user-a {
	margin-bottom: 0;
	border-radius: 4px 4px 0 0;
	border: thin solid #ccc;
	padding: 16px;
	display: flex;
	flex-direction: column;
	margin-top: -1px;
	color: inherit;
	text-decoration: inherit;
}
.user-div {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.people {
	margin-bottom: 16px;
	width: 100%;
}
.people-results {
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
	max-width: 100%;
	width: 100%;
}
.people-content {
	flex-grow: 1;
	padding: 0 8px;
	overflow: hidden;
	overflow-wrap: break-word;
}
.people-content_release {
	display: flex;
	align-items: baseline;
}
.people-name {
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 12px;
	line-height: 16px;
	color: rgb(58, 49, 49);
	font-weight: 700;
}
.karma-number {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: lightgray;
}
.p-details {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 200;
	line-height: 12px;
	color: #7c7c7c;
}
.follow {
	flex-shrink: 0;
	width: 88px;
}
.follow-button {
	width: 100%;
	color: rgb(98, 98, 252);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
}
</style>

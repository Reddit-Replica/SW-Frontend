<template>
	<div class="popup">
		<div class="popup-inner">
			<div class="comments">
				<div class="container bg-black">
					<div class="row justify-content-center align-items-center">
						<div class="col-7 d-flex">
							<div class="vote-box">
								<div class="upvote" @click="upvote" id="upvote">
									<svg
										class="icon icon-arrow-down p-1 up-clicked"
										v-if="upClicked"
									>
										<use xlink:href="../../img/vote.svg#icon-arrow-up"></use>
									</svg>
									<svg class="icon icon-shift" v-else>
										<use xlink:href="../../img/shift.svg#icon-shift"></use>
									</svg>
								</div>
								<div
									class="p-2 vote-count"
									:class="
										upClicked ? 'up-clicked' : downClicked ? 'down-clicked' : ''
									"
								>
									{{ counter }}
								</div>
								<div class="downvote" @click="downvote" id="downvote">
									<svg
										class="icon icon-arrow-down p-1"
										:class="downClicked ? 'down-clicked' : ''"
										v-if="downClicked"
									>
										<use xlink:href="../../img/vote.svg#icon-arrow-down"></use>
									</svg>
									<svg class="icon icon-shift" v-else>
										<use xlink:href="../../img/shift.svg#icon-shift"></use>
									</svg>
								</div>
							</div>
							<div class="post-title">
								<h4>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-card-text"
										viewBox="0 0 16 16"
									>
										<path
											d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
										/>
										<path
											d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
										/>
									</svg>
									{{ postName }}
								</h4>
							</div>
						</div>
						<div class="col-3 close">
							<button id="close" @click="closeComments">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-x"
									viewBox="0 0 16 16"
								>
									<path
										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
									/>
								</svg>
								<span>close</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="post">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-7">
							<!-- section to display post information -->
							<div class="post-left">
								<div class="post-content d-flex">
									<div class="d-flex flex-column post-vote-box">
										<div class="upvote" @click="upvote" id="post-upvote">
											<svg
												class="icon icon-arrow-down p-1 up-clicked"
												v-if="upClicked"
											>
												<use
													xlink:href="../../img/vote.svg#icon-arrow-up"
												></use>
											</svg>
											<svg class="icon icon-shift" v-else>
												<use xlink:href="../../img/shift.svg#icon-shift"></use>
											</svg>
										</div>
										<div
											class="p-2 post-vote-count"
											:class="
												upClicked
													? 'up-clicked'
													: downClicked
													? 'down-clicked'
													: ''
											"
										>
											{{ counter }}
										</div>
										<div class="downvote" @click="downvote" id="post-downvote">
											<svg
												class="icon icon-arrow-down p-1"
												:class="downClicked ? 'down-clicked' : ''"
												v-if="downClicked"
											>
												<use
													xlink:href="../../img/vote.svg#icon-arrow-down"
												></use>
											</svg>
											<svg class="icon icon-shift" v-else>
												<use xlink:href="../../img/shift.svg#icon-shift"></use>
											</svg>
										</div>
									</div>
									<div class="main">
										<div class="info d-flex justify-content-space-between">
											<div class="subreddit-info">
												<span class="subreddit-image"
													><img src="../../img/user-image.jpg" alt=""
												/></span>
												<span class="subreddit-name">
													<router-link
														:to="{
															name: 'subreddit',
															params: { subredditName: subredditName },
														}"
														id="subreddit-router"
														>{{ $route.path.split('/')[2] }}
													</router-link>
												</span>
												<span>
													. Posted by .
													<router-link
														:to="{
															name: 'user',
															params: { userName: userName },
														}"
														id="poster-router"
													>
														{{ userName }} </router-link
													>&nbsp;{{ duration }} ago
												</span>
											</div>
											<div class="bell" @click="follow" id="follow">
												<svg
													v-if="!isFollowed"
													xmlns="http://www.w3.org/2000/svg"
													width="22"
													height="22"
													fill="currentColor"
													class="bi bi-bell"
													viewBox="0 0 22 22"
												>
													<path
														d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
													/>
												</svg>
												<svg
													v-else
													xmlns="http://www.w3.org/2000/svg"
													width="22"
													height="22"
													fill="currentColor"
													class="bi bi-bell-fill"
													viewBox="0 0 22 22"
												>
													<path
														d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
													/>
												</svg>
											</div>
										</div>
										<div class="content">
											<div class="post-name">
												<h3>{{ postName }}</h3>
											</div>
											<div class="post-text">
												<p>
													{{ postDescription }}
												</p>
											</div>
										</div>
										<div class="post-services">
											<ul class="services">
												<li>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-chat-square"
														viewBox="0 0 16 16"
													>
														<path
															d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
														/>
													</svg>
													{{ commentsCount }} Comments
												</li>
												<li @click="showShareSubMenu" id="share">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-arrow-90deg-right"
														viewBox="0 0 16 16"
													>
														<path
															fill-rule="evenodd"
															d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
														/>
													</svg>
													Share
													<ul class="sub-menu" v-if="shareSubMenuDisplay">
														<li>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																class="bi bi-signpost-2"
																viewBox="0 0 16 16"
															>
																<path
																	d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z"
																/>
															</svg>
															Crosspost
														</li>
													</ul>
												</li>

												<li id="post-direct-save">
													<div v-if="!saved" @click="savePost" id="save">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															class="bi bi-bookmark"
															viewBox="0 0 16 16"
														>
															<path
																d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
															/>
														</svg>
														Save
													</div>
													<div v-else @click="savePost" id="unsave">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															class="bi bi-bookmarks"
															viewBox="0 0 16 16"
														>
															<path
																d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
															/>
															<path
																d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
															/>
														</svg>
														Unsave
													</div>
												</li>
												<li @click="showSubMenu" id="submenu">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-three-dots"
														viewBox="0 0 16 16"
													>
														<path
															d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
														/>
													</svg>
													<ul class="sub-menu" v-if="subMenuDisplay">
														<li
															v-if="!saved"
															@click="savePost"
															class="post-sub-save"
															id="sub-save"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																class="bi bi-bookmark"
																viewBox="0 0 16 16"
															>
																<path
																	d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
																/>
															</svg>
															Save
														</li>
														<li
															v-else
															@click="savePost"
															class="post-sub-save"
															id="sub-unsave"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																class="bi bi-bookmarks"
																viewBox="0 0 16 16"
															>
																<path
																	d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
																/>
																<path
																	d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
																/>
															</svg>
															Unsave
														</li>
														<li @click="hidePost" v-if="!postHidden" id="hide">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																class="bi bi-eye-slash"
																viewBox="0 0 16 16"
															>
																<path
																	d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
																/>
																<path
																	d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
																/>
																<path
																	d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
																/>
															</svg>
															Hide
														</li>
														<li @click="hidePost" id="unhide" v-else>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																class="bi bi-eye-slash"
																viewBox="0 0 16 16"
															>
																<path
																	d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
																/>
																<path
																	d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
																/>
																<path
																	d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
																/>
															</svg>
															Unhide
														</li>
														<li>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																class="bi bi-flag"
																viewBox="0 0 16 16"
															>
																<path
																	d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"
																/>
															</svg>
															Report
														</li>
													</ul>
												</li>
											</ul>
										</div>
										<div class="comment-submit">
											<div class="comment-as-name">
												Comment as
												<router-link
													:to="{
														name: 'user',
														params: {
															userName: this.$store.getters.getUserName,
														},
													}"
													id="user-router"
													>{{ getuserName }}</router-link
												>
											</div>
											<div
												class="big-box big-box-fancy-mode"
												v-if="!markdownMode"
											>
												<div>
													<textarea
														class="text-area text-area-in-fancy-mode"
														placeholder="What are your thoughts?"
														id="text1"
														v-model="newComment"
													></textarea>
												</div>
												<div class="icons-box">
													<div class="tool-tip">
														<span class="tool-tip-text">Bold</span>
														<button class="icons" id="bold">
															<div class="icon">
																<font-awesome-icon icon="fa-solid fa-bold " />
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text">Italics</span>
														<button class="icons" id="italics">
															<div class="icon">
																<font-awesome-icon icon="fa-solid fa-italic" />
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text">Link</span>
														<button class="icons" id="link">
															<div>
																<svg
																	class="svg-inline--fa fa-link icon"
																	data-v-d316172c=""
																	aria-hidden="true"
																	focusable="false"
																	data-prefix="fas"
																	data-icon="link"
																	role="img"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 640 512"
																	data-fa-i2svg=""
																>
																	<path
																		fill="currentColor"
																		d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
																	></path>
																</svg>
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text strike"
															>Strikethrough</span
														>
														<button class="icons" id="strikethrough">
															<div class="icon">
																<font-awesome-icon
																	icon="fa-solid fa-strikethrough"
																/>
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text strike"
															>Inline Code</span
														>
														<button class="icons" id="inline-code">
															<div class="icon">
																<font-awesome-icon icon="fa-solid fa-code" />
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text strike"
															>Superscript</span
														>
														<button class="icons" id="superscript">
															<div class="icon">
																<font-awesome-icon
																	icon="fa-solid fa-superscript"
																/>
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text">Spoiler</span>
														<button class="icons" id="spoiler">
															<div class="icon">
																<font-awesome-icon
																	icon="fa-solid fa-exclamation"
																/>
															</div>
														</button>
													</div>
													<div class="space-in"></div>
													<div class="tool-tip">
														<span class="tool-tip-text strike">Heading</span>
														<button class="icons" id="heading">
															<div class="icon">
																<font-awesome-icon icon="fa-solid fa-heading" />
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text strike"
															>Bulleted List</span
														>
														<button class="icons" id="list-ul">
															<div class="icon">
																<font-awesome-icon icon="fa-solid fa-list-ul" />
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text strike"
															>Numbered List</span
														>
														<button class="icons" id="numbered-list">
															<div class="icon">
																<font-awesome-icon icon="fa-solid fa-list-ol" />
															</div>
														</button>
													</div>
													<div class="tool-tip">
														<span class="tool-tip-text strike"
															>Quote Block</span
														>
														<button class="icons" id="quote-block">
															<div class="icon">
																<font-awesome-icon
																	icon="fa-solid fa-quote-right"
																/>
															</div>
														</button>
													</div>
													<div class="tool-tip" @click="displayMenu" id="menu">
														<button class="icons" id="ellipsis">
															<div class="icon">
																<font-awesome-icon
																	icon="fa-solid fa-ellipsis"
																/>
															</div>
														</button>
														<ul v-if="menuIsDisplayed">
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-bold "
																	class="icon"
																/>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-italic"
																	class="icon"
																/>
															</li>
															<li class="icons">
																<svg
																	class="svg-inline--fa fa-link icon"
																	data-v-d316172c=""
																	aria-hidden="true"
																	focusable="false"
																	data-prefix="fas"
																	data-icon="link"
																	role="img"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 640 512"
																	data-fa-i2svg=""
																>
																	<path
																		fill="currentColor"
																		d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
																	></path>
																</svg>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-strikethrough"
																	class="icon"
																/>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-code"
																	class="icon"
																/>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-superscript"
																	class="icon"
																/>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-exclamation"
																	class="icon"
																/>
															</li>
															<li class="menu-split"></li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-heading"
																	class="icon"
																/>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-list-ul"
																	class="icon"
																/>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-list-ol"
																	class="icon"
																/>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-quote-right"
																	class="icon"
																/>
															</li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-regular fa-square"
																	class="icon"
																/>
															</li>
															<li class="menu-split"></li>
															<li class="icons">
																<font-awesome-icon
																	icon="fa-solid fa-table"
																	class="icon"
																/>
															</li>
														</ul>
													</div>
													<base-button
														class="mark-down"
														@click="switchMode"
														id="markdown-mode"
														>Markdown Mode</base-button
													>
													<base-button
														class="comment-button"
														:disable-button="noComment"
														id="comment-in-mark-down-mode"
														@click="writeNewComment"
														>Comment</base-button
													>
												</div>
											</div>
											<div class="big-box big-box-markdown-mode" v-else>
												<div>
													<textarea
														class="text-area text-area-in-markdown-mode"
														placeholder="What are your thoughts?"
														id="text2"
														v-model="newComment"
													></textarea>
												</div>
												<div class="icons-box">
													<div class="question-icon">
														<font-awesome-icon
															icon="fa-regular fa-circle-question"
														/>
													</div>
													<div
														class="text-in-markdown-mode"
														@click="switchMode"
														id="switch-f-mode"
													>
														Switch to Fancy Pants Editor
													</div>
													<base-button
														@click="writeNewComment"
														class="comment-button"
														:disable-button="noComment"
														id="comment"
														>Comment</base-button
													>
												</div>
											</div>
										</div>
										<div class="sort-by" @click="displaySortByMenu" id="sort">
											<span class="title"
												>Sort By:{{ sortByTitle }}
												<font-awesome-icon icon="fa-solid fa-caret-down"
											/></span>
											<subMenu
												:titles="[
													'Best',
													'Top',
													'New',
													'Controversial',
													'Old',
													'Q&A',
												]"
												class="sort-by-sub-menu"
												:display="showSortByMenu"
												@change-title="changeSortByTitle"
												clicked-prop="Best"
											/>
										</div>
									</div>
								</div>
								<div class="post-comments">
									<my-comment
										v-for="userComment in userComments"
										:key="userComment"
										:comment="userComment"
									></my-comment>
									<nested-reply
										v-for="comment in comments"
										:key="comment.userName + comment.duration"
										:comment="comment"
									></nested-reply>
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<subreddit-info subreddit-name="subredditName"></subreddit-info>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import SubMenu from '../components/BaseComponents/SubMenu.vue';
import NestedReply from '../components/NestedReply.vue';
import SubredditInfo from '../components/SubredditInfo.vue';
import MyComment from '../components/MyComment.vue';
export default {
	components: {
		SubMenu,
		NestedReply,
		SubredditInfo,
		MyComment,
	},
	data() {
		return {
			id: 1,
			subredditName: 'subredditNamme',
			userName: 'mena',
			upClicked: false,
			downClicked: false,
			counter: 22,
			postName:
				'Can you guys help me finish my code or at least help me find the solution, I really tried to google it but I just can not find it and as I said I am still new.',
			duration: '1 day',
			postDescription:
				'I suck at programming. Always feel like I am behind everyone in my classes but I absolutely love the material. I have dreams about solutions and think about how to fix problems all day long…but I suck at it.',
			commentsCount: 22,
			isFollowed: false,
			subMenuDisplay: false,
			shareSubMenuDisplay: false,
			postHidden: false,
			saved: false,
			menuIsDisplayed: false,
			newComment: '',
			markdownMode: false,
			showSortByMenu: false,
			sortByTitle: 'Best',
			comments: [
				{
					userName: 'Consistent-Affect761',
					duration: '2 hr',
					content: 'Congrats! Which YouTubers did you watch and Udemy courses?',
					replies: [
						{
							userName: 'mena',
							duration: '1 hr',
							content: 'Congrats!',
							replies: [
								{
									userName: 'kAOStics69',
									duration: '1 hr',
									content:
										'Also if you dont mind me asking what kind of questions did they ask? And how long did it take for them to contact you back.',
								},
							],
						},
					],
				},
				{
					userName: 'Zealousideal_Code760',
					duration: '5 hr',
					content:
						'Yoo! Congratulations deeply, I admire those who have the work ethic to do this self-taught, especially in such a short span of time. Do you mind if I ask what projects you had/have?',
				},
			],
			userComments: [],
		};
	},
	computed: {
		//@vuese
		//check if a text is written in text area to be added as comment or not
		noComment() {
			if (this.newComment == '') return true;
			return false;
		},
		//@vuese
		//get userName
		getuserName() {
			return this.$store.getters.getUserName;
		},
	},
	methods: {
		//@vuese
		//adds new comment
		writeNewComment() {
			let write = {
				userName: this.$store.getters.getUserName,
				duration: 'just now',
				content: this.newComment,
				replies: [],
			};
			this.userComments.unshift(write);
			this.newComment = '';
		},
		//@vuese
		//change the order of comments listing according to parameter passed to it
		// @arg The argument is a string value representing sort type
		changeSortByTitle(title) {
			this.sortByTitle = title;
			this.$router.push('/comments/' + title);
		},
		//@vuese
		//opens the sorting menu of comments
		displaySortByMenu() {
			this.showSortByMenu = !this.showSortByMenu;
		},
		//@vuese
		//upvote on post
		async upvote() {
			if (this.downClicked) {
				this.downClicked = false;
				this.counter++;
			}
			if (this.upClicked == false) {
				this.upClicked = true;
				this.counter++;
				try {
					await this.$store.dispatch('postCommentActions/vote', {
						baseurl: this.$baseurl,
						id: this.id,
						type: 'post',
						direction: 1,
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				this.upClicked = false;
				this.counter--;
			}
		},
		//@vuese
		//downvote on post
		async downvote() {
			if (this.upClicked) {
				this.upClicked = false;
				this.counter--;
			}
			if (this.downClicked == false) {
				this.downClicked = true;
				this.counter--;
				try {
					await this.$store.dispatch('postCommentActions/vote', {
						baseurl: this.$baseurl,
						id: this.id,
						type: 'post',
						direction: -1,
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				this.downClicked = false;
				this.counter++;
			}
		},
		//@vuese
		//follow post
		async followPost() {
			try {
				await this.$store.dispatch('comments/followPost', {
					baseurl: this.$baseurl,
					id: this.id,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			console.log(this.$store.getters['comments/getIfFollowed']);
			this.isFollowed = this.$store.getters['comments/getIfFollowed'];
		},
		//@vuese
		//show services submenu of post
		showSubMenu() {
			this.subMenuDisplay = !this.subMenuDisplay;
			this.shareSubMenuDisplay = false;
		},
		//@vuese
		//hide post
		hidePost() {
			this.postHidden = !this.postHidden;
		},
		//@vuese
		//save post
		savePost() {
			this.saved = !this.saved;
		},
		//@vuese
		//show share submenu of post
		showShareSubMenu() {
			this.shareSubMenuDisplay = !this.shareSubMenuDisplay;
			this.subMenuDisplay = false;
		},
		//@vuese
		//show menu of text area in fancy mode
		displayMenu() {
			this.menuIsDisplayed = !this.menuIsDisplayed;
		},
		//@vuese
		//swich mode of text area between mark down and fancy modes
		switchMode() {
			this.markdownMode = !this.markdownMode;
		},
		//@vuese
		//close comments page
		closeComments() {
			this.$router.push('/main');
		},
	},
};
</script>
<style scoped>
nested-reply {
	margin: 22px;
}
.popup {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;
	background-color: rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;
}
.bg-black {
	background-color: black;
}
.post {
	background-color: var(--color-grey-light-8);
	padding-top: 22px;
}
.post-left {
	background-color: white;
	padding: 8px 8px 3px 5px;
	width: 100%;
	border-radius: 5px;
}
.vote-box {
	text-align: center;
	display: flex;
	justify-content: center;
	border-left: 0.2px solid var(--color-grey-light-6);
	border-right: 0.2px solid var(--color-grey-light-6);
	width: 122px;
	height: 27.5px;
	padding: 0px 12px;
}
.vote-box .downvote svg,
.vote-box .upvote svg,
.post-vote-box svg {
	height: 27.5px;
	width: 27.5px;
	fill: var(--color-grey-light-6);
}
.vote-box .downvote:has(.icon-arrow-down),
.vote-box .upvote:has(.icon-arrow-down) {
	background-color: var(--color-grey-dark-6);
}
.downvote .icon-shift {
	transform: rotate(180deg);
}
.downvote .icon-shift:hover,
.downvote svg.icon-arrow-down {
	fill: var(--color-blue);
}
.upvote .icon-shift:hover,
.upvote svg.icon-arrow-down {
	fill: var(--color-orange);
}
.vote-count {
	color: white;
	font-size: 12px;
	font-weight: 700;
	line-height: 18px;
	margin: 0 1px;
	text-align: center;
	width: 32px;
}
.post-title {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: middle;
	line-height: 29px;
}
.post-title svg {
	width: 16.67px;
	height: 16.67px;
	fill: var(--color-grey-light-7);
	margin: 0px 5px;
}
.post-title h4 {
	font-weight: 600;
	display: inline;
	color: var(--color-grey-light-7);
}
.close button {
	display: block;
	margin-left: auto;
	background-color: black;
	color: var(--color-grey-light-7);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 15px;
	font-weight: 700;
	border: none;
}
.close svg {
	display: inline-block;
	height: 44px;
	width: 44px;
	font-size: 44px;
	line-height: 44px;
	padding: 0 4px 0 0;
}
.close span {
	margin-left: -5px;
}
.info {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.subreddit-info .subreddit-image img {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}
.subreddit-info .subreddit-image {
	padding-right: 5px;
}
.subreddit-info a {
	color: black;
	font-weight: bold;
}
.subreddit-info a:hover {
	text-decoration: underline;
}

.post-vote-box {
	text-align: center;
	border-radius: 5px 0px 0px 5px;
	width: 40px;
	margin-right: 5px;
}
.post-vote-count {
	color: black;
	font-weight: 700;
}
.post-vote-count.up-clicked {
	color: var(--color-orange);
}
.post-vote-count.down-clicked {
	color: var(--color-blue);
}
.post-vote-box .downvote:hover svg,
.post-vote-box .upvote:hover svg,
.post-vote-box .upvote svg.up-clicked,
.post-vote-box .downvote svg.down-clicked,
.post-vote-box .downvote:hover svg,
.post-vote-box .upvote:hover svg,
.post-vote-box .upvote svg.up-clicked,
.post-vote-box .downvote svg.down-clicked {
	background-color: var(--color-grey-light-4);
}
.post-vote-box .downvote:hover svg {
	fill: var(--color-blue);
}
.post-vote-box .upvote:hover svg {
	fill: var(--color-orange);
}
.main,
.content {
	width: 100%;
}
.post-name h3 {
	color: black;
	margin: 10px 0px;
}
.post-text {
	color: black;
	font-size: 12px;
}
.services {
	padding: 0px;
	margin: 0px;
	display: inline;
}
.services > li {
	display: inline-block;
	list-style: none;
	height: 40px;
	text-align: center;
	line-height: 40px;
	padding: 0px 12px;
	border-radius: 5px;
	color: var(--color-grey-dark-2);
	font-weight: bold;
	font-size: 11px;
	position: relative;
}
.post-services .services > li:not(:first-of-type):hover {
	background-color: var(--color-grey-light-2);
	cursor: pointer;
}
.sub-menu {
	position: absolute;
	background-color: white;
	padding: 0px;
	left: 0px;
	box-shadow: 0px 2px 4px var(--color-grey-dark-2);
	border-radius: 5px;
	z-index: 2;
}
.sub-menu li {
	color: var(--color-grey-dark-2);
	font-size: 15px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
}
.sub-menu li:hover {
	color: black;
	background-color: var(--color-blue-light-2);
}
.sub-menu li:first-of-type:hover {
	border-radius: 5px 5px 0px 0px;
}
.sub-menu li:last-of-type:hover {
	border-radius: 0px 0px 5px 5px;
}
.sub-menu li svg {
	fill: var(--color-grey-dark-2);
	width: 20px;
	height: 20px;
	margin-right: 10px;
}
.sub-menu li:hover svg {
	fill: black;
}
.sub-menu li {
	padding: 0px 10px;
}
.sub-menu li:not(:last-of-type) {
	border-bottom: 1px solid var(--color-grey-light-3);
}
.sub-menu li#unsave,
.sub-menu li#unhide {
	color: var(--color-blue);
}
.sub-menu li#unsave svg,
.sub-menu li#unhide svg {
	fill: var(--color-blue);
}
.sub-menu li.post-sub-save,
.sub-menu li.share-items-in-sub-menu,
.sub-menu li.awards-item-in-sub-menu {
	display: none;
}
.comment-as-name {
	margin-bottom: 4px;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	color: black;
	margin-right: 4px;
}
.comment-as-name a {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: var(--color-pink);
}
.comment-as-name a:hover {
	text-decoration: underline;
}
@media (max-width: 1079px) {
	.sub-menu li.post-sub-save {
		display: flex;
	}
	#post-direct-save {
		display: none;
	}
}
@media (max-width: 767px) {
	#share {
		display: none;
	}
	.share-items-in-sub-menu {
		display: flex !important;
	}
}
@media (max-width: 495px) {
	.awards-item-in-sub-menu {
		display: flex !important;
	}
	#awards {
		display: none;
	}
}
.big-box * {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
.big-box {
	border: 1px solid #edeff1;
	border-radius: 4px;
	position: relative;
}
.icons-box {
	z-index: 8;
	height: 42px;
	align-items: center;
	background-color: #f6f7f8;
	border-radius: 3px 3px 0 0;
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: nowrap;
	padding: 0px 5px;
}
.text-box {
	overflow: auto;
	border-radius: 4px;
	font-family: 'Noto Sans', Arial, sans-serif;
	min-height: 122px;
	overflow: hidden;
	padding: 8px 16px;
	resize: vertical;
	-webkit-user-modify: read-write-plaintext-only;
	outline: none;
	user-select: text;
	white-space: pre-wrap;
	overflow-wrap: break-word;
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	z-index: 11;
	position: relative;
}

.big-box:focus-within {
	border: 0.5px solid black;
}

.text-area {
	font-size: 14px;
	font-weight: 400;
	line-height: 30px;
	width: 100%;
	border-radius: 4px;
	min-height: 122px;
	overflow: hidden;
	padding: 8px 16px;
	resize: vertical;
	color: #000;
	z-index: 15;
	border-style: none;
	border-color: Transparent;
	overflow: auto;
	outline: none;
}
textarea:focus {
	outline: none;
	border: none;
	border-style: none;
	border-color: Transparent;
	overflow: auto;
}
.text-area-in-markdown-mode {
	font-family: 'Noto Mono,Menlo,Monaco,Consolas,monospace';
	word-spacing: 7px;
}
.text-area-in-fancy-mode {
	font-family: 'Noto Sans', Arial, sans-serif;
}
.icons {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	line-height: 0;
	outline: none;
	padding: 3px;
	position: relative;
	flex-wrap: nowrap;
}
.icons {
	color: black;
	display: flex;
	align-items: center;
	width: 30px;
	height: 32px;
	border-radius: 4px;
	background-color: #f6f7f8;
}
.icons:hover {
	background-color: #ccc;
}
.icon {
	font-size: 16px;
	color: grey;
	width: 100%;
}

.space-in {
	border-right: 1px solid #edeff1;
	box-sizing: border-box;
	height: 14px;
	margin: 0 6px;
	width: 1px;
}
.tool-tip {
	position: relative;
	cursor: pointer;
}
.tool-tip-text {
	text-align: center;
	width: 60px;
	height: 25px;
	position: absolute;
	color: white;
	background-color: black;
	border: 2px solid black;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	border-radius: 5px;
	visibility: hidden;
	padding: 2px 2px 20px 2px;
	transform: translateX(-20%);
	opacity: 0;
}
.strike {
	width: 100px;
}
.tool-tip-text::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 100%;
	border: 8px solid;
	transform: translateX(-50%);
	border-color: #000 #0000 #0000 #0000;
}
.tool-tip:hover .tool-tip-text {
	top: -40px;
	visibility: visible;
	opacity: 1;
}
.mark-down {
	width: max-content;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	color: var(--color-pink);
	background-color: var(--color-grey-light-9);
	display: block;
	margin-left: auto;
}
.mark-down:hover {
	background-color: #ccc;
}
.comment-button {
	width: 100px;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	color: white;
	display: block;
	margin-left: auto;
}
.comment-button:not(:disabled) {
	background-color: var(--color-pink);
}
.comment-submit {
	padding: 24px 0px;
}
.big-box-fancy-mode {
	width: fit-content;
}
.big-box-markdown-mode {
	margin-right: 40px;
}
.tool-tip:last-of-type {
	position: relative;
}
.tool-tip:last-of-type ul {
	position: absolute;
	border: 1px solid var(--color-grey-light-10);
	border-radius: 4px;
	box-shadow: var(--shadow-menu);
	padding: 2px 5px;
	background-color: white;
	list-style: none;
	display: flex;
	align-items: center;
	height: 37px;
}
.tool-tip:last-of-type li.icons {
	background-color: white;
	display: none;
}
.tool-tip:last-of-type li.icons:hover {
	background-color: #ccc;
}
.menu-split {
	background-color: var(--color-grey-light-10);
	box-sizing: border-box;
	height: 100%;
	margin: 0 6px;
	width: 1px;
	display: none;
}
@media (max-width: 1600px) {
	.icons-box .tool-tip:last-of-type li:nth-of-type(13),
	.icons-box .tool-tip:last-of-type li:nth-of-type(14),
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: flex;
	}
}
@media (max-width: 1287px) {
	.icons-box .tool-tip:nth-of-type(12) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: flex;
	}
}
@media (max-width: 1255px) {
	.icons-box .tool-tip:nth-of-type(11) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 1223px) {
	.icons-box .tool-tip:nth-of-type(10) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10) {
		display: flex;
	}
}
@media (max-width: 1192px) {
	.icons-box .tool-tip:nth-of-type(9) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(9) {
		display: flex;
	}
}
@media (max-width: 1192px) {
	.icons-box .space-in {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(8) {
		display: flex;
	}
}
@media (max-width: 1146px) {
	.icons-box .tool-tip:nth-of-type(7) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(7) {
		display: flex;
	}
}
@media (max-width: 991px) {
	.icons-box div.tool-tip:nth-of-type(7),
	.icons-box div.tool-tip:nth-of-type(8),
	.icons-box div.tool-tip:nth-of-type(9),
	.icons-box div.tool-tip:nth-of-type(10),
	.icons-box div.tool-tip:nth-of-type(11),
	.icons-box div.tool-tip:nth-of-type(12) {
		display: block;
	}
	.icons-box .space-in {
		display: block;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(7),
	.icons-box .tool-tip:last-of-type li:nth-of-type(8),
	.icons-box .tool-tip:last-of-type li:nth-of-type(9),
	.icons-box .tool-tip:last-of-type li:nth-of-type(10),
	.icons-box .tool-tip:last-of-type li:nth-of-type(11),
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: none;
	}
}
@media (max-width: 943px) {
	.icons-box div.tool-tip:nth-of-type(12) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: flex;
	}
}
@media (max-width: 911px) {
	.icons-box div.tool-tip:nth-of-type(11) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 879px) {
	.icons-box div.tool-tip:nth-of-type(10) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10) {
		display: flex;
	}
}
@media (max-width: 847px) {
	.icons-box div.tool-tip:nth-of-type(9) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(9) {
		display: flex;
	}
}
@media (max-width: 815px) {
	.icons-box .space-in {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(8) {
		display: flex;
	}
}
@media (max-width: 802px) {
	.icons-box div.tool-tip:nth-of-type(7) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(7) {
		display: flex;
	}
}
@media (max-width: 770px) {
	.icons-box div.tool-tip:nth-of-type(6) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(6) {
		display: flex;
	}
}
@media (max-width: 738px) {
	.icons-box div.tool-tip:nth-of-type(5) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(5) {
		display: flex;
	}
}
@media (max-width: 706px) {
	.icons-box div.tool-tip:nth-of-type(4) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(4) {
		display: flex;
	}
}
@media (max-width: 674px) {
	.icons-box div.tool-tip:nth-of-type(3) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(3) {
		display: flex;
	}
}
@media (max-width: 642px) {
	.icons-box div.tool-tip:nth-of-type(2) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(2) {
		display: flex;
	}
}
@media (max-width: 610px) {
	.icons-box div.tool-tip:nth-of-type(1) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(1) {
		display: flex;
	}
}
.question-icon {
	margin-left: 12px;
	cursor: pointer;
	display: flex;
}
.question-icon svg {
	fill: var(--color-grey-dark-8);
	height: 12px;
	width: 12px;
}
.text-in-markdown-mode {
	color: var(--color-pink);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	margin-left: 8px;
	width: auto;
	cursor: pointer;
}
.sort-by {
	position: relative;
	color: var(--color-pink);
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	cursor: pointer;
	margin: 16px 40px 0 0px;
	padding: 0 16px 4px 0;
	border-bottom: 1px solid var(--color-grey-light-11);
}
</style>

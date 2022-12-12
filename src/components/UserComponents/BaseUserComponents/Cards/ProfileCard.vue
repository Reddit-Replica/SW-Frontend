<template>
	<div class="card-prof">
		<div class="profile-card">
			<!-- cover picture has two margins default is for picture profile and other for avatar profile -->
			<div
				class="cover-pic"
				:class="[isAvatar ? 'avatar-margin' : '']"
				id="cover-picture"
				:style="`background-image: url(${$baseurl}/${userData['banner']}) `"
			>
				<!-- add image icon at click it trigger input file which is hidden -->
				<span
					v-if="state == 'profile'"
					@click="addCoverImage"
					class="add-image"
				>
					<div style="display: none">
						<input
							type="file"
							id="add-cover-button"
							ref="coverFile"
							@change="loadCoverPic"
							accept="image/x-png,image/jpeg"
						/>
					</div>
					<!-- add image icon (+) -->
					<i class="fa-regular fa-square-plus add-image-icon" />
				</span>
				<!-- ///////////////////////////////////////////////////////////// -->
				<!-- profile settings icon -->
				<router-link
					v-if="state == 'profile'"
					id="profile-settings-icon-card"
					to="/settings/profile"
					class="profile-settings"
					><i class="fa-solid fa-gear"
				/></router-link>
				<!-- ///////////////////// -->
				<!-- incase of  profile picture preview -->
				<div id="profile-picture-box" class="profile-picture" v-if="!isAvatar">
					<svg
						id="default-profile-picture"
						class="_3utuhrSAkEkzgaswqglvpN _3Y33QReHCnUZm9ewFAsk8C"
						viewBox="0 0 320 320"
						xmlns="http://www.w3.org/2000/svg"
						style="
							position: absolute;
							left: 3px;
							top: 3px;
							width: 80px;
							height: 80px;
							z-index: 1;
							background: #d7dfe2;
							fill: #fff;
							border-radius: 4px;
						"
					>
						<g fill="inherit">
							<path d="m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"></path>
							<path
								d="m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
							></path>
							<path d="m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"></path>
							<path
								d="m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
							></path>
							<path
								d="m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
							></path>
							<path
								d="m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
							></path>
							<path
								d="m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
							></path>
							<path d="m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"></path>
							<path
								d="m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
							></path>
							<path
								d="m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
							></path>
							<path
								d="m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
							></path>
							<path
								d="m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
							></path>
							<path
								d="m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
								fill="none"
							></path>
							<path
								d="m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
							></path>
							<circle cx="238.47" cy="80.13" r="22.93"></circle>
							<path
								d="m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
							></path>
						</g>
					</svg>
					<div
						style="position: relative; z-index: 2; width: 100%; height: 100%"
					>
						<img
							v-if="userData.picture != ''"
							:src="$baseurl + '/' + userData.picture"
							alt=""
							id="profile-picture_user"
						/>
					</div>

					<span
						@click="addProfileImage"
						class="add-image"
						style="bottom: 0px; right: 0px"
						id="add-profile-image-button"
						v-if="state == 'profile'"
					>
						<div style="display: none">
							<input
								type="file"
								id="add-profile-button"
								ref="profileFile"
								@change="loadProfilePic"
								accept="image/x-png,image/jpeg"
							/>
						</div>
						<i class="fa-regular fa-square-plus add-image-icon" />
					</span>
				</div>
				<!-- //////////////////////////////////// -->
				<!-- incase of avatar pic preview -->
				<div class="profile-avatar" v-else>
					<img :src="userData.picture" alt="" />
				</div>
				<!-- //////////////////////////// -->
				<!-- incase of profile picture display name , user name style -->
			</div>
			<div style="margin-bottom: 8px" v-if="!isAvatar">
				<h4
					v-if="userData.displayName != ''"
					class="profile-displayedname"
					id="profile-displayed-name"
				>
					{{ userData.displayName }}
					<svg
						v-if="userData.nsfw"
						id="profile-nsfw"
						class="Wb4wBt474lETdwG0YpWID"
						viewBox="0 0 40 40"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						fill="#ff4500"
						margin-left="4px"
						vertical-align="middle"
						height="20px"
					>
						<title>NSFW - Adult Content</title>
						<g>
							<path
								fill="inherit"
								d="M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
							></path>
						</g>
					</svg>
				</h4>
				<router-link
					:to="`/user/${
						state == ' profile' ? userName : this.$route.params.userName
					}`"
					id="profile-pic-user-name"
					class="profile-username"
					>u/{{
						state == ' profile' ? userName : this.$route.params.userName
					}}</router-link
				>
			</div>
			<!-- /////////////////////////////// -->
			<!-- incase of Avatar display name , user name style -->
			<div v-else>
				<h2 class="profile-name" id="profile-name">
					{{ userName || 'Agile_Relative7435' }}
				</h2>
				<p class="profile-desc" id="profile-desc">u/Agile_Relative7435 · 8d</p>
			</div>
			<!-- ////////////////////////////////////////////// -->
			<!-- avatar styling button -->
			<div
				v-if="state == 'profile'"
				class="profile-button"
				style="margin-bottom: 8px"
			>
				<button id="style-avatar">
					<i class="fa-solid fa-shirt avatar-style" />Style Avatar
				</button>
			</div>
			<!-- //////////////////// -->
			<!-- about profile box -->
			<div
				class="profile-about"
				id="user-profile-about-box"
				v-if="this.userData.about != ''"
			>
				{{ this.userData.about }}
			</div>
			<!-- ///////////////// -->
			<!-- profile items karma and cake day has two alignment for pic , avatar -->
			<div class="profile-items" :class="[isAvatar ? 'align-center' : '']">
				<span class="i karma">
					<h5>Karma</h5>
					<span>
						<p id="karma">
							<span><i class="fa-solid fa-fan" /></span>{{ userData.karma }}
						</p>
					</span>
				</span>
				<span class="i cake-day">
					<h5>Cake day</h5>
					<span v-if="userData.cakeDate != null">
						<p id="birth-date">
							<span><i class="fa-solid fa-cake-candles" /></span
							>{{ getMonthName(userData.cakeDate.slice(5, 7)) }}
							{{ userData.cakeDate.slice(8, 10) }},{{
								userData.cakeDate.slice(0, 4)
							}}
						</p>
					</span>
				</span>
			</div>
			<div
				class="profile-items"
				v-if="userData.followers && userData.followers.length != 0"
			>
				<router-link
					:to="`/user/${$route.params.userName}/followers`"
					style="color: inherit"
					class="i karma"
				>
					<h5>Followers</h5>
					<span>
						<p id="Followers">
							<span><i class="fa-solid fa-user"></i></span>{{ userData.karma }}
							<i style="margin-left: 12px" class="fa-solid fa-angle-right"></i>
						</p>
					</span>
				</router-link>
			</div>

			<!-- //////////////////////////////////////////// -->
			<!-- follow chat for other users -->
			<follow-chat-component
				v-if="state == 'user'"
				:blocked="userData.blocked"
				:followed="userData.followed"
			></follow-chat-component>
			<!-- /////////////////////////// -->
			<!-- Social link block  -->
			<sociallinks-block
				v-if="state == 'profile'"
				:social-data="userData.socialLinks"
			></sociallinks-block>
			<!-- ///////////////// -->
			<!-- New post button -->
			<button
				v-if="state == 'profile'"
				class="new-post"
				@click="$router.push(`${userName}/submit`)"
				id="profile-new-post"
			>
				New post
			</button>
			<!-- ////////////// -->
			<!-- more options button -->
			<button
				v-if="!(state != 'profile' && userData.blocked)"
				id="more-options-button"
				class="more-options"
				@click="toggleShowMoreOptions"
				v-show="!showMoreOptions"
			>
				More options
			</button>
			<!-- /////////////////// -->
			<!-- profile options -->
			<ul
				v-if="!(state != 'profile' && userData.blocked)"
				id="profile-options"
				class="profile-options"
				v-show="showMoreOptions"
			>
				<router-link
					v-for="profileOption in profileOptions"
					:key="profileOption.name"
					:to="profileOptionsToHandler(state, profileOption)"
					@click="profileOptionsClickHandler(state, profileOption)"
					:id="`profile-option-${profileOption.name}`"
					>{{ profileOption.name }}
				</router-link>
			</ul>
			<!-- /////////////// -->
			<!-- more options button -->
			<button
				v-if="!(state != 'profile' && userData.blocked)"
				id="fewer-options-button"
				class="fewer-options"
				v-show="showMoreOptions"
				@click="toggleShowMoreOptions"
			>
				Fewer options
			</button>
			<!-- ////////////////// -->
		</div>
	</div>
</template>

<script>
import SociallinksBlock from '../SocialLinksComponents/SociallinksBlock.vue';
import FollowChatComponent from './FollowChatComponent.vue';
export default {
	components: {
		SociallinksBlock,
		FollowChatComponent,
	},
	props: {
		// @vuese
		// user Name of the user
		userName: {
			type: String,
			required: true,
		},
		// @vuese
		// Data of user page ( name , photo url , birth date ,karma , .....)
		userData: {
			type: Object,
			required: true,
			// default: []
		},
		// @vuese
		// state profile page  or other user page
		state: {
			type: String,
			required: true,
		},
	},
	// mounted() {
	// 	this.userData = this.$store.getters['user/getUserData'];
	// 	console.log(this.userData);
	// 	this.uploadBanner();
	// },
	data() {
		return {
			showMoreOptions: false,
			addSocialLinkDialog: false,
			banner: this.userData.banner,
			myProfileOptions: [
				{
					id: 0,
					name: 'Profile Moderation',
					toLink: '/about/edit/moderation',
				},
				{
					id: 1,
					name: 'Add to Custom Feed',
					toLink: '',
				},
				{
					id: 2,
					name: 'Invite someone to chat',
					toLink: '',
				},
			],
			userProfileOptions: [
				{
					id: 0,
					name: 'Send Message',
					toLink: '/message/compose/?to=' /* add in html only user name */,
				},
				{
					id: 1,
					name: 'Block User',
					toLink: '',
				},
				{
					id: 2,
					name: 'Get Them Help and Support',
					toLink: '',
				},
				{
					id: 3,
					name: 'Report User',
					toLink: '',
				},
				{
					id: 4,
					name: 'Add to Cusrom Feed',
					toLink: '',
				},
			],
			isAvatar: false,
		};
	},
	computed: {
		/**
		 * @vuese
		 * change options from profile user options state to other user options state
		 * @arg no arg
		 */
		profileOptions() {
			if (this.state == 'profile') return this.myProfileOptions;
			return this.userProfileOptions;
		},
	},
	methods: {
		/**
		 * @vuese
		 * it handles when you click on the profile options block  for example block user ...
		 * @arg state this state to know if it is your profile page or other user page
		 * @arg profileOption this profileOption to know which option you want to click
		 */
		profileOptionsClickHandler(state, profileOption) {
			if (state != 'profile') {
				if (profileOption.id == 1) {
					// block user
					this.blockUser();
				}
			}
		},
		/**
		 * @vuese
		 * this methods handle a request for blocking a user
		 * @arg no
		 */
		async blockUser() {
			try {
				await this.$store.dispatch('user/blockUnblockUser', {
					baseurl: this.$baseurl,
					blockUnblockData: {
						username: this.$route.params.userName,
						block: true,
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		/**
		 * @vuese
		 * it handles profile option routing href(to)
		 * @arg no
		 */
		profileOptionsToHandler(state, profileOption) {
			if (state == 'profile') {
				if (profileOption.id == 0) {
					return `/user/${this.userName}${profileOption.toLink}`;
				} else {
					return '';
				}
			} else {
				return '';
			}
		},
		/**
		 * @vuese
		 * it toggle to Show or Hide user Options
		 * @arg no arg
		 */
		toggleShowMoreOptions() {
			this.showMoreOptions = !this.showMoreOptions;
			// console.log(this.userName, this.$route.props.userName);
		},
		/**
		 * @vuese
		 * this function act as a path when it get clicked to will reflect this click to input field
		 * to open box for adding Profile Image
		 * @arg no arg
		 */
		addProfileImage() {
			document.querySelector('#add-profile-button').click();
		},
		/**
		 * @vuese
		 * this function act as a path when it get clicked to will reflect this click to input field
		 * to open box for adding Profile Cover Image
		 * @arg no arg
		 */
		addCoverImage() {
			document.querySelector('#add-cover-button').click();
		},
		/**
		 * @vuese
		 * this function for upload an Profile Image for testing only after connecting to APi
		 * it will be removed
		 * @arg no arg
		 */
		async loadProfilePic(e) {
			// const file2 = await e.target.files[0];
			const file1 = e.target.files;
			const file = file1[0];

			// const file = await this.$refs.profileFile.files[0];
			const profilePictureUrl = await URL.createObjectURL(file);
			console.log(profilePictureUrl);
			document.querySelector('#profile-picture_user').src = profilePictureUrl;
			try {
				await this.$store.dispatch('user/AddProfilePicture', {
					baseurl: this.$baseurl,
					file,
					profilePictureUrl: this.$baseurl + profilePictureUrl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		/**
		 * @vuese
		 * this function for upload an Cover Image for testing only after connecting to APi
		 * it will be removed
		 * @arg no arg
		 */
		async loadCoverPic(e) {
			const file = e.target.files[0];
			const file2 = this.$refs.coverFile.files[0];
			const bannerImageUrl = URL.createObjectURL(file2);
			// const bannerImageUrl = URL.createObjectURL(file);
			document.querySelector(
				'#cover-picture'
			).style.backgroundImage = `url(${bannerImageUrl})`;
			let responseStatus;
			try {
				responseStatus = await this.$store.dispatch('user/AddProfileBanner', {
					baseurl: this.$baseurl,
					file,
					bannerImageUrl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			console.log(responseStatus);
		},
		/**
		 * @vuese
		 * change month date from number to its name
		 * @arg no arg
		 */
		getMonthName(monthNumber) {
			const monthNumberI = Number(monthNumber);
			const date = new Date();
			date.setMonth(monthNumberI - 1);
			return date.toLocaleString('en-US', { month: 'long' });
		},
	},
};
</script>

<style scoped>
* {
	--webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
ul {
	list-style: none;
	border-bottom: none;
}

a {
	text-decoration: none;
}
.align-center {
	align-items: center;
}
.card-prof {
	/* margin-left: 24px; */
	width: 100%;
}

.profile-card {
	/* width: 312px; */
	width: 100%;
	background-color: var(--main-white-color);
	display: flex;
	flex-direction: column;
	border: 1px solid var(--color-grey-light-4);
	padding: 12px;
	border-radius: 5px 5px 4px 4px;
	position: relative;
}

.cover-pic {
	height: 94px;
	width: calc(100% + 22px);
	background-color: #2d97d8; /* cover picture default color */
	/* background-image: url(../../assets/R.png); */
	background-size: cover;
	border-radius: 4px 4px 0 0;
	position: relative;
	left: -11px;
	top: -12px;
	/* margin-bottom: calc(160px + 12px + 0px - 94px);  */ /* this for avatar */
	/* 160 pic hieght 12px -> top Avatar , 0 for margin bottom , -94 cover height*/
	margin-bottom: 15px; /* this for picture */
}
.avatar-margin {
	margin-bottom: calc(160px + 12px + 0px - 94px);
}

.cover-pic .add-image {
	font-size: 20px;
	position: absolute;
	right: 15px;
	bottom: 8px;
	/* color: var(--main-white-color); */
	color: var(--color-blue-2);
}

span.add-image {
	position: relative;
	z-index: 50;
	color: var(--main-white-color);
	cursor: pointer;
}
span.add-image i {
	z-index: 50;
	color: var(--main-white-color);
}
.add-image::before {
	content: '';
	position: absolute;
	height: 35px;
	width: 35px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, calc(-50%));
	/* background: #ec0623; */
	background: var(--main-white-color);
	border: 1px solid var(--color-blue-2);
	border-radius: 50%;
	z-index: -1;
	/* opacity: 50%; */
}
.profile-settings {
	font-size: 20px;
	height: fit-content;
	position: absolute;
	right: 15px;
	bottom: -36px;
	/* color: var(--main-white-color); */
	/* border: 1px solid var(--color-blue-2); */
}
a.profile-settings:hover {
	color: #0d6efd;
}
.profile-avatar img {
	height: 160px;
	/* max-width: 120px; */
	position: absolute;
	/* top: 12px;  this for handling*/
	top: 18px;
	left: 50%;
	transform: translateX(-50%);
}
.profile-displayedname {
	font-size: 16px;
	line-height: 20px;
	margin: 4px 0;
	font-weight: 500;
	color: #222222;
}
.profile-username {
	font-size: 12px;
	line-height: 16px;
	/* margin-top: 4px; */
	margin-bottom: 8px;
	font-weight: 500;
	color: #222222;
}
.profile-picture {
	position: absolute;
	width: 86px;
	height: 86px;
	padding: 3px;
	/* margin-left: -3px; */
	/* margin-top: 16px; */
	top: calc(16px + 15px);
	left: 12px;
	background-color: var(--main-white-color);
	border-radius: 6px;
	box-sizing: border-box;
}
.profile-picture img {
	width: 100%;
	height: 100%;
	/* background-color: #ec0623; */
	border-radius: 4px;
	object-fit: cover;
	object-position: top;
	border: 1px solid var(--color-grey-light-10);
}

.profile-name {
	color: var(--color-dark-2);
	text-align: center;
	/* margin: 5px; */
	/* line-height: 40px; */
}

.profile-desc {
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	margin: 0px 4px 4px 4px;
	color: var(--color-grey-light-4);
}

.profile-button {
	width: 100%;
}

.profile-button button {
	width: 100%;
	text-align: center;
	background: linear-gradient(90deg, #ec0623, #ff8717);
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: capitalize;
	line-height: 17px;
	border-radius: 999px;
	padding: 8px 16px;
	cursor: pointer;
	position: relative;
	border: none;
}

.profile-about {
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: var(--color-dark-3);
	/* margin-bottom: 8px; */
	margin-top: 8px;
}

.avatar-style {
	position: absolute;
	left: 15px;
}

.profile-button button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
	/* opacity: .08; */
}

.profile-button button:hover::before {
	opacity: 0.08;
}

.profile-items {
	display: block;
	/* height: 52px; */
	margin-bottom: 12px;
}

.profile-items {
	display: flex;
	/* justify-content: space-between; */
	/* align-items: center; */ /* in case if no abut un commet this  */
	color: var(--color-dark-2);
	flex-wrap: wrap;
	/* margin-bottom: 13px; */
}
.profile-items span.i.karma {
	flex: 1 1 50%;
}
.profile-items span.i.cake-day {
	flex: 1 1 50%;
}
.profile-items h5 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
}

.profile-items .i {
	margin-top: 5px;
	min-width: fit-content;
	/* margin-left: 15px; */
	/* flex-basis: 1; */
}

.profile-items .i span p {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #818384;
	/* margin-left: 4px;  */
	/* will added later for icon */
}
.karma p span {
	margin-right: 4px;
	color: #24a0ed;
}

.cake-day p span {
	margin-right: 4px;
	color: #24a0ed;
	flex: 1 1 50%;
}
.social-link {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 8px;
}

.social-link button {
	background-color: var(--color-grey-dark-5);
	border-radius: 9999px;
	color: var(--color-dark-3);
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	cursor: pointer;
	margin-right: 8px;
	padding: 10px 12px;
	text-align: center;
	line-height: 16px;
	display: flex;
	align-items: center;
	border: none;
}
.social-link button span {
	font-size: 20px;
	margin-right: 8px;
	vertical-align: middle;
	font-weight: 500;
}
.social-link-image {
	height: 16px;
	width: 16px;
	margin-right: 8px;
}
button.new-post {
	width: 100%;
	margin-top: 10px;
	text-align: center;
	color: var(--main-white-color);
	background-color: var(--color-blue-2);
	border-radius: 9999px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	padding: 4px 16px;
	cursor: pointer;
	position: relative;
	border: none;
}

button.new-post::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
}

button.new-post:hover::before {
	opacity: 0.08;
}

ul.profile-options {
	margin-top: 12px;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	cursor: pointer;
	display: block;
}

ul.profile-options a {
	display: block;
	height: 24px;
	width: fit-content;
	display: flex;
	align-items: center;
	margin-top: 8px;
	color: var(--color-blue-2);
	position: relative;
	padding: 4px 8px;
}
ul.profile-options a::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--color-dark-3);
	z-index: 55;
	opacity: 0;
}
ul.profile-options a {
	color: var(--color-blue-2);
}

button.more-options,
button.fewer-options {
	position: relative;
	left: calc(286px - 121.89px);
	background-color: transparent;
	border-radius: 9999px;
	width: fit-content;
	color: var(--color-blue-2);
	padding: 4px 16px;
	border: 1px solid transparent;
	min-height: 32px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	margin-top: 12px;
	cursor: pointer;
	position: relative;
}

button.more-options::before,
button.fewer-options::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--color-dark-3);
	z-index: 55;
	opacity: 0;
}

button.more-options:hover::before,
button.fewer-options:hover::before,
ul.profile-options a:hover::before {
	opacity: 0.08;
}

/* @media (max-width: 960px) {
	.profile-card {
		display: none;
	}
} */
input.insert-cover-image {
	position: absolute;
	height: 35px;
	width: 35px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, calc(-50%));
	border-radius: 50%;
	opacity: 0;
	cursor: pointer;
}
</style>

<template>
	<header class="header">
		<div class="header-logo" @click="goToHome()" id="reddit-logo">
			<img
				src="../../../img/logo.png"
				alt="reddit"
				class="header-logo"
				id="logo-img"
			/>
			<img
				src="../../../img/reddit.png"
				alt="reddit"
				class="header-reddit"
				id="reddit-name"
			/>
		</div>
		<div class="header-home" @click="showHomeSubMenu()" id="home-header">
			<div class="header-icon-home">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-house-door-fill header-user-nav-icon"
					viewBox="0 0 16 16"
					v-if="headerTitle == 'Home'"
					id="home-header-icon"
				>
					<path
						d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-plus-lg"
					viewBox="0 0 16 16"
					v-else-if="headerTitle == 'Create Post'"
					id="create-post-icon-1"
				>
					<path
						fill-rule="evenodd"
						d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
					/>
				</svg>
				<img
					src="../../../img/user-image.jpg"
					alt="img"
					class="header-user-nav-user-photo"
					v-else
					id="header-icon-user-image"
				/>
				<span>{{ headerTitle }}</span>
			</div>

			<svg
				class="header-user-nav-icon header-down-arrow"
				id="arrow-down-header"
			>
				<use xlink:href="../../../img/sprite.svg#icon-chevron-small-down" />
			</svg>
			<ul
				class="sub-menu sub-menu-2"
				v-if="homeSubMenuDisplay"
				id="home-sub-menu-1"
			>
				<li>
					<input
						type="text"
						class="input-filter"
						placeholder="Filter"
						id="input-filter"
					/>
				</li>
				<h4 class="heading-4">Your Communities</h4>
				<li class="setting-choice">
					<div class="settings-box" id="create-community">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-plus-lg"
							viewBox="0 0 16 16"
							id="create-community-icon"
						>
							<path
								fill-rule="evenodd"
								d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
							/>
						</svg>
						Create Community
					</div>
				</li>
				<li class="setting-choice">
					<div class="settings-box" id="community-1">
						<img
							src="../../../img/user-image.jpg"
							alt="img"
							class="users-img"
							id="community-icon-1"
						/>
						r/announcements
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-star"
						viewBox="0 0 16 16"
						id="star-community-1"
					>
						<path
							d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
						/>
					</svg>
				</li>
				<li class="setting-choice">
					<div class="settings-box" id="community-2">
						<img
							src="../../../img/user-image.jpg"
							alt="img"
							class="users-img"
							id="community-icon-2"
						/>
						r/Makeup
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-star"
						viewBox="0 0 16 16"
						id="star-community-2"
					>
						<path
							d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
						/>
					</svg>
				</li>
				<h4 class="heading-4">Following</h4>
				<li class="setting-choice">
					<div class="settings-box" id="user-1">
						<img
							src="../../../img/user-image.jpg"
							alt="img"
							class="users-img"
							id="user-icon-1"
						/>
						u/Lamiaa
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-star"
						viewBox="0 0 16 16"
						id="star-user-1"
					>
						<path
							d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
						/>
					</svg>
				</li>
				<li class="setting-choice">
					<div class="settings-box" id="user-2">
						<img
							src="../../../img/user-image.jpg"
							alt="img"
							class="users-img"
							id="user-icon-2"
						/>
						u/sama
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-star"
						viewBox="0 0 16 16"
						id="star-user-2"
					>
						<path
							d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
						/>
					</svg>
				</li>
				<h4 class="heading-4">Feeds</h4>
				<li class="setting-choice" @click="goToHome()" id="go-to-home-page">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-house-door-fill home"
							viewBox="0 0 16 16"
							id="go-to-home-icon"
						>
							<path
								d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
							/>
						</svg>
						Home
					</div>
				</li>
				<li
					class="setting-choice"
					@click="goToSettings()"
					id="go-to-user-settings"
				>
					<div>
						<img
							src="../../../img/user-image.jpg"
							alt="img"
							class="users-img"
							id="go-to-user-settings-icon"
						/>
						User Settings
					</div>
				</li>
				<li class="setting-choice" @click="goToSubmit()" id="go-to-submit-page">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-plus-lg"
							viewBox="0 0 16 16"
							id="go-to-submit-page-icon"
						>
							<path
								fill-rule="evenodd"
								d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
							/>
						</svg>
						Create Post
					</div>
				</li>
			</ul>
		</div>
		<form action="#" class="search">
			<input
				type="text"
				class="header-search-input"
				placeholder="Search Reddit"
				id="header-search"
			/>
			<button class="header-search-button" id="header-search-button">
				<svg class="header-search-icon" id="header-search-icon">
					<use xlink:href="../../../img/sprite.svg#icon-magnifying-glass" />
				</svg>
			</button>
		</form>
		<nav class="header-user-nav">
			<div class="header-user-nav-icon-box header-popular" id="header-popular">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-arrow-up-right-circle header-user-nav-icon"
					viewBox="0 0 16 16"
					id="popular"
				>
					<title>Popular</title>
					<path
						fill-rule="evenodd"
						d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
					/>
				</svg>
			</div>

			<!-- <div class="user-nav__icon-box">
        <img
          src="../../../img/dollar-coin.png"
          alt="coins"
          class="user-nav__icon"
          title="Coin"
        />
      </div>

      | -->

			<div class="header-user-nav-icon-box" id="chat-icon-box">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-chat-dots header-user-nav-icon"
					viewBox="0 0 16 16"
					id="chat-icon"
				>
					<title>Chat</title>
					<path
						d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
					/>
					<path
						d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
					/>
				</svg>
				<span class="header-user-nav-notification" id="num-notification-chat"
					>2</span
				>
			</div>

			<div class="header-user-nav-icon-box" id="notifications-icon-box">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-bell header-user-nav-icon"
					viewBox="0 0 16 16"
					id="notifications-icon"
				>
					<title>Notifications</title>
					<path
						d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
					/>
				</svg>
				<span
					class="header-user-nav-notification"
					id="num-notification-notification"
					>2</span
				>
			</div>

			<div
				class="header-user-nav-icon-box"
				@click="goToSubmit()"
				id="go-to-submit-box"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-plus header-user-nav-icon header-plus"
					viewBox="0 0 16 16"
					id="create-post-icon-2"
				>
					<title>Create Post</title>
					<path
						d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
					/>
				</svg>
			</div>
			<div class="header-user-nav-box header-box" id="advertise-box">
				<button class="header-button-advertise">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-megaphone"
						viewBox="0 0 16 16"
						id="advertise-icon"
					>
						<path
							d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"
						/>
					</svg>
					Advertise
				</button>
			</div>

			<div
				class="header-user-nav-box header-user"
				@click="showSettingsSubMenu()"
				id="show-settings-submenu"
			>
				<img
					src="../../../img/user-image.jpg"
					alt="user photo"
					class="header-user-nav-user-photo"
					id="user-icon-settings-submenu"
				/>
				<span class="header-user-nav-online" />

				<div class="header-user-nav-user">
					<span class="header-user-nav-user-name" id="user-name">{{
						userName
					}}</span>
					<svg
						class="header-user-nav-icon header-icon-user"
						id="arrod-down-user-name"
					>
						<use xlink:href="../../../img/sprite.svg#icon-chevron-small-down" />
					</svg>

					<span class="header-user-nav-karma">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-stars header-star"
							viewBox="0 0 16 16"
							id="karma-star"
						>
							<path
								d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
							/>
						</svg>
						2 karma</span
					>
				</div>
				<ul class="sub-menu" v-if="settingsSubMenuDisplay" id="sub-menu-2">
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-person-circle"
							viewBox="0 0 16 16"
							id="person-circle"
						>
							<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
							<path
								fill-rule="evenodd"
								d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
							/>
						</svg>
						My Stuff
					</li>
					<li
						class="setting-choice"
						@click="showSettingsSubMenu()"
						id="online-status"
					>
						Online Status
						<switch-button id="online-status-button" />
					</li>
					<li
						class="setting-choice"
						@click="goToUserPage()"
						id="go-to-user-page"
					>
						Profile
					</li>
					<li
						class="setting-choice"
						@click="goToSettings()"
						id="go-to-settings"
					>
						User Settings
					</li>
					<div class="line"></div>
					<li id="view-profile">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-eye"
							viewBox="0 0 16 16"
							id="view-profile-icon"
						>
							<path
								d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
							/>
							<path
								d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
							/>
						</svg>
						View Options
					</li>
					<li
						class="setting-choice"
						@click="showSettingsSubMenu()"
						id="dark-mode"
					>
						Dark Mode
						<switch-button id="dark-mode-button" />
					</li>
					<li
						class="setting-choice-with-icon"
						id="logout"
						@click="handlelogout"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-box-arrow-in-right"
							viewBox="0 0 16 16"
							id="logout-icon"
						>
							<path
								fill-rule="evenodd"
								d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
							/>
							<path
								fill-rule="evenodd"
								d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
							/>
						</svg>
						Logout
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	props: {
		// @vuese
		//header title ex: Home, User Settings, u/username...
		headerTitle: {
			type: String,
			default: 'Home',
		},
	},
	data() {
		return {
			settingsSubMenuDisplay: false,
			homeSubMenuDisplay: false,
		};
	},
	methods: {
		// @vuese
		// Used to show or hide settings menu
		// @arg no argument
		showSettingsSubMenu() {
			this.settingsSubMenuDisplay = !this.settingsSubMenuDisplay;
		},
		// @vuese
		// Used to show or hide home menu
		// @arg no argument
		showHomeSubMenu() {
			this.homeSubMenuDisplay = !this.homeSubMenuDisplay;
		},
		// @vuese
		// Used to go to settings page
		// @arg no argument
		goToSettings() {
			this.$router.push('/settings');
		},
		// @vuese
		// Used to go to Home page
		// @arg no argument
		goToHome() {
			this.$router.push('/');
		},
		// @vuese
		// Used to go to submit page
		// @arg no argument
		goToSubmit() {
			this.$router.push('/submit');
		},
		// @vuese
		// Used to go to user page
		// @arg no argument
		goToUserPage() {
			this.$router.push(`/user/${this.$store.getters.getUserName}`);
		},
		// @vuese
		// Used handle logout action
		// @arg no argument
		async handlelogout() {
			try {
				await this.$store.dispatch('logout_handle');
				location.reload();
			} catch (error) {
				console.log('error');
				// this.error = err;
			}
		},
	},

	computed: {
		// Get usename
		userName() {
			// return this.$store.getters.getUserName;
			return localStorage.getItem('userName');
		},
	},
};
</script>

<style scoped>
.header {
	font-size: 1.4rem;
	height: 5rem;
	background-color: #fff;
	border-bottom: var(--line);
	width: auto;

	/* display: flex;
  justify-content: left;
  align-items: center; */
	display: grid;
	grid-template-columns: max-content 20% 25% max-content;
	grid-template-rows: max-content;
	grid-column-gap: 0rem;
	align-items: center;
	justify-content: left;
	border: var(--line-3);
	border-radius: 5px;
}

.header img {
	cursor: pointer;
}

.header-logo {
	margin-left: 0.4rem;
	display: flex;
	flex-direction: row;
}

.header-logo img {
	height: 4rem;
}

.header-icon-home {
	display: grid;
	grid-template-columns: min-content max-content min-content;
	/* width: 40rem; */
	grid-column-gap: 1rem;
	align-items: center;
	border: var(--line-3);
	border-radius: 5px;
	color: var(--color-dark-1);
}

.header-home {
	padding: 0.5rem;
	margin-left: 1rem;
	align-items: center;
	border: var(--line-3);
	border-radius: 5px;
	position: relative;
	cursor: pointer;
}

.header-down-arrow {
	position: absolute;
	top: 0.6rem;
	right: 0.5rem;

	display: flex;
	justify-content: center;
	align-items: center;
}

.header-home:hover,
.header-home:focus {
	border: var(--line);
}

.header-search {
	flex: 0 0 23%;
	/* width: 35rem; */

	display: flex;
	align-items: center;
	justify-content: center;
}

.header-search-input {
	font-family: inherit;
	font-size: inherit;
	background-color: var(--color-grey-light-2);
	color: inherit;
	border: none;
	padding: 0.7rem 2rem;
	border-radius: 100px;
	width: 100%;
	/* transition: all 0.2s; */
	margin-right: -3.75rem;
	border: var(--line-3);
}

.header-search-input:focus,
.header-search-input:hover {
	outline: navajowhite;
	border: var(--line-2);
	background-color: var(--color-white-1);
}

.header-search-input::-webkit-input-placeholder {
	font-weight: 50;
	color: var(--color-grey-dark-2);
}

.header-search-input:focus + .header-search-button,
.header-search-input:hover + .header-search-button {
	background-color: var(--color-white-1);
}

.header-search-button {
	border: none;
	/* background-color: var(--color-grey-light-3); */
}

.header-search-button:focus {
	outline: none;
}

.header-search-button:active {
	transform: translateY(2px);
}

.header-search-icon {
	height: 2rem;
	width: 2rem;
	fill: var(--color-grey-dark-2);
}

.header-user-nav {
	/* align-self: stretch; */
	width: 1rem;
	margin-left: 2rem;

	/* display: flex;
  align-items: center; */
	display: grid;
	grid-template-columns: repeat(7, min-content) max-content;
	grid-column-gap: 0.8rem;
	align-items: center;
	align-items: center;
}

.header-button-advertise {
	width: 11rem;
	height: 3rem;
	border: none;
	border-radius: 10rem;
	background-color: var(--color-grey-light-2);
}

.header-button-advertise:hover {
	background-color: var(--color-grey-light-4);
}

.header-user-nav > * {
	padding: 0 1.3rem;
	cursor: pointer;
	height: 80%;
	display: flex;
	align-items: center;
	border-radius: 0.3rem;
}

.header-user-nav > *:hover {
	background-color: var(--color-grey-light-2);
}

.header-user-nav-icon-box {
	position: relative;
}

.header-user-nav-icon {
	height: 1.9rem;
	width: 1.9rem;
	fill: var(--color-grey-dark-1);
}

.header-plus {
	height: 3.3rem;
	width: 3.3rem;
}

.header-user-nav-notification {
	font-size: 1rem;
	height: 1.9rem;
	width: 1.9rem;
	border-radius: 50%;
	background-color: var(--color-primary);
	color: #fff;
	position: absolute;
	/* top: 0.2rem;
  right: -.7rem; */
	top: 0.1rem;
	right: 0.1rem;
	border: var(--line-4);

	display: flex;
	justify-content: center;
	align-items: center;
}

.header-user-nav-box {
	margin-left: -1rem;
	border: var(--line-3);
	border-radius: 5px;
	height: 4.5rem;
	position: relative;
}

.header-user-nav-online {
	font-size: 1rem;
	height: 0.9rem;
	width: 0.9rem;
	border-radius: 50%;
	background-color: var(--color-green);
	color: #fff;
	position: absolute;
	top: 2.6rem;
	left: 3.9rem;
	border: var(--line-3);

	display: flex;
	justify-content: center;
	align-items: center;
}

.header-user-nav-box:hover,
.header-user-nav-box:focus {
	background-color: var(--color-white-1);
	border: var(--line);
}

.header-box:hover {
	border: var(--line-3);
}

.header-user-nav-user {
	display: grid;
	grid-template-columns: max-content;
	grid-template-rows: max-content;
	grid-column-gap: 0rem;
	align-items: center;
	border: var(--line-3);
	border-radius: 5px;
	width: 16rem;
}

.header-user-nav-user-photo {
	width: 2.5rem;
	height: 2.5rem;
	/* border-radius: 50%; */
	border-radius: 10%;
	margin-right: 0.3rem;
	margin-left: 0.9rem;
}

.header-user-nav-user-name {
	color: var(--color-dark-1);
	font-size: 1.1rem;
}

.header-user-nav-karma {
	color: var(--color-grey-dark-4);
	font-size: 1rem;
	font-weight: 600;
}

.header-star {
	fill: var(--color-primary);
}

.header-icon-user {
	position: absolute;
	right: 1rem;
}

.header-user {
	position: relative;
}

.line {
	border-bottom: var(--line);
}

.sub-menu {
	position: absolute;
	background-color: white;
	padding: 0px;
	right: 1rem;
	top: 5rem;
	border-radius: 5px;
	max-height: 40rem;
	overflow-y: auto;
	overflow-x: hidden;
	border: var(--line);
	width: 25rem;
	z-index: 90;
}

.sub-menu-2 {
	top: 3rem;
	left: 0rem;
	width: 26rem;
}

.sub-menu li {
	font-size: 15px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem;
	margin: 1rem 0;
}

.sub-menu li svg {
	fill: var(--color-grey-dark-2);
	width: 20px;
	height: 20px;
	margin-right: 10px;
}

.sub-menu li {
	padding: 0px 10px;
}

.setting-choice {
	color: var(--color-dark-1);
	padding: 1rem 2rem !important;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.setting-choice:hover,
.setting-choice-with-icon:hover {
	background-color: var(--color-grey-light-2);
}

.setting-choice-with-icon {
	color: var(--color-dark-1);
	padding: 1rem !important;
}

.users-img {
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1rem;
}

.input-filter {
	width: 100%;
	border: var(--line-3);
	padding: 0.3rem;
	background-color: var(--color-grey-light-1);
}

.input-filter:hover,
.input-filter:focus {
	outline: navajowhite;
	border: var(--line-2);
	background-color: var(--color-white-1);
}

.heading-4 {
	text-transform: uppercase;
	margin: 1rem;
	font-size: 1rem;
	font-weight: bold;
}

.sub-menu-2 div {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.2rem;
}

.color-black {
	color: black;
}

.home {
	fill: var(--color-dark-1) !important;
}

/* 1200px */
@media only screen and (max-width: 75em) {
	.header {
		grid-template-columns: max-content 20% 23% max-content;
	}

	.header-user-nav-user-name {
		display: none;
	}

	.header-user-nav-karma,
	.header-user-nav-user-name,
	.header-star {
		display: none;
	}

	.header-icon-user {
		left: 5rem;
	}

	.header-user-nav-user {
		width: 2rem;
	}
}

/* 1100px */
@media only screen and (max-width: 68.75em) {
	.header {
		grid-template-columns: max-content 10% 40% max-content;
	}

	.header-icon-home span,
	.color-black span {
		display: none;
	}

	.header-reddit {
		display: none;
	}
}

/* 900px */
@media only screen and (max-width: 56.25em) {
	.header {
		grid-template-columns: max-content 10% 30% max-content;
	}
}

/* 788px */
@media only screen and (max-width: 49.25em) {
	.header {
		grid-template-columns: max-content 10% 30% max-content;
	}

	.header-user-nav > * {
		padding: 0 0.7rem;
	}

	.header-user-nav-icon {
		height: 1.7rem;
		width: 1.7rem;
	}

	.header-popular {
		display: none;
	}
}

/* 635px */
@media only screen and (max-width: 40em) {
	.header-down-arrow {
		display: none;
	}
}

/* 520px */
@media only screen and (max-width: 32.5em) {
	.header-user {
		display: none;
	}
}

/* 400px */
@media only screen and (max-width: 25em) {
	.header {
		grid-template-columns: 10% 10% 30% auto;
	}

	.header-box {
		display: none;
	}

	.header-user-nav > * {
		padding: 0 0.9rem;
	}
}
</style>

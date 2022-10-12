<template>
  <header class="header">
    <div class="logo">
      <img src="../../../img/logo.png" alt="reddit" class="logo" />
      <img src="../../../img/reddit.png" alt="reddit" />
    </div>
    <div class="home">
      <div class="icon__home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-house-door-fill user-nav__icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
          />
        </svg>
        <span>Home</span>
      </div>
      <svg class="user-nav__icon">
        <use xlink:href="../../../img/sprite.svg#icon-chevron-small-down"></use>
      </svg>
    </div>
    <form action="#" class="search">
      <input type="text" class="search__input" placeholder="Search Reddit" />
      <button class="search__button">
        <svg class="search__icon">
          <use xlink:href="../../../img/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </form>
    <nav class="user-nav">
      <div class="user-nav__icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-up-right-circle user-nav__icon"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
          />
        </svg>
      </div>

      <div class="user-nav__icon-box">
        <img
          src="../../../img/dollar-coin.png"
          alt="coins"
          class="user-nav__icon"
        />
      </div>

      |

      <div class="user-nav__icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chat-dots user-nav__icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
          <path
            d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
          />
        </svg>
        <span class="user-nav__notification">2</span>
      </div>

      <div class="user-nav__icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bell user-nav__icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
          />
        </svg>
        <span class="user-nav__notification">2</span>
      </div>

      <div class="user-nav__icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus user-nav__icon plus"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </div>
      <div class="user-nav__box box">
        <button class="button-advertise">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-megaphone"
            viewBox="0 0 16 16"
          >
            <path
              d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"
            />
          </svg>
          Advertise
        </button>
      </div>

      <div class="user-nav__box">
        <img
          src="../../../img/user-image.jpg"
          alt="user photo"
          class="user-nav__user-photo"
        />
        <div class="user-nav__user">
          <span class="user-nav__user-name">asmaaadel0</span>
          <svg class="user-nav__icon icon-user">
            <use
              xlink:href="../../../img/sprite.svg#icon-chevron-small-down"
            ></use>
          </svg>

          <span class="user-nav__karma">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-stars star"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
              />
            </svg>
            2 karma</span
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  font-size: 1.4rem;
  height: 5rem;
  background-color: #fff;
  border-bottom: var(--line);

  /* display: flex;
  justify-content: left;
  align-items: center; */
  display: grid;
  grid-template-columns: max-content min-content 24% max-content;
  grid-template-rows: max-content;
  grid-column-gap: 0rem;
  align-items: center;
  justify-content: left;
  border: var(--line-3);
  border-radius: 5px;
}
img {
  cursor: pointer;
}
.logo {
  margin-left: 0.5rem;
  display: flex;
  flex-direction: row;
}
.logo img {
  height: 4rem;
}
.icon__home {
  display: grid;
  grid-template-columns: min-content min-content min-content;
  /* width: 40rem; */
  grid-column-gap: 1rem;
  align-items: center;
  border: var(--line-3);
  border-radius: 5px;
}
.home {
  padding: 0.5rem;
  margin-left: 0.5rem;
  display: grid;
  grid-template-columns: min-content min-content;
  /* width: 40rem; */
  grid-column-gap: 13rem;
  align-items: center;
  border: var(--line-3);
  border-radius: 5px;
}
.home:hover,
.home:focus {
  border: var(--line);
}

.search {
  flex: 0 0 23%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.search__input {
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
}
.search__input:focus,
.search__input:hover {
  outline: navajowhite;
  border: var(--line-2);
  background-color: var(--color-white-1);
}

.search__input::-webkit-input-placeholder {
  font-weight: 50;
  color: var(--color-grey-dark-2);
}
.search__input:focus + .search__button,
.search__input:hover + .search__button {
  background-color: var(--color-white-1);
}
.search__button {
  border: none;
  /* background-color: var(--color-grey-light-3); */
}

.search__button:focus {
  outline: none;
}

.search__button:active {
  transform: translateY(2px);
}
.search__icon {
  height: 2rem;
  width: 2rem;
  fill: var(--color-grey-dark-2);
}

.user-nav {
  /* align-self: stretch; */
  width: 1rem;
  margin-left: 4rem;

  /* display: flex;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(7, min-content) max-content;
  grid-column-gap: 0.8rem;
  align-items: center;
  align-items: center;
}

.button-advertise {
  width: 10rem;
  height: 3rem;
  border: none;
  border-radius: 10rem;
  background-color: var(--color-grey-light-2);
}
.button-advertise:hover {
  background-color: var(--color-grey-light-4);
}
.user-nav > * {
  padding: 0 0.3rem;
  cursor: pointer;
  height: 80%;
  display: flex;
  align-items: center;
}
.user-nav > *:hover {
  background-color: var(--color-grey-light-2);
}
.user-nav__icon-box {
  position: relative;
}
.user-nav__icon {
  height: 1.9rem;
  width: 1.9rem;
  fill: var(--color-grey-dark-1);
}

.plus {
  height: 3.3rem;
  width: 3.3rem;
}
.user-nav__notification {
  font-size: 0.8rem;
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  position: absolute;
  top: 0.2rem;
  right: -.7rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
.user-nav__box {
  margin-left: 0rem;
  border: var(--line-3);
  border-radius: 5px;
  height: 4.5rem;
  position: relative;
}
.user-nav__box:hover,
.user-nav__box:focus {
  background-color: var(--color-white-1);
  border: var(--line);
}
.box:hover {
  border: var(--line-3);
}
.user-nav__user {
  display: grid;
  grid-template-columns:  max-content;
  grid-template-rows: max-content;
  grid-column-gap: 0rem;
  align-items: center;
  border: var(--line-3);
  border-radius: 5px;
  width: 16rem;
}
.user-nav__user-photo {
  width: 2.5rem;
  height: 2.5rem;
  /* border-radius: 50%; */
  border-radius: 10%;
  margin-right: 0.3rem;
  margin-left: 0.9rem;
}
.user-nav__user-name {
  color: var(--color-dark-1);
  font-size: 1.1rem;
}
.user-nav__karma {
  color: var(--color-grey-dark-4);
  font-size: 1rem;
  font-weight: 600;
}
.star {
  fill: var(--color-primary);
}
.icon-user {
  position: absolute;
  right: 1rem;
}
@media only screen and (max-width: 31.25em) {
  .header {
    flex-wrap: wrap;
    align-content: space-around;
    height: 11rem;
  }
  .search {
    order: 1;
    flex: 0 0 100%;
    background-color: var(--color-grey-light-2);
  }
}

header a {
  text-decoration: none;
  color: #08c0c6;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
</style>

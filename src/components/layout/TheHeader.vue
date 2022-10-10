<template>
  <header class="header">
    <div class="logo">
      <img src="../../../img/logo.png" alt="reddit" class="logo" />
      <img src="../../../img/reddit.png" alt="reddit" />
    </div>
    <div class="home">
      <img src="../../../img/home.png" alt="home" />
      <!-- <img src="../../../img/arrow-down.png" alt="arrow" /> -->
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
        <svg class="user-nav__icon">
          <use xlink:href="../../../img/sprite.svg#icon-fire"></use>
        </svg>
      </div>

      <div class="user-nav__icon-box">
        <svg class="user-nav__icon">
          <use xlink:href="../../../img/sprite.svg#icon-chat"></use>
        </svg>
        <span class="user-nav__notification">2</span>
      </div>

      <div class="user-nav__icon-box">
        <svg class="user-nav__icon">
          <use xlink:href="../../../img/sprite.svg#icon-bell"></use>
        </svg>
        <span class="user-nav__notification">2</span>
      </div>

      <div class="user-nav__icon-box">
        <svg class="user-nav__icon">
          <use xlink:href="../../../img/sprite.svg#icon-plus"></use>
        </svg>
      </div>

      <div class="user-nav__box">
        <img
          src="../../../img/user-image.jpg"
          alt="user photo"
          class="user-nav__user-photo"
        />
        <div class="user-nav__user">
          <span class="user-nav__user-name">asmaaadel0</span>
          <svg class="user-nav__icon">
            <use
              xlink:href="../../../img/sprite.svg#icon-chevron-small-down"
            ></use>
          </svg>
          <span class="user-nav__karma">2 karma</span>
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
  grid-column-gap: 1rem;
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
.home {
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
  width: 90%;
  transition: all 0.2s;
  margin-right: -3.25rem;
}
.search__input:focus {
  outline: navajowhite;
  width: 100%;
  background-color: var(--color-grey-light-3);
  border: var(--line-2);
}
.search__input:hover {
  border: var(--line-2);
}

.search__input::-webkit-input-placeholder {
  font-weight: 100;
  color: var(--color-grey-light-4);
}
.search__input:focus + .search__button {
  background-color: var(--color-grey-light-3);
}
.search__button {
  border: none;
  background-color: var(--color-grey-light-3);
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
  align-self: stretch;
  width: 1rem;
  margin: 0;

  /* display: flex;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(4, min-content) max-content;
  grid-column-gap: 1.5rem;
  align-items: center;
  align-items: center;
}
.user-nav > * {
  /* padding: 0 1.7rem; */
  cursor: pointer;
  height: 100%;
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
  height: 2rem;
  width: 2rem;
  fill: var(--color-grey-dark-2);
}
.user-nav__notification {
  font-size: 0.8rem;
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  position: absolute;
  top: 1.5rem;
  right: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
.user-nav__box {
  margin-left: 22rem;
  border: var(--line-3);
  border-radius: 5px;
  height: 4.5rem;
}
.user-nav__box:hover,
.user-nav__box:focus {
  background-color: var(--color-white-1);
  border: var(--line);
}
.user-nav__user {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content;
  grid-column-gap: 7rem;
  align-items: center;
  border: var(--line-3);
  border-radius: 5px;
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

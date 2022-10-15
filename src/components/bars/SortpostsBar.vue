<template>
  <div class="content">
    <div class="box-1__1">
      <div class="icon__box clicked" @click="showSubMenu()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-airplane-fill icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"
          />
        </svg>
        <!-- <i class="fa-brands fa-space-awesome icon"></i> -->
        <span>{{ clicked }}</span>
        <svg class="arrow-icon icon">
          <use
            xlink:href="../../../img/sprite.svg#icon-chevron-small-down"
          ></use>
        </svg>
      </div>
    </div>
    <div class="box-1">
      <div
        class="icon__box"
        :class="{ clicked: clicked == 'Best' }"
        @click="selectSort('Best')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-airplane-fill icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"
          />
        </svg>
        <!-- <i class="fa-brands fa-space-awesome icon"></i> -->
        <span>Best</span>
      </div>

      <div
        class="icon__box"
        :class="{ clicked: clicked == 'Hot' }"
        @click="selectSort('Hot')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-fire icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
          />
        </svg>
        <!-- <i class="fa-brands fa-hotjar icon"></i> -->
        <span>Hot</span>
      </div>
      <div
        class="icon__box"
        :class="{ clicked: clicked == 'New' }"
        @click="selectSort('New')"
      >
        <!-- <i class="fa-regular fa-sun icon"></i> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-brightness-high icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
          />
        </svg>
        <span>New</span>
      </div>
      <div
        class="icon__box"
        :class="{ clicked: clicked == 'Top' }"
        @click="selectSort('Top')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-box-arrow-up icon"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
          />
        </svg>
        <!-- <i class="fa-solid fa-arrow-up-from-ground-water icon"></i> -->
        <span>Top</span>
      </div>
      <!-- for rising -->
      <!-- <div class="icon__box__setting">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots icon icon-setting"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
          />
        </svg>
      </div>  -->
    </div>
    <div class="box-2">
      <div class="icon__box">
        <!-- <i class="fa-regular fa-square-minus icon"></i> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-dash-square icon icon-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          />
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
        <svg class="arrow-icon icon">
          <use
            xlink:href="../../../img/sprite.svg#icon-chevron-small-down"
          ></use>
        </svg>
      </div>
    </div>
    <ul class="subMenu" v-if="showMenu">
      <li
        class="icon__box"
        :class="{ clicked: clicked == 'Best' }"
        @click="selectSort('Best')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-airplane-fill icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"
          />
        </svg>
        <!-- <i class="fa-brands fa-space-awesome icon"></i> -->
        <span>Best</span>
      </li>

      <li
        class="icon__box"
        :class="{ clicked: clicked == 'Hot' }"
        @click="selectSort('Hot')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-fire icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
          />
        </svg>
        <!-- <i class="fa-brands fa-hotjar icon"></i> -->
        <span>Hot</span>
      </li>
      <li
        class="icon__box"
        :class="{ clicked: clicked == 'New' }"
        @click="selectSort('New')"
      >
        <!-- <i class="fa-regular fa-sun icon"></i> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-brightness-high icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
          />
        </svg>
        <span>New</span>
      </li>
      <li
        class="icon__box"
        :class="{ clicked: clicked == 'Top' }"
        @click="selectSort('Top')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-box-arrow-up icon"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
          />
        </svg>
        <!-- <i class="fa-solid fa-arrow-up-from-ground-water icon"></i> -->
        <span>Top</span>
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      clicked: "Best",
      showMenu: false,
    };
  },
  methods: {
    selectSort(title) {
      this.clicked = title;
    },
    showSubMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
  
  <style scoped>
.content {
  margin-top: 1.5rem;
  font-size: 1.4rem;
  height: 5.5rem;
  background-color: #fff;
  border-bottom: var(--line);
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  /* justify-content: left; */
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.content img {
  height: 5rem;
  cursor: pointer;
}
.box-1__1 {
  display: none;
}
.box-1 {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.box-1 > *,
.box-2 > *,
.box-1__1 > * {
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}

.box-1 > *:hover,
.box-2 > *:hover,
.box-1__1 > *:hover {
  background-color: var(--color-grey-light-2);
  border-radius: 2rem;
}
.icon {
  height: 2em;
  width: 2rem;
  margin: 0.6rem;
  fill: var(--color-grey-dark-3);
}
.arrow-icon {
  height: 2.5em;
  width: 2.5rem;
  margin: 0;
}
.icon-square {
  margin: 0;
}
.clicked {
  background-color: var(--color-grey-light-1);
  color: var(--color-blue-light);
  border-radius: 2rem;
}
.clicked .icon {
  fill: var(--color-blue-light);
}
.subMenu {
  display: flex;
  position: absolute;
  background-color: white;
  padding: 0px;
  left: 1rem;
  top: 4rem;
  box-shadow: 0px 2px 4px var(--color-grey-dark-2);
  border-radius: 5px;
}
.subMenu li {
  color: var(--color-grey-dark-2);
  font-size: 15px;
  font-weight: lighter;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.subMenu li:hover {
  background-color: var(--color-grey-light-2);
  border-radius: 2rem;
}
.subMenu li {
  padding: 0px 10px;
}
.subMenu li.clicked {
  background-color: var(--color-white-1);
}
@media only screen and (max-width: 40em) {
  .box-1{
    display: none;
  }
  .box-1__1{
    display: flex;
  }
}
</style>
  
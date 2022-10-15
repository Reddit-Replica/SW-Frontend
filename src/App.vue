<template>
  <the-header></the-header>
  <!-- <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <router-view></router-view>
      </div>
    </div>
  </div> -->
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

:root {
  --color-primary: #ff4500;
  --color-Primary-light: #ff5213;
  --color-Primary-dark: #f24303;

  --color-white-1: white;

  --color-grey-light-1: #faf9f9;
  --color-grey-light-2: #f4f2f2;
  --color-grey-light-3: #f0eeee;
  --color-grey-light-4: #ccc;

  --color-grey-dark-1: #333;
  --color-grey-dark-2: #777;
  --color-grey-dark-3: #999;
  --color-grey-dark-4: rgb(177, 176, 176);

  --color-dark-1: #000;

  --color-orange: #ff2c00;
  --color-blue: #6094fe;
  --color-green: rgb(62, 231, 62);

  --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  --shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);

  --line: 1px solid var(--color-grey-light-2);
  --line-2: 1px solid rgb(2, 2, 206);
  --line-3: 1px solid var(--color-white-1);
  --line-4: 2px solid var(--color-white-1);
  /* 2000px */
  --bp-largest-1: 125em;
  /* 1200px */
  --bp-largest: 75em;
  /* 1100px */
  --bp-large: 68.75em;
  /* 960 */
  --bp-meduim-1: 60em;
  /* 900px */
  --bp-medium: 56.25em;
  /* 788 */
  --bg-medium-2: 49.25em;
  /* 635 */
  --bg-medium-3: 40em;
  /* 600px */
  --bp-small: 37.5em;
  /* 520 */
  --bg-small-2: 32.5em;
  /* 500px */
  --bp-smallest: 31.25em;
  /* 400 */
  --bg-smallest-2: 25em;
}
* {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Open sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-grey-dark-2);
  background-image: linear-gradient(
    to right bottom,
    var(--color-grey-light-2),
    var(--color-grey-light-4)
  );
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 100vh;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-toو .route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
@media (max-width: 68.75em) {
  html {
    font-size: 50%;
  }
}
</style>

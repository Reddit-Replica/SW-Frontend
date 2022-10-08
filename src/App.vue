<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";


export default {
  name: "App",
  components: {
    TheHeader,
  },
  data() {
    return {
      colorGreyDark2: "#0099CC",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

:root {
  --color-primary: #eb2f64;
  --color-Primary-light: #ff3366;
  --color-Primary-dark: #ba265d;

  --color-white-1: white;

  --color-grey-light-1: #faf9f9;
  --color-grey-light-2: #f4f2f2;
  --color-grey-light-3: #f0eeee;
  --color-grey-light-4: #ccc;

  --color-grey-dark-1: #333;
  --color-grey-dark-2: #777;
  --color-grey-dark-3: #999;

  --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  --shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);

  --line: 1px solid var(--color-grey-light-2);
  --line-2: 1px solid rgb(2, 2, 206);
  --line-3: 1px solid var(--color-white-1);
  /* 1200px */
  --bp-largest: 75em;
  /* 1100px */
  --bp-large: 68.75em;
  /* 900px */
  --bp-medium: 56.25em;
  /* 600px */
  --bp-small: 37.5em;
  /* 500px */
  --bp-smallest: 31.25em;
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

<template>
  <div class="content">
    <img
      src="../../../img/reddit-white-grey.png"
      alt="reddit"
    >
    <form
      action="#"
      class="post"
    >
      <input
        type="text"
        class="search-post"
        placeholder="Create Post"
      >
      <button class="post__button" />
    </form>
    <div class="box">
      <div class="post-icon-box">
        <svg class="post-icon">
          <use xlink:href="../../../img/sprite.svg#icon-image-inverted" />
        </svg>
      </div>
      <div class="post-icon-box">
        <svg class="post-icon">
          <use xlink:href="../../../img/sprite.svg#icon-link" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  margin-top: 1.5rem;
  font-size: 1.4rem;
  height: 5.5rem;
  background-color: #fff;
  border-bottom: var(--line);
  border-radius: 0.5rem;

  display: flex;
  justify-content: left;
  align-items: center;
}
.content img {
  height: 5rem;
  cursor: pointer;
}
button {
  display: none;
}
.post {
  width: 78%;
}
.box {
  margin: 0;

  display: flex;
  align-items: center;
}
.box > * {
  padding: 0 0.2rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
}

.box > *:hover {
  background-color: var(--color-grey-light-2);
}
.post-icon {
  height: 2rem;
  width: 2rem;
  margin: 0.6rem;
  fill: var(--color-grey-dark-3);
}

.search-post {
  font-family: inherit;
  font-size: inherit;
  background-color: var(--color-grey-light-2);
  color: inherit;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  width: 98%;
  transition: all 0.2s;
  margin-right: -3.25rem;
}
.search-post:focus {
  outline: navajowhite;
  border: var(--line-2);
  background-color: var(--color-white-1);
}
.search-post:hover {
  border: var(--line-2);
  background-color: var(--color-white-1);
}
@media only screen and (max-width: 60em) {
  .post {
    width: 87%;
  }
}
</style>

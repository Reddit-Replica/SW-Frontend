<template>
  <div class="content">
    <img src="../../../img/reddit-white-grey.png" alt="reddit" />
    <form action="#" class="post">
      <input type="text" class="search__post" placeholder="Create Post" />
      <button class="post__button"></button>
    </form>
    <div class="box">
      <div class="post__icon-box">
        <svg class="post__icon">
          <use xlink:href="../../../img/sprite.svg#icon-image-inverted"></use>
        </svg>
      </div>
      <div class="post__icon-box">
        <svg class="post__icon">
          <use xlink:href="../../../img/sprite.svg#icon-link"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  cursor: pointer;
}
.content {
  margin-top: 1.5rem;
  /* margin-left: 17rem; */
  font-size: 1.4rem;
  height: 5.5rem;
  /* width: 46%; */
  background-color: #fff;
  border-bottom: var(--line);

  display: flex;
  justify-content: left;
  align-items: center;
}
.content img {
  height: 5rem;
}
button {
  display: none;
}
.post {
  width: 80%;
}
.box {
  align-self: stretch;
  width: 4rem;
  margin: 0;

  display: flex;
  align-items: center;
}
.box > * {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}

.box > *:hover {
  background-color: var(--color-grey-light-2);
}
.post__icon {
  height: 2rem;
  width: 2rem;
  margin: 0.6rem;
  fill: var(--color-grey-dark-3);
}

.search__post {
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
.search__post:focus {
  outline: navajowhite;
  border: var(--line-2);
  background-color: var(--color-grey-light-3);
}
.search__post:hover {
  border: var(--line-2);
}
</style>

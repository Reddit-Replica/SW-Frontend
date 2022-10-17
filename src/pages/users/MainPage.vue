<template>
  <div class="wrapper container">
    <div class="row left-col">
      <div class="col-lg-12">
        <createpost-bar />
        <sortposts-bar />
        <base-post :post="post" />
      </div>
    </div>
    <div class="row right-col">
      <div class="col-lg-12">
        right
      </div>
    </div>
  </div>
</template>

<script>
import CreatepostBar from "../../components/bars/CreatepostBar.vue";
import SortpostsBar from "../../components/bars/SortpostsBar.vue";
import BasePost from "../../components/BaseComponents/BasePost.vue";
export default {
  components: {
    CreatepostBar,
    SortpostsBar,
    BasePost,
  },
  data() {
    return {
      colorGreyDark2: "#0099CC",
      post: {
        userName: "mena",
        voteCount: 22,
        subredditName: "sub-com",
        duration: "22 minutes",
        postName: "Hello World",
        postDescription: "post description",
        commentsCount: 22,
      },
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 30px;
}
.left-col {
  margin-left: 5rem;
}
.right-col {
  padding: 20px;
  margin-left: 15rem;
  margin-top: 4rem;
}
@media only screen and (max-width: 60em) {
  .container {
    max-width: 100%;
  }
  .wrapper {
    grid-template-columns: 100%;
  }
  .right-col {
    display: none;
  }
  .left-col {
    margin: auto;
    width: 100%;
  }
}
</style>

<template>
  <createpost-bar></createpost-bar>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <base-post :post="post"></base-post>
      </div>
    </div>
  </div>
</template>

<script>
import CreatepostBar from "../../components/bars/CreatepostBar.vue";
import BasePost from "../../components/BaseComponents/BasePost.vue";
export default {
  components: {
    CreatepostBar,
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

<style></style>

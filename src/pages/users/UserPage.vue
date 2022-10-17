<template>
  <profile-nav ></profile-nav>
  <base-container>
  <div class="profilebox">
  <createpost-bar></createpost-bar>
  <!-- <h1>user page</h1> -->
  <profile-card :userName="userName"></profile-card>
</div>
</base-container>
</template>

<script>
import ProfileCard from '../../components/UserComponents/ProfileCard.vue'
import BaseContainer from '../../components/BaseComponents/BaseContainer.vue';
import profileNav from '../../components/UserComponents/ProfileNav.vue';
import createpostBar from '../../components/bars/CreatepostBar.vue';
export default {
  props:{
    userName:{
      type:String,
      default:'Abdelhameed'
    }
  },
  components:{
    ProfileCard,
    BaseContainer,
    profileNav,
    createpostBar

  }
}
</script>

<style scoped>
.profilebox {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>

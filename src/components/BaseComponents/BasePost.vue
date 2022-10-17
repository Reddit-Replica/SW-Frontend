<template>
  <div class="postCard d-flex flex-row" v-if="!postHidden">
    <!-- section to display votes -->
    <div class="d-flex flex-column voteBox">
      <div class="upvote" @click="upvote">
        <svg
          class="icon icon-arrow-down p-1"
          :class="upClicked ? 'upClicked' : ''"
        >
          <use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
        </svg>
      </div>
      <div
        class="p-2 voteCount"
        :class="upClicked ? 'upClicked' : downClicked ? 'downClicked' : ''"
      >
        {{ counter }}
      </div>
      <div class="downvote" @click="downvote">
        <svg
          class="icon icon-arrow-down p-1"
          :class="downClicked ? 'downClicked' : ''"
        >
          <use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
        </svg>
      </div>
    </div>

    <!-- section to display post information -->
    <div class="postContent">
      <router-link :to="{ name: 'post', params: { postName: post.postName } }">
        <div class="subredditInfo">
          <span class="subredditImage"
            ><img src="../../../img/user-image.jpg" alt=""
          /></span>
          <span class="subredditName"
            ><router-link
              :to="{
                name: 'subreddit',
                params: { subredditName: post.subredditName },
              }"
              >{{ post.subredditName }}
            </router-link></span
          >
          <span>
            . Posted by .
            <router-link
              :to="{ name: 'user', params: { userName: post.userName } }"
            >
              {{ post.userName }} </router-link
            >&nbsp;{{ post.duration }} ago</span
          >
        </div>
        <div class="postTitle">
          <h3>{{ post.postName }}</h3>
        </div>
        <div class="postText">
          <p>{{ post.postDescription }}</p>
        </div>
        <div class="postServices">
          <span class="voteServices">
            <span class="upvote" @click="upvote">
              <svg
                class="icon icon-arrow-down p-1"
                :class="upClicked ? 'upClicked' : ''"
              >
                <use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
              </svg>
            </span>
            <span
              class="p-2 voteCount"
              :class="
                upClicked ? 'upClicked' : downClicked ? 'downClicked' : ''
              "
              >{{ counter }}</span
            >
            <span class="downvote" @click="downvote">
              <svg
                class="icon icon-arrow-down p-1"
                :class="downClicked ? 'downClicked' : ''"
              >
                <use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
              </svg>
            </span>
          </span>
          <ul class="services">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
              </svg>
              {{ post.commentsCount }} Comments
            </li>
            <li>
              <svg class="icon icon-gift">
                <use xlink:href="../../../img/postServices.svg#icon-gift"></use>
              </svg>
              Awards
            </li>
            <li>
              <svg class="icon icon-share">
                <use
                  xlink:href="../../../img/postServices.svg#icon-share"
                ></use>
              </svg>
              Share
            </li>
            <li>
              <svg class="icon icon-folder-download">
                <use
                  xlink:href="../../../img/postServices.svg#icon-folder-download"
                ></use>
              </svg>
              Save
            </li>
            <li @click="showSubMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
              </svg>
              <ul class="subMenu" v-if="subMenuDisplay">
                <li @click="hidePost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-slash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                    />
                    <path
                      d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                    />
                    <path
                      d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                    />
                  </svg>
                  Hide
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
                        <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                    </svg>
                    Report
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: this.post.voteCount,
      upClicked: false,
      downClicked: false,
      subMenuDisplay: false,
      postHidden: false,
    };
  },
  props: {
    post: Object,
  },
  methods: {
    upvote() {
      if (this.upClicked == false) {
        this.upClicked = true;
        this.counter++;
      } else {
        this.upClicked = false;
        this.counter--;
      }
      if (this.downClicked) {
        this.downClicked = false;
        this.counter++;
      }
    },
    downvote() {
      if (this.downClicked == false) {
        this.downClicked = true;
        this.counter--;
      } else {
        this.downClicked = false;
        this.counter++;
      }
      if (this.upClicked) {
        this.upClicked = false;
        this.counter--;
      }
    },
    showSubMenu() {
      this.subMenuDisplay = !this.subMenuDisplay;
    },
    hidePost() {
      this.postHidden = true;
    },
  },
};
</script>
<style scoped>
.postCard{
    background-color: white;
    border-radius: 5px;
    margin: 20px 0px;
}
.postCard:hover{
    outline: 1px solid;
}
.voteBox{
    background-color: var(--color-grey-light-2);
    text-align: center;
    border-radius: 5px 0px 0px 5px;
    width: 40px;
}
.voteBox .downvote svg,
.voteBox .upvote svg{
    width: 22px;
    height: 22px;
    fill: white;
}
.postServices .downvote svg,
.postServices .upvote svg{
    width: 22px;
    height: 22px;
    fill: var( --color-grey-dark-2);
}
.postServices .voteServices{
    display: none;
}
.voteBox .downvote:hover svg,
.voteBox .upvote:hover svg,
.voteBox .upvote svg.upClicked,
.voteBox .downvote svg.downClicked,
.postServices .downvote:hover svg,
.postServices .upvote:hover svg,
.postServices .upvote svg.upClicked,
.postServices .downvote svg.downClicked{
    background-color: var( --color-grey-light-4);
}
.voteBox svg.upClicked,
.postServices .voteServices svg.upClicked{
    fill: var(--color-orange);
}
.voteBox .voteCount.upClicked,
.postServices .voteServices .voteCount.upClicked{
    color: var(--color-orange);
}
.voteBox svg.downClicked,
.postServices .voteServices svg.downClicked{
    fill: var(--color-blue);
}
.voteBox .voteCount.downClicked,
.postServices .voteServices .voteCount.downClicked{
    color: var(--color-blue);
}
.postContent{
    padding: 10px;
}
.postContent .postTitle h3{
    color: black;
    margin: 10px 0px;
}
.postContent .postText p{
    color: black;
}
.postServices .services{
    padding: 0px;
    margin: 0px;
    display: inline;
}
.postServices .services >li{
    display: inline-block;
    list-style: none;
    height: 40px;
    text-align: center;
    line-height: 40px;
    padding: 0px 20px;
    border-radius: 5px;
    color: var( --color-grey-dark-2);
    font-weight: bold;
    font-size: 10px;
}
.postServices .services >li:hover{
    background-color: var( --color-grey-light-2);
}
.postServices .services >li >svg{
    width: 20px;
    height: 20px;
    fill: var( --color-grey-dark-2);
}
a{
    text-decoration: none;
}
.postCard .subredditInfo .subredditImage img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
.postCard .subredditInfo .subredditImage{
    padding-right: 5px;
}
.postCard .subredditInfo .subredditName a{
    font-weight: 700;
    color: black;
}
.postCard .subredditInfo .subredditName a:hover{
    text-decoration: underline;
}
.postCard .subredditInfo span:nth-of-type(3),
.postCard .subredditInfo span:nth-of-type(3) a{
    color: var(--color-grey-dark-2);
}
.postCard .subredditInfo span:nth-of-type(3) a:hover{
    text-decoration: underline;
}
.postCard .postContent .postServices .services >li:last-of-type{
    position: relative;
}
.postCard .postContent .postServices .services .subMenu{
    position: absolute;
    background-color: white;
    padding: 0px;
    left:0px;
    box-shadow: 0px 2px 4px var(--color-grey-dark-2);
    border-radius: 5px;
    }
.postCard .postContent .postServices .services .subMenu li{
    color: var(--color-grey-dark-2);
    font-size: 15px;
    font-weight: lighter;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.postCard .postContent .postServices .services .subMenu li:hover{
    color: black;
    background-color: var(--color-blue-light-2);
}
.postCard .postContent .postServices .services .subMenu li:first-of-type:hover{
    border-radius: 5px 5px 0px 0px;
}
.postCard .postContent .postServices .services .subMenu li:last-of-type:hover{
    border-radius: 0px 0px 5px 5px;
}
.postCard .postContent .postServices .services .subMenu li svg{
    fill: var(--color-grey-dark-2);
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.postCard .postContent .postServices .services .subMenu li:hover svg{
    fill: black;
}
.postCard .postContent .postServices .services .subMenu li{
    padding: 0px 10px;
}
.postCard .postContent .postServices .services .subMenu li:not(:last-of-type){
    border-bottom: 1px solid var(--color-grey-light-3);
}

@media (max-width: 767px){
    .voteBox{
        display: none !important;
    }
    .postServices .voteServices{
        display: inline !important;
    }
}
</style>

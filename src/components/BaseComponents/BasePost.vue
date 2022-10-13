<template>
<div class="postCard d-flex flex-row" v-if="!postHidden">
    <!-- section to display votes -->
        <div class="d-flex flex-column voteBox">
            <div class="upvote" @click="upvote">
                <svg class="icon icon-arrow-down p-1" :class="upClicked? 'upClicked':''"><use xlink:href="../../../img/vote.svg#icon-arrow-up"></use></svg>
            </div>
            <div class="p-2 voteCount" :class="upClicked? 'upClicked':downClicked? 'downClicked':''">{{counter}}</div>
            <div class="downvote" @click="downvote">
                <svg class="icon icon-arrow-down p-1" :class="downClicked? 'downClicked':''"><use xlink:href="../../../img/vote.svg#icon-arrow-down"></use></svg>           
            </div>
        </div>

    <!-- section to display post information -->
        <div class="postContent">
        <router-link :to="{name:'post', params: {postName: post.postName}}">
        <div class="subredditInfo">
            <span class="subredditImage"><img src="../../../img/user-image.jpg" alt=""></span>
            <span class="subredditName"><router-link :to="{name:'subreddit', params: {subredditName: post.subredditName}}">{{post.subredditName}} </router-link></span>
            <span> . Posted by . <router-link :to="{name:'user', params: {userName: post.userName}}"> {{post.userName}} </router-link>&nbsp;{{post.duration}} ago</span>
        </div>
        <div class="postTitle">
            <h3>{{post.postName}}</h3>
        </div>
        <div class="postText">
            <p>{{post.postDescription}}</p>
        </div>
        <div class="postServices">
            <span class="voteServices">
                <span class="upvote" @click="upvote">
                    <svg class="icon icon-arrow-down p-1" :class="upClicked? 'upClicked':''"><use xlink:href="../../../img/vote.svg#icon-arrow-up"></use></svg>
                </span>
                <span class="p-2 voteCount" :class="upClicked? 'upClicked':downClicked? 'downClicked':''">{{counter}}</span>
                <span class="downvote" @click="downvote">
                    <svg class="icon icon-arrow-down p-1" :class="downClicked? 'downClicked':''"><use xlink:href="../../../img/vote.svg#icon-arrow-down"></use></svg>           
                </span>
            </span>
            <ul class="services">
                <li>
                    <svg class="icon icon-bubble2"><use xlink:href="../../../img/postServices.svg#icon-bubble2"></use></svg>
                    {{post.commentsCount}} Comments
                </li>
                <li>
                    <svg class="icon icon-gift"><use xlink:href="../../../img/postServices.svg#icon-gift"></use></svg>
                    Awards
                </li>
                <li>
                    <svg class="icon icon-share"><use xlink:href="../../../img/postServices.svg#icon-share"></use></svg>
                    Share
                </li>
                <li>
                    <svg class="icon icon-folder-download"><use xlink:href="../../../img/postServices.svg#icon-folder-download"></use></svg>
                    Save
                </li>
                <li @click="showSubMenu">
                    <svg class="icon icon-list2"><use xlink:href="../../../img/postServices.svg#icon-list2"></use></svg>
                    <ul class="subMenu" v-if="subMenuDisplay">
                        <li @click="hidePost"><svg class="icon icon-eye-blocked"><use xlink:href="../../../img/postServices.svg#icon-eye-blocked"></use></svg>Hide</li>
                    </ul>
                </li>
            </ul>

        </div>
    </router-link>
    </div>
</div>
</template>
<script>
    export default{
        data(){
            return{
                counter: this.post.voteCount,
                upClicked: false,
                downClicked: false,
                subMenuDisplay: false,
                postHidden : false,
            }
        },
        props: {
            post: Object,
        },
        methods:{
            upvote(){
                if(this.upClicked == false)
                {
                    this.upClicked = true;
                    this.counter++;
                }
                else
                {
                    this.upClicked = false
                    this.counter--;
                }
                if(this.downClicked)
                {
                    this.downClicked = false;
                    this.counter++;
                }
            },
            downvote(){
                if(this.downClicked == false)
                {
                    this.downClicked = true;
                    this.counter--;
                }
                else
                {
                    this.downClicked = false
                    this.counter++;
                }
                if(this.upClicked)
                {
                    this.upClicked = false;
                    this.counter--;
                }
            },
            showSubMenu(){
                this.subMenuDisplay = !this.subMenuDisplay;
            },
            hidePost(){
                this.postHidden = true;
            }
        }
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
        border-bottom: 1px solid var(--color-grey-dark-2);
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

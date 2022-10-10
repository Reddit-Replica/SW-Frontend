<template>
<div class="postCard d-flex flex-row">
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
            <span class="subredditName"><router-link :to="{name:'subreddit', params: {subredditName: post.subredditName}}">{{post.subredditName}} </router-link></span>
            <span> Posted by . <router-link :to="{name:'user', params: {userName: post.userName}}"> {{post.userName}} </router-link></span>
            <span> {{post.duration}} ago</span>
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
            <ul>
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
                <li>
                    <svg class="icon icon-list2"><use xlink:href="../../../img/postServices.svg#icon-list2"></use></svg>
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
    .postServices ul{
        padding: 0px;
        margin: 0px;
        display: inline;
    }
    .postServices li{
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
    .postServices li:hover{
        background-color: var( --color-grey-light-2);
    }
    .postServices li svg{
        width: 20px;
        height: 20px;
        fill: var( --color-grey-dark-2);
    }
    a{
        text-decoration: none;
    }
    @media (max-width: 767px){
        .voteBox{
            display: none !important;
        }
        .postServices .voteServices{
            display: inline !important;
        }
        .postContent{
        padding: 10px;
        }
    }
</style>

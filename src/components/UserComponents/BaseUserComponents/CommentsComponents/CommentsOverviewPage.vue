<template>
	<div id="commentId" class="comment-container" style="padding-bottom: 8px">
		<comment-header :comment-data="commentData"></comment-header>

		<comment-content
			comment-type="overview"
			v-for="(commentContent, index) in commentData.data.comments"
			:key="index"
			:post-id="commentData.id"
			:post-title="commentData.data.post.title"
			:comment-content="commentContent"
		></comment-content>
	</div>
</template>
<script>
import CommentContent from './CommentContent.vue';
import CommentHeader from './CommentHeader.vue';
export default {
	components: {
		CommentContent,
		CommentHeader,
	},
	props: {
		commentData: {
			type: Object,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
};
</script>
<style scoped>
P,
a,
ul,
li {
	padding: 0;
	margin: 0;
}
.comment-container {
	width: 100%;
	background-color: #ffffff;
}
.comment-container header {
	border: thin solid #edeff1;
	/* border-width: 1px 1px 0; */
	margin-bottom: 0;
	margin-top: 4px;
	padding: 1px 1px 2px;
}
.comment-container header:hover {
	border: thin solid #898989 !important;
}
.comment-container header .content {
	padding: 8px 8px;
	display: flex;
	align-items: center;
	width: 100%;
}
.comment-icon {
	display: inline-block;
	font-size: 20px;
	margin-right: 8px;
}
.title-container {
	display: flex;
	align-items: center;
	line-height: 16px;
	font-size: 12px;
	flex-wrap: wrap;
}
.post-status span {
	border: 1px solid #a4a7a8;
	color: #a4a7a8;
	display: inline-block;
	height: 16px;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	border-radius: 2px;
	margin-right: 5px;
	line-height: 14px;
	padding: 0 4px;
}
.title-container .user-comment-name a {
	color: #0079d3;
	margin-right: 4px;
}
.title-container .user-comment-name a:hover {
	text-decoration: underline;
}
.post-status {
	display: flex;
	align-items: center;
	margin-left: 5px;
}
.posted-by {
	display: flex;
	align-items: center;
	margin-left: 5px;
	color: inherit;
}
.posted-by a {
	color: inherit;
}
.posted-by a:hover {
	text-decoration: underline;
}
.subreddit-name a {
	color: #1c1c1c;
	font-weight: 700;
	/* font-weight: bold; */
}

.subreddit-name a:hover {
	text-decoration: underline;
}
span.post-nsfw {
	border: 1px solid rgb(255, 88, 91) !important;
	color: rgb(255, 88, 91) !important;
}
span.post-oc {
	border: 1px solid rgb(0, 121, 211) !important;
	background-color: rgb(0, 121, 211) !important;
	color: rgb(255, 255, 255) !important;
	/* text-align: center; */
}
.flair-box {
	border-radius: 20px;
	padding: 2px 8px;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	display: inline-block;
	margin-right: 5px;
	overflow: hidden;
	/* background-color: rgb(100, 109, 115);
	color: rgb(255, 255, 255); */
	width: fit-content;
	transition: background-color 0.25s;
	/* display: flex; */
}
.flair-box:hover {
	opacity: 85%;
}

.comment-body {
	width: 100%;
}
.comment-body:hover {
	border: thin solid #898989;
}
.comment-body-container {
	padding: 10px 0 8px 8px;
}
.comment-box {
	display: flex;
	align-items: center;
}
.nested-comment-order {
	display: flex;
	align-self: stretch;
}
.nested-comment-order div {
	border-left: 2px dashed #edeff1;
	margin-right: 16px;
	align-self: stretch;
}
.comment-body-title {
	display: flex;
	align-items: center;
	font-size: 12px;
	color: #7c7c7c;
}
.comment-body-title a {
	color: inherit;
}
.comment-body-title a:first-child {
	color: #1c1c1c;
}
.comment-body-title a:hover {
	text-decoration: underline;
}
.comment-op {
	margin-left: 4px;
	color: #0079d3;
	text-transform: uppercase;
	font-weight: 700;
}
.comment-body-title p {
	margin-left: 4px;
}
.comment-date {
	margin-left: 4px;
}
.comment-content-data {
	padding: 2px 0;
	width: 100%;
	font-size: 14px;
	font-weight: 500;
	line-height: 21px;
	word-break: break-word;
	overflow: auto;
	/* padding-bottom: 1px;
	margin-bottom: -1px; */
}
.comment-options {
	display: flex;
	align-items: center;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	color: #878a8c;
	margin-left: -4px;
	margin-top: 8px;
}
.comment-options > ul {
	list-style: none;
	display: flex;
	cursor: pointer;
	align-items: center;
}
.comment-options > ul li {
	margin: 4px;
	transition: color 0.1s;
}
.comment-options > ul li.underline:not(:last-child):hover {
	text-decoration: underline;
	color: #1c1c1c;
}
/* .comment-options ul li:last-child:hover {
	background-color: rgba(26, 26, 27, 0.1);
} */
/* Post Options */
.post-options ul li,
.post-options ul li a {
	color: inherit;
	list-style: none;
	text-decoration: none;
	height: 36px;
	min-width: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.post-options ul li.post-option-item {
	/* padding: 8px; */
	padding: 0 8px 0 8px;
	margin-right: 4px;
	border-radius: 2px;
}
.post-options ul li.post-option-item .post-options-icon {
}
.post-options ul li.post-option-item .post-options-text {
	margin-left: 6px;
}
.post-options ul li.post-option-item p {
	font-size: 12px;
}
.post-options ul li.post-option-item:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
.post-options-icon {
	font-size: 20px;
}
.post-options {
	/* margin-top: 8px; */
}
.post-options ul {
	display: flex;
	flex-wrap: wrap;
	cursor: pointer;
}
.post-options ul li.post-option-item {
	display: flex;
}
.three-dot-icon-box {
	position: relative;
	display: flex;
	padding: 0 8px 0 8px;
	margin-right: 4px;
	border-radius: 2px;
}
.three-dot-icon-box:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
.options-box-list {
	position: absolute;
	top: 35px;
	left: 0px;
	z-index: 15;
	border: 1px solid #edeff1;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
	color: #1c1c1c;
	overflow: hidden;
	background-color: #ffffff;
}
.options-box-list ul {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}

.options-box-list i input[type='checkbox'] {
	width: 14px !important;
	height: 14px !important;
	display: flex !important;
}
.options-box-list .options-box-text label {
	position: relative;
	bottom: -0.4px;
}
.options-box-list ul li.options-box-item {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-transform: capitalize;
	white-space: nowrap;
	color: #878a8c;
	cursor: pointer;
	padding: 8px 16px 8px 8px;
	text-align: left;
	width: 100%;
}
.options-box-list ul li.options-box-item:not(:first-child) {
	border-top: 1px solid #edeff1;
}
.options-box-list ul li.options-box-item:hover {
	color: #1c1c1c;
	background-color: #e9f5fd;
}
.options-box-list ul li.options-box-item .options-box-icon {
	margin-right: 10px;
	font-size: 14px;
	display: flex;
}
/* End post Options */
/* tool tip  */
.post-tooltip {
	position: relative;
	display: inline-block;
	/* border-bottom: 1px dotted black; */
}

.post-tooltip .post-tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;
	position: absolute;
	z-index: 10;
	bottom: 150%;
	left: 50%;
	margin-left: -60px;
}

.post-tooltip .post-tooltiptext::after {
	content: '';
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: black transparent transparent transparent;
}

.post-tooltip:hover .post-tooltiptext {
	visibility: visible;
}
.comment-body:hover {
	border: unset;
}
</style>

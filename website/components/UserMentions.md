# UserMentions

## Props

<!-- @vuese:UserMentions:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|details of message|`Object`|`true`|{"id":"","text":"","senderUsername":"","receiverUsername":"","sendAt":"","subject":"","type":"","subredditName":"","postTitle":"","postId":"","commentId":"","numOfComments":"","isSenderUser":"","isReceiverUser":"","isRead":"","vote":"","postOwner":""}|
|index|index to handle unique ids and background color|`Number`|`true`|0|

<!-- @vuese:UserMentions:props:end -->


## Events

<!-- @vuese:UserMentions:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:UserMentions:events:end -->


## Methods

<!-- @vuese:UserMentions:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|calculateTime|calculate time|no argument|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|no argument|
|doneSuccessfully|handle load messages instead of refreshing|no argument|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|upvote|upvote on post|no argument|
|downvote|down vote on post|no argument|
|goFullComments|Used to go to full comments page|no argument|
|goContext|Used to go context page|no argument|
|replyFunction|// @vuese //handle upvote action // @arg no argument async upvote() { if (this.upClicked == false) { try { this.$store.dispatch('messages/voteComment', { id: this.message.id, direction: 1, baseurl: this.$baseurl, }); if (this.$store.getters['messages/votedSuccessfully']) { this.upClicked = true; } } catch (err) { this.errorResponse = err; this.upClicked = false; } } else { this.upClicked = false; } if (this.downClicked) { this.downClicked = false; } }, // @vuese //handle downvote action // @arg no argument async downvote() { if (this.downClicked == false) { try { this.$store.dispatch('messages/voteComment', { id: this.message.id, direction: -1, baseurl: this.$baseurl, }); if (this.$store.getters['messages/votedSuccessfully']) { this.downClicked = true; } } catch (err) { this.errorResponse = err; this.downClicked = false; } } else { this.downClicked = false; } if (this.upClicked) { this.upClicked = false; } }, show reply box or hide it|The argument is a string value representing if show or hide reply box|
|renderContent|handle rendering html code|no argument|

<!-- @vuese:UserMentions:methods:end -->



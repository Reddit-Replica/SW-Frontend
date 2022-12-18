# PostreplyComponent

## Props

<!-- @vuese:PostreplyComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|details of message|`Object`|`true`|{"id":"","text":"","senderUsername":"","receiverUsername":"","sendAt":"","subredditName":"","postTitle":"","postId":"","commentId":"","numOfComments":"","isRead":"","vote":"","postOwner":""}|
|index|index to handle unique ids and background color|`Number`|`true`|0|

<!-- @vuese:PostreplyComponent:props:end -->


## Events

<!-- @vuese:PostreplyComponent:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:PostreplyComponent:events:end -->


## Methods

<!-- @vuese:PostreplyComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|calculateTime|calculate time|no argument|
|blockAction|toggle remove action // @arg The argument is a string value representing if user click ok async removeAction(action) { this.removeUser = !this.removeUser; if (action == 'yes') { try { this.$store.dispatch('messages/deleteMessage', { id: this.message.commentId, type: 'comment', baseurl: this.$baseurl, }); if (this.$store.getters['messages/deleteMessageSuccessfully']) { this.disappear = true; } } catch (err) { this.errorResponse = err; this.disappear = false; } } }, handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|no argument|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|upvote|handle delete action async deleteAction(action) { this.deleteUser = !this.deleteUser; if (action == 'yes') { try { this.$store.dispatch('messages/deleteMessage', { id: this.message.commentId, type: 'comment', baseurl: this.$baseurl, }); if (this.$store.getters['messages/deleteMessageSuccessfully']) { this.disappear = true; } } catch (err) { this.errorResponse = err; this.disappear = false; } } }, upvote on post|The argument is a string value representing if user click ok no argument|
|downvote|down vote on post|no argument|
|replyFunction|show reply box or hide it|The argument is a string value representing if its show or hide|
|renderContent|handle rendering html code|no argument|
|goFullComments|Used to go to full comments page|no argument|
|goContext|Used to go context page|no argument|
|doneSuccessfully|handle load messages instead of refreshing|no argument|

<!-- @vuese:PostreplyComponent:methods:end -->



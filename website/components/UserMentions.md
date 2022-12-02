# UserMentions

## Props

<!-- @vuese:UserMentions:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|details of message|`Object`|`true`|{"id":"","text":"","type":"","senderUsername":"","receiverUsername":"","subredditName":"","postTitle":"","subject":"","sendAt":"","isReply":"","isRead":""}|
|index|index to handle unique ids and background color|`Number`|`true`|0|

<!-- @vuese:UserMentions:props:end -->


## Methods

<!-- @vuese:UserMentions:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|no argument|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|upvote|handle upvote action|no argument|
|downvote|handle downvote action|no argument|
|replyFunction|show reply box or hide it|The argument is a string value representing if show or hide reply box|

<!-- @vuese:UserMentions:methods:end -->



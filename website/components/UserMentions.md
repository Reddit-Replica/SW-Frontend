# UserMentions

## Props

<!-- @vuese:UserMentions:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|details of message|`Object`|`true`|{"id":"","text":"","type":"","senderUsername":"","receiverUsername":"","subredditName":"","postTitle":"","subject":"","sendAt":"","isReply":"","isRead":""}|
|count|counter to handle background color|`Number`|`true`|1|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:UserMentions:props:end -->


## Methods

<!-- @vuese:UserMentions:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|upvote|handle upvote action|no argument|
|downvote|handle downvote action|no argument|
|unreadAction|handle unread action|no argument|

<!-- @vuese:UserMentions:methods:end -->



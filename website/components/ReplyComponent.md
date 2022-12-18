# ReplyComponent

## Props

<!-- @vuese:ReplyComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|showReplyBox|show reply box prop|`Boolean`|`true`|false|
|index|index to handle unique ids|`Number`|`true`|0|
|id|id of the msg that this msg is a reply for|`String`|`true`|-|
|receiverUsername|receiver Username|`String`|`true`|-|
|senderUsername|sender Username|`String`|`true`|-|
|subject|subject|`String`|`true`|-|
|isMention|if the reply is mentions|`Boolean`|`false`|false|
|postId|post id|`String`|`false`|-|
|parentId|comment id|`String`|`false`|-|
|parentType|parent type|`String`|`false`|-|
|level|level of the comment|`Number`|`false`|0|
|subredditName|subreddit name|`String`|`false`|-|

<!-- @vuese:ReplyComponent:props:end -->


## Events

<!-- @vuese:ReplyComponent:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|hideReplyBox|-|-|
|doneSuccessfully|-|-|

<!-- @vuese:ReplyComponent:events:end -->


## Methods

<!-- @vuese:ReplyComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|changeTitle|change title to formatting or hide|no argument|
|formValidation|make form validation|no argument|
|replyFunction|show reply box or hide it, and handle request|The argument is a string value representing if its show or hide|
|replyCommentFunction|handle request of sending reply in user mention|no argument|

<!-- @vuese:ReplyComponent:methods:end -->



# AllinboxComponent

## Props

<!-- @vuese:AllinboxComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|details of message|`Object`|`true`|{"id":"","text":"","senderUsername":"","receiverUsername":"","sendAt":"","subject":"","type":"","subredditName":"","postTitle":"","postId":"","commentId":"","numOfComments":"","isSenderUser":"","isReceiverUser":"","isRead":"","vote":"","postOwner":""}|
|index|index to handle unique ids and background color|`Number`|`true`|0|

<!-- @vuese:AllinboxComponent:props:end -->


## Events

<!-- @vuese:AllinboxComponent:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:AllinboxComponent:events:end -->


## Methods

<!-- @vuese:AllinboxComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|calculateTime|calculate time|no argument|
|deleteAction|handle delete action|The argument is a string value representing if user click ok|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|no argument|
|doneSuccessfully|handle load messages instead of refreshing|no argument|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|replyFunction|show reply box or hide it|The argument is a string value representing if it's show or hide|

<!-- @vuese:AllinboxComponent:methods:end -->


## Computed

<!-- @vuese:AllinboxComponent:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|sendByMe|`booloean`|return handled if I'm a sender or reciever|No|
|isInvitation|-|if it's invitaion or not|No|

<!-- @vuese:AllinboxComponent:computed:end -->



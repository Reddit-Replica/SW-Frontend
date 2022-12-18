# UnreadMessage

## Props

<!-- @vuese:UnreadMessage:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|details of message|`Object`|`true`|{"id":"","text":"","senderUsername":"","receiverUsername":"","sendAt":"","subject":"","subredditName":"","isModerator":"","isSenderUser":"","isReceiverUser":""}|
|index|index to handle unique ids and background color|`Number`|`true`|0|

<!-- @vuese:UnreadMessage:props:end -->


## Methods

<!-- @vuese:UnreadMessage:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|calculateTime|calculate time|no argument|
|deleteAction|handle delete action|The argument is a string value representing if user click ok|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|no argument|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|replyFunction|show reply box or hide it|The argument is a string value representing if its show or hide|

<!-- @vuese:UnreadMessage:methods:end -->



# AllinboxComponent

## Props

<!-- @vuese:AllinboxComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|details of message|`Object`|`true`|{"id":"","text":"","type":"","senderUsername":"","receiverUsername":"","subredditName":"","postTitle":"","subject":"","sendAt":"","isReply":"","isRead":""}|
|count|counter to handle background color|`Number`|`true`|1|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:AllinboxComponent:props:end -->


## Methods

<!-- @vuese:AllinboxComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|deleteAction|handle delete action|The argument is a string value representing if user click ok|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|no argument|

<!-- @vuese:AllinboxComponent:methods:end -->



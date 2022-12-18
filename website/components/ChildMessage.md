# ChildMessage

## Props

<!-- @vuese:ChildMessage:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|childMessage|details of message|`Object`|`true`|{"msgID":"","senderUsername":"","text":"","receiverUsername":"","sendAt":"","subredditName":"","isSenderUser":"","isReceiverUser":""}|
|index|index to handle unique ids|`Number`|`true`|0|
|isInvitation|if it is an invitation or not|`Boolean`|`true`|false|
|expandd|if it is expand or collapse|`Boolean`|`true`|true|
|subject|the subject of the message|`String`|`true`|-|

<!-- @vuese:ChildMessage:props:end -->


## Events

<!-- @vuese:ChildMessage:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:ChildMessage:events:end -->


## Methods

<!-- @vuese:ChildMessage:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|doneSuccessfully|handle reload messages|no argument|
|calculateTime|calculate time|no argument|
|deleteAction|handle delete action|The argument is a string value representing if user click ok|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|no argument|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|expand|expand or collapse message details|The argument is a string value representing if its expand or collapse|
|replyFunction|show reply box or hide it|no argument|

<!-- @vuese:ChildMessage:methods:end -->


## Computed

<!-- @vuese:ChildMessage:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|getUserName|`string`|get username from local storage|No|

<!-- @vuese:ChildMessage:computed:end -->



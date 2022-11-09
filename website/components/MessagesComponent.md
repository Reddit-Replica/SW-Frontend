# MessagesComponent

## Props

<!-- @vuese:MessagesComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|-|`Object`|`true`|{"id":"","text":"","type":"","senderUsername":"","receiverUsername":"","sendAt":"","subject":"","isReply":"","isRead":""}|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:MessagesComponent:props:end -->


## Methods

<!-- @vuese:MessagesComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|deleteAction|handle delete action|The argument is a string value representing if user click ok|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|-|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|expand|expand or collapse message details|-|

<!-- @vuese:MessagesComponent:methods:end -->


## Computed

<!-- @vuese:MessagesComponent:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|getUserName|-|get username from store|No|
|ifMessageRecieved|-|check if user is reciever or sender|No|

<!-- @vuese:MessagesComponent:computed:end -->



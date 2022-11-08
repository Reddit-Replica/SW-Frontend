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
|deleteAction|handle delete action|-|
|blockAction|handle block action|-|
|unreadAction|handle unread action|-|
|spamAction|handle spam action|-|
|expand|expand or collapse message details|-|

<!-- @vuese:MessagesComponent:methods:end -->


## Computed

<!-- @vuese:MessagesComponent:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|getUserName|-|get username from store|No|
|ifMessageRecieved|-|check if user is reciever or sender|No|

<!-- @vuese:MessagesComponent:computed:end -->



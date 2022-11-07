# MessagesComponent

## Props

<!-- @vuese:MessagesComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|-|`Object`|`false`|{"text":"","type":"","senderUsername":"","receiverUsername":"","sendAt":"","subject":"","isReply":"","isRead":""}|

<!-- @vuese:MessagesComponent:props:end -->


## Methods

<!-- @vuese:MessagesComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|deleteAction|toggle delete action|-|
|blockAction|handle block action|-|
|unreadAction|handle unread action|-|
|expand|expand or collapse message details|-|

<!-- @vuese:MessagesComponent:methods:end -->


## Computed

<!-- @vuese:MessagesComponent:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|getUserName|-|get username from store|Yes|
|ifMessageRecieved|-|check if user is reciever or sender|No|

<!-- @vuese:MessagesComponent:computed:end -->



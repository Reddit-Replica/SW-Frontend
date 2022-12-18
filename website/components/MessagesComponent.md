# MessagesComponent

## Props

<!-- @vuese:MessagesComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|-|`Object`|`true`|{"id":"","isUser":"","subjectContent":"","subjectTitle":"","messages":[]}|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:MessagesComponent:props:end -->


## Events

<!-- @vuese:MessagesComponent:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:MessagesComponent:events:end -->


## Methods

<!-- @vuese:MessagesComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|doneSuccessfully|handle reload messages|no argument|
|calculateTime|calculate time|no argument|
|deleteAction|handle delete action|The argument is a string value representing if user click ok|
|blockAction|handle block action|The argument is a string value representing if user click ok|
|unreadAction|handle unread action|no argument|
|spamAction|handle spam action|The argument is a string value representing if user click ok|
|expand|expand or collapse message details|The argument is a string value representing if its expand or collapse|
|replyFunction|show reply box or hide it|The argument is a string value representing if its show or hide|

<!-- @vuese:MessagesComponent:methods:end -->


## Computed

<!-- @vuese:MessagesComponent:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|getUserName|`string`|get username from store|No|
|isInvitation|-|if it's invitaion or not|No|

<!-- @vuese:MessagesComponent:computed:end -->



# MessagesInbox

## Methods

<!-- @vuese:MessagesInbox:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadUserMessages|load messages from the store|The argument is a string value representing if i want to fetch after or before messages|
|doneSuccessfully|reload compose messages from the store|no argument|

<!-- @vuese:MessagesInbox:methods:end -->


## Computed

<!-- @vuese:MessagesInbox:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|after|`object string`|return all messages sent or recieved userMessages() { return this.$store.getters['messages/userMessages']; }, return if there is messages after|Yes|

<!-- @vuese:MessagesInbox:computed:end -->


## Watch

<!-- @vuese:MessagesInbox:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|userMessages|watch messages if it's empty|no argument|

<!-- @vuese:MessagesInbox:watch:end -->



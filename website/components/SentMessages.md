# SentMessages

## Methods

<!-- @vuese:SentMessages:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadSentMessages|load messages from the store|The argument is a string value representing if i want to fetch after or before messages|

<!-- @vuese:SentMessages:methods:end -->


## Computed

<!-- @vuese:SentMessages:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|after|`string`|// @vuese //return all messages sent or recieved // @type object sentMessages() { return this.$store.getters['messages/sentMessages']; }, return if there is messages after|Yes|

<!-- @vuese:SentMessages:computed:end -->


## Watch

<!-- @vuese:SentMessages:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|sentMessages|watch messages if it's empty|no argument|

<!-- @vuese:SentMessages:watch:end -->



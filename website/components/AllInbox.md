# AllInbox

## Methods

<!-- @vuese:AllInbox:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadInboxMessages|load compose messages from the store|The argument is a string value representing if i want to fetch after or before messages|
|doneSuccessfully|reload inbox messages from the store|no argument|

<!-- @vuese:AllInbox:methods:end -->


## Computed

<!-- @vuese:AllInbox:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|after|`string`|// @vuese //return inbox messages // @type object inboxMessages() { return this.$store.getters['messages/inboxMessages']; }, return if there is messages after|Yes|

<!-- @vuese:AllInbox:computed:end -->


## Watch

<!-- @vuese:AllInbox:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|messages|watch compose messages if it's empty|no argument|

<!-- @vuese:AllInbox:watch:end -->



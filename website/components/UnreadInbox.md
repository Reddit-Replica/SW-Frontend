# UnreadInbox

## Methods

<!-- @vuese:UnreadInbox:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadUnreadMessages|load unread messages from the store|The argument is a string value representing if i want to fetch after or before messages|

<!-- @vuese:UnreadInbox:methods:end -->


## Computed

<!-- @vuese:UnreadInbox:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|after|`object string`|return unread messages unreadMessages() { return this.$store.getters['messages/unreadMessages']; }, return if there is messages after|Yes|

<!-- @vuese:UnreadInbox:computed:end -->


## Watch

<!-- @vuese:UnreadInbox:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|unreadMessages|watch unread messages if it's empty|no argument|

<!-- @vuese:UnreadInbox:watch:end -->



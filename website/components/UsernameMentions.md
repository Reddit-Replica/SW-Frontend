# UsernameMentions

## Methods

<!-- @vuese:UsernameMentions:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadUserMentions|load user mentions from the store|no argument|
|doneSuccessfully|reload compose messages from the store|no argument|

<!-- @vuese:UsernameMentions:methods:end -->


## Computed

<!-- @vuese:UsernameMentions:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|after|`string`|// @vuese //return user mentions // @type object userMentions() { return this.$store.getters['messages/userMentions']; }, return if there is messages after|Yes|

<!-- @vuese:UsernameMentions:computed:end -->


## Watch

<!-- @vuese:UsernameMentions:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|userMentions|watchmentions if it's empty|no argument|

<!-- @vuese:UsernameMentions:watch:end -->



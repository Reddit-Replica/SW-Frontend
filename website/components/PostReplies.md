# PostReplies

## Methods

<!-- @vuese:PostReplies:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadPostReplies|load post replies from the store|The argument is a string value representing if i want to fetch after or before messages|
|doneSuccessfully|reload post replies from the store|no argument|

<!-- @vuese:PostReplies:methods:end -->


## Computed

<!-- @vuese:PostReplies:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|after|`object string`|return post replies postReplies() { return this.$store.getters['messages/postReplies']; }, return if there is messages after|Yes|

<!-- @vuese:PostReplies:computed:end -->


## Watch

<!-- @vuese:PostReplies:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|postReplies|watch post replies if it's empty|no argument|

<!-- @vuese:PostReplies:watch:end -->



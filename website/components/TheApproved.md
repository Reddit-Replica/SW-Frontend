# TheApproved

## Methods

<!-- @vuese:TheApproved:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadListOfApproved|load approved list from the store|no argument|
|enterSearch|access value of search|The argument is a string value representing search input|
|seeAll|show all list of moderators|no argument|
|approveUserFunction|used to show add approve user popup|no argument|
|approveUser|handle approve user|no argument|
|doneSuccessfully|handle load approved instead of refreshing|The argument is a string value representing what is the action that done successfully|
|savePost|Used to show handle save action popup|the argument is the title used in show popup|
|unsavePost|Used to show handle unsave action popup|no argument|
|undoSaveUnsave|Used to show handle undo save action popup|no argument|

<!-- @vuese:TheApproved:methods:end -->


## Computed

<!-- @vuese:TheApproved:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|listOfApproved|`object`|return list of moderators|Yes|
|subredditName|`string`|return subreddit name|No|
|title|`string`|return title page|No|
|noApproved|`boolean`|return true if there is no approved, false otherwise|No|
|before|`string`|return if there is approved before|Yes|
|after|`string`|return if there is approved after|Yes|

<!-- @vuese:TheApproved:computed:end -->



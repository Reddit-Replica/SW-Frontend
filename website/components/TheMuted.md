# TheMuted

## Methods

<!-- @vuese:TheMuted:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadListOfMuted|load approved list from the store|no argument|
|enterSearch|access value of search|The argument is a string value representing search input|
|seeAll|show all list of moderators|no argument|
|showMuteUserFunction|Used to show add rule popup|no argument|
|doneSuccessfully|handle load muted list instead of refreshing|The argument is a string value representing what is the action that done successfully|
|savePost|Used to show handle save action popup|the argument is the title used in show popup|
|unsavePost|Used to show handle unsave action popup|no argument|
|undoSaveUnsave|Used to show handle undo save action popup|no argument|

<!-- @vuese:TheMuted:methods:end -->


## Computed

<!-- @vuese:TheMuted:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|listOfMuted|`object`|return list of muted|Yes|
|subredditName|`string`|return subreddit name|No|
|noMuted|`boolean`|return true if there is no muted, false otherwise|No|
|before|`string`|return if there is muted before|Yes|
|after|`string`|return if there is nuted after|Yes|

<!-- @vuese:TheMuted:computed:end -->



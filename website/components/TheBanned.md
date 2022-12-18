# TheBanned

## Methods

<!-- @vuese:TheBanned:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|doneSuccessfully|handle load banned instead of refreshing|The argument is a string value representing what is the action that done successfully|
|savePost|Used to show handle save action popup|the argument is the title used in show popup|
|unsavePost|Used to show handle unsave action popup|no argument|
|undoSaveUnsave|Used to show handle undo save action popup|no argument|
|enterSearch|access value of search|The argument is a string value representing search input|
|seeAll|show all list of moderators|no argument|
|loadListOfBanned|load banned list from the store|no argument|
|showBanUserFunction|access value of search Used to show add rule popup|The argument is a string value representing search input no argument|

<!-- @vuese:TheBanned:methods:end -->


## Computed

<!-- @vuese:TheBanned:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|
|listOfBanned|`object`|return list of moderators|Yes|
|noBanned|`boolean`|return true if there is no banned, false otherwise|No|
|before|`string`|return if there is banned before|Yes|
|after|`string`|return if there is banned after|Yes|

<!-- @vuese:TheBanned:computed:end -->



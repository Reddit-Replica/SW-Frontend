# ModerationList

## Methods

<!-- @vuese:ModerationList:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|doneSuccessfully|handle load flairs instead of refreshing|The argument is a string value representing what is the action that done successfully|
|loadListOfModerators|load moderators list from the store|The argument is a string value representing if i want to fetch after or before messages|
|loadListOfInvitedModerators|load moderators invited list from the store|no argument|
|leaveModFunction|Used to handle leave moderation action|no argument|
|savePost|Used to show handle save action popup|the argument is the title used in show popup|
|unsavePost|Used to show handle unsave action popup|no argument|
|undoSaveUnsave|Used to show handle undo save action popup|no argument|
|enterSearch|access value of search|The argument is a string value representing search input|
|seeAll|show all list of moderators|no argument|
|handleInviteMod|handle clicking invite mod|no argument|
|handleLeaveMod|handle clicking leave mod|no argument|

<!-- @vuese:ModerationList:methods:end -->


## Computed

<!-- @vuese:ModerationList:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|listOfModerators|`object`|return list of moderators|Yes|
|listOfInvitedModerators|`object`|return list of invited moderators|Yes|
|before|`string`|return if there is moderators before|Yes|
|after|`string`|return if there is moderators after|Yes|
|subredditName|`string`|return subreddit name|No|
|title|`string`|return title to use in component|No|
|invitedMod|`boolean`|return true if there is an invited mod, false otherwise|No|

<!-- @vuese:ModerationList:computed:end -->



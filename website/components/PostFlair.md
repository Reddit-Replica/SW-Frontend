# PostFlair

## Methods

<!-- @vuese:PostFlair:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadListOfFlairs|load Rules list from the store|no argument|
|doneSuccessfully|handle load flairs instead of refreshing|The argument is a string value representing what is the action that done successfully|
|savePost|Used to show handle save action popup|the argument is the title used in show popup|
|unsavePost|Used to show handle unsave action popup|no argument|
|undoSaveUnsave|Used to show handle undo save action popup|no argument|
|showAddFlairFunction|Used to show add rule popup|no argument|
|reorderFlairs|Used to handle re-order flairs action|no argument|
|log|handle drag and drop action|The argument is the list of rules|
|saveReorderFlairs|Used to handle save reorder rules action|no argument|

<!-- @vuese:PostFlair:methods:end -->


## Computed

<!-- @vuese:PostFlair:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|
|listOfFlairs|`object`|return list of Rules|Yes|
|noFlairs|`boolean`|return true if there is no flairs, false otherwise|No|

<!-- @vuese:PostFlair:computed:end -->



# TheRules

## Methods

<!-- @vuese:TheRules:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|showAddRuleFunction|Used to show add rule popup|no argument|
|loadListOfRules|load Rules list from the store|no argument|
|reorderRules|Used to handle re-order rules action|no argument|
|log|handle drag and drop action|The argument is the list of rules|
|saveReorderRules|Used to handle save reorder rules action|no argument|
|doneSuccessfully|handle load rules instead of refreshing|no argument|
|savePost|Used to show handle save action popup|no argument|
|unsavePost|Used to show handle unsave action popup|no argument|
|undoSaveUnsave|Used to show handle undo save action popup|no argument|

<!-- @vuese:TheRules:methods:end -->


## Computed

<!-- @vuese:TheRules:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|Yes|
|listOfRules|`object`|return list of Rules|Yes|
|noRules|`boolean`|return true if there is no rules, false otherwise|No|

<!-- @vuese:TheRules:computed:end -->



# UnmoderatorView

## Props

<!-- @vuese:UnmoderatorView:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|listOfModerators|details of moderators|`Object`|`true`|{"username":"","nickname":"","dateOfModeration":"","permissions":""}|
|subredditName|subreddit name|`String`|`true`|-|

<!-- @vuese:UnmoderatorView:props:end -->


## Methods

<!-- @vuese:UnmoderatorView:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadListOfModerators|load moderators list from the store|no argument|
|enterSearch|access value of search|The argument is a string value representing search input|
|seeAll|show all list of moderators|no argument|

<!-- @vuese:UnmoderatorView:methods:end -->



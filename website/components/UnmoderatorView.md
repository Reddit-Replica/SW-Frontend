# UnmoderatorView

## Props

<!-- @vuese:UnmoderatorView:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|subredditName|subreddit name|`String`|`true`|-|

<!-- @vuese:UnmoderatorView:props:end -->


## Methods

<!-- @vuese:UnmoderatorView:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadListOfModerators|load moderators list from the store|The argument is a string value representing if i want to fetch before or after|
|enterSearch|access value of search|The argument is a string value representing search input|
|seeAll|show all list of moderators|no argument|

<!-- @vuese:UnmoderatorView:methods:end -->


## Computed

<!-- @vuese:UnmoderatorView:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|listOfModerators|`object`|return list of moderators|Yes|
|before|`string`|return if there is moderators before|Yes|
|after|`string`|return if there is moderators after|Yes|

<!-- @vuese:UnmoderatorView:computed:end -->



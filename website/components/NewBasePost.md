# NewBasePost

## Props

<!-- @vuese:NewBasePost:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|spam|details of spam|`Object`|`true`|{"id":"","type":"","data":{}}|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:NewBasePost:props:end -->


## Methods

<!-- @vuese:NewBasePost:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|calculateTime|calculate time|-|
|upvote|handle upvote action|no argument|
|downvote|handle downvote action|no argument|
|getSubreddit|load subreddit img|no argument|

<!-- @vuese:NewBasePost:methods:end -->


## Computed

<!-- @vuese:NewBasePost:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|

<!-- @vuese:NewBasePost:computed:end -->



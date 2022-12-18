# BasePost

## Props

<!-- @vuese:BasePost:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|spam|details of spam|`Object`|`true`|{"id":"","type":"","data":{}}|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:BasePost:props:end -->


## Methods

<!-- @vuese:BasePost:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|calculateTime|calculate time|no argument|
|upvote|handle upvote action|no argument|
|downvote|handle downvote action|no argument|
|getSubreddit|load subreddit img|no argument|
|approveFunction|handle approve action|no argument|

<!-- @vuese:BasePost:methods:end -->


## Computed

<!-- @vuese:BasePost:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|

<!-- @vuese:BasePost:computed:end -->




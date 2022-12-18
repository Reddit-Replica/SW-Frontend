# OverviewPost

## Props

<!-- @vuese:OverviewPost:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|postData|postData the full post Data|`Object`|`true`|-|
|post|-|`Object`|`false`|-|
|state|state authenticated or not|`Object`|`false`|-|
|page|page which page the component used|`String`|`false`|-|
|subredditPagePinned|-|`Boolean`|`false`|false|
|moderatorFlag|-|`Boolean`|`false`|false|

<!-- @vuese:OverviewPost:props:end -->


## Events

<!-- @vuese:OverviewPost:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|emitPopup|-|-|
|subredditPageHandler|-|-|

<!-- @vuese:OverviewPost:events:end -->


## Methods

<!-- @vuese:OverviewPost:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|CrossPostLinkHandler|handle the route of the cross post|no arg|
|postFlairRouteHandler|handle the route of the post flair|no arg|
|getMoment|convert from standard date to the moment from now|date the date to be converted|
|getAbbreviationsOfNumber|get abbreviation of the number (convert to K,M)|num the number to be converted|
|setPostHybridContent|get the content of the hybrid post|no arg|
|insightsPostToggle|toggle the view of the insights post|no arg|
|RequestInsightsData|Request the insights data|no arg|
|deletePost|hide the deleted post from the page|no arg|
|hidePost|hide the hidden post from the page|no arg|
|expandPostContent|expand Post to show its content|no arg|
|collapsePostContent|collapse post to hide its details content|no arg|
|upvote|handel the request upvote to the post|no arg|
|downvote|handel the request downvote to the post|no arg|

<!-- @vuese:OverviewPost:methods:end -->



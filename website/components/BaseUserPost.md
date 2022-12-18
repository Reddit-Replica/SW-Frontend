# BaseUserPost

## Props

<!-- @vuese:BaseUserPost:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|postData|postData the full post Data|`Object`|`true`|-|
|post|-|`Object`|`true`|-|
|state|state authenticated or not|`Object`|`true`|-|
|page|page which page the component used|`String`|`false`|-|

<!-- @vuese:BaseUserPost:props:end -->


## Methods

<!-- @vuese:BaseUserPost:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|CrossPostLinkHandler|handle the route of the cross post|no arg|
|postFlairRouteHandler|handle the route of the post flair|no arg|
|getMoment|convert from standard date to the moment from now|date the date to be converted|
|getAbbreviationsOfNumber|get abbreviation of the number (convert to K,M)|num the number to be converted|
|setPostHybridContent|get the content of the hybrid post|no arg|
|insightsPostToggle|toggle the view of the insights post|no arg|
|RequestInsightsData|Request the insights data|no arg|
|deletePost|savePost() { if (this.state == 'unauth') { this.$router.push('/'); return; } console.log('save'); }, sharePost() { if (this.state == 'unauth') { this.$router.push('/'); return; } console.log('share'); // this.showShareOptions = true; }, hide the deleted post from the page|no arg|
|hidePost|hide the hidden post from the page|no arg|
|expandPostContent|expand Post to show its content|no arg|
|collapsePostContent|collapse post to hide its details content|no arg|
|upvote|handel the request upvote to the post|no arg|
|downvote|handel the request downvote to the post|no arg|

<!-- @vuese:BaseUserPost:methods:end -->



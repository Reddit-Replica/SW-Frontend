# TheModeration

## Methods

<!-- @vuese:TheModeration:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadListOfModerators|load moderators list from the store|no argument|

<!-- @vuese:TheModeration:methods:end -->


## Computed

<!-- @vuese:TheModeration:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|
|listOfModerators|`object`|return list of moderators|Yes|
|getUserName|`string`|return user name|Yes|
|moderatorByMe|`boolean`|return if i'm a moderator in this subreddit or not|No|
|title|`string`|return title of moderation bar|No|
|banned|`boolean`|return banned bath|No|
|muted|`boolean`|return muted bath|No|
|approved|`boolean`|return approved bath|No|
|moderators|`boolean`|return moderators bath|No|
|postFlair|`boolean`|// @vuese // return rules bath // @type boolean rules() { return this.$route.path === '/r/' + this.subredditName + '/about/rules'; }, return post flair bath|No|
|scheduledPosts|`boolean`|return scheduled posts bath|No|
|contentControls|`boolean`|return content controls bath|No|
|barTitle|`string`|return title of button in fixed bar|No|

<!-- @vuese:TheModeration:computed:end -->



# TheModeration

## Methods

<!-- @vuese:TheModeration:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadListOfAllModerators|load moderators list from the store|no argument|
|showBarFunction|load moderators invited list from the store async loadListOfInvitedModerators() { try { await this.$store.dispatch('moderation/loadListOfInvitedModerators', { baseurl: this.$baseurl, subredditName: this.subredditName, }); } catch (error) { this.error = error.message || 'Something went wrong'; } }, Used to handle show left bar action|no argument no argument|

<!-- @vuese:TheModeration:methods:end -->


## Computed

<!-- @vuese:TheModeration:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|
|listOfAllModerators|`object`|return list of moderators|Yes|
|getUserName|`string`|// @vuese //return list of invited moderators // @type object listOfInvitedModerators() { return this.$store.getters['moderation/listOfInvitedModerators']; }, return user name|Yes|
|moderatorByMe|`boolean`|return if i'm a moderator in this subreddit or not|No|
|title|`string`|return title of moderation bar|No|
|banned|`boolean`|return banned bath|No|
|muted|`boolean`|return muted bath|No|
|approved|`boolean`|return approved bath|No|
|moderators|`boolean`|return moderators bath|No|
|postFlair|`boolean`|// @vuese // return rules bath // @type boolean rules() { return this.$route.path === '/r/' + this.subredditName + '/about/rules'; }, return post flair bath|No|

<!-- @vuese:TheModeration:computed:end -->



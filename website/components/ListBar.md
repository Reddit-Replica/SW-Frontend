# ListBar

## Props

<!-- @vuese:ListBar:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|title|title to be written in bar|`String`|`true`|-|
|subredditName|subreddit name|`String`|`true`|-|
|rulesCount|rules count|`Number`|`true`|0|
|dragDrop|if there is drag and drop or not|`Boolean`|`true`|false|
|showAddFlair|if clicked on add flair or not|`Boolean`|`true`|false|
|flairsCount|flairs count|`Number`|`true`|0|
|leftBar|to left bar or not|`Boolean`|`false`|false|

<!-- @vuese:ListBar:props:end -->


## Events

<!-- @vuese:ListBar:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|showAddRuleFunction|-|-|
|showAddFlairFunction|-|-|
|reorderRules|-|-|
|showBanUser|-|-|
|reorderFlairs|-|-|
|saveReorderRules|-|-|
|saveReorderFlairs|-|-|
|inviteMod|-|-|
|ApproveUser|-|-|
|MuteUser|-|-|
|leaveMod|-|-|
|showBar|-|-|

<!-- @vuese:ListBar:events:end -->


## Methods

<!-- @vuese:ListBar:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|showAddRuleFunction|Used to show add rule popup|no argument|
|showAddFlairFunction|Used to show add flair|no argument|
|reorderRules|Used to handle re-order rules action|no argument|
|showBanUser|Used to show ban user|no argument|
|reorderFlairs|Used to handle re-order flairs action|no argument|
|saveReorderRules|Used to handle saving re-order rules action|no argument|
|saveReorderFlairs|Used to handle saving re-order rules action|no argument|
|inviteMod|Used to handle invite moderator action|no argument|
|ApproveUser|Used to handle approve user action|no argument|
|MuteUser|Used to handle mute user action|no argument|
|leaveMod|Used to handle leave moderator action|no argument|
|showBarFunction|Used to handle show left bar action|no argument|

<!-- @vuese:ListBar:methods:end -->



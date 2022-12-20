# ListItem

## Props

<!-- @vuese:ListItem:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|moderator|details of moderator|`Object`|`true`|{"username":"","avatar":"","dateOfModeration":"","permissions":[]}|
|search|seacrhing value|`String`|`false`|-|
|index|index to handle unique ids|`Number`|`true`|0|
|invitedMod|if it's mod invitation|`Boolean`|`true`|false|

<!-- @vuese:ListItem:props:end -->


## Events

<!-- @vuese:ListItem:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:ListItem:events:end -->


## Methods

<!-- @vuese:ListItem:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|calculateTime|calculate time|-|
|sureShownFunction|used to show sure remove popup|no argument|
|removeInvitation|remove invitation request used to send remove invitation request|no argument|

<!-- @vuese:ListItem:methods:end -->


## Computed

<!-- @vuese:ListItem:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|show|`boolean`|at searching check if it is the value of seacrhing or not|No|
|subredditName|`string`|return subreddit name|No|

<!-- @vuese:ListItem:computed:end -->



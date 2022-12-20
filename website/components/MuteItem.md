# MuteItem

## Props

<!-- @vuese:MuteItem:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|mute|details of moderator|`Object`|`true`|{"username":"","avatar":"","dateOfMute":"","muteReason":""}|
|search|seacrhing value|`String`|`false`|-|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:MuteItem:props:end -->


## Events

<!-- @vuese:MuteItem:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:MuteItem:events:end -->


## Methods

<!-- @vuese:MuteItem:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|viewDetailsFunction|Used to show view Details|no argument|
|showAddBanFunction|Used to show add rule popup|no argument|
|doneSuccessfully|Used to show add rule popup|no argument|
|showUnMuteFunction|used to show sure unmute popup|no argument|
|Unmute|used to handle unmute request|no argument|

<!-- @vuese:MuteItem:methods:end -->


## Computed

<!-- @vuese:MuteItem:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|show|`boolean`|at searching check if it is the value of seacrhing or not|No|
|subredditName|`string`|return subreddit name|No|

<!-- @vuese:MuteItem:computed:end -->



# FlairItem

## Props

<!-- @vuese:FlairItem:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|flair|details of flair|`Object`|`true`|{"flairId":"","flairName":"","flairOrder":"","backgroundColor":"","textColor":""}|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:FlairItem:props:end -->


## Events

<!-- @vuese:FlairItem:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:FlairItem:events:end -->


## Methods

<!-- @vuese:FlairItem:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|showAddFlairFunction|Used to show add flair popup|no argument|
|doneSuccessfully|handle load flairs instead of refreshing|the argument is string value representing what is done successfully|
|clickDelete|Used to show delete flair popup|no argument|

<!-- @vuese:FlairItem:methods:end -->


## Computed

<!-- @vuese:FlairItem:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|
|show|`boolean`|at searching check if it is the value of seacrhing or not|No|

<!-- @vuese:FlairItem:computed:end -->



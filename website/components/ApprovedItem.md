# ApprovedItem

## Props

<!-- @vuese:ApprovedItem:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|approve|details of approve|`Object`|`true`|{"username":"","avatar":"","dateOfApprove":""}|
|search|seacrhing value|`String`|`false`|-|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:ApprovedItem:props:end -->


## Events

<!-- @vuese:ApprovedItem:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:ApprovedItem:events:end -->


## Methods

<!-- @vuese:ApprovedItem:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|calculateTime|calculate time|no argument|
|showApproveFunction|used to show sure approve popup|no argument|
|removeFunction|used to handle remove request|no argument|

<!-- @vuese:ApprovedItem:methods:end -->


## Computed

<!-- @vuese:ApprovedItem:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|show|`boolean`|at searching check if it is the value of seacrhing or not|No|
|subredditName|`object string`|return handled time after calculated it handleTime() { return this.$store.getters['moderation/handleTime']; }, return subreddit name|No|

<!-- @vuese:ApprovedItem:computed:end -->



# BanItem

## Props

<!-- @vuese:BanItem:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|ban|details of moderator|`Object`|`true`|{"username":"","userId":"","avatar":"","bannedAt":"","banPeriod":0,"modNote":"","noteInclude":"","reasonForBan":""}|
|search|seacrhing value|`String`|`false`|-|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:BanItem:props:end -->


## Events

<!-- @vuese:BanItem:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:BanItem:events:end -->


## Methods

<!-- @vuese:BanItem:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|viewDetailsFunction|Used to show view Details|no argument|
|showAddBanFunction|Used to show add rule popup|no argument|
|doneSuccessfully|Used to show add rule popup|no argument|
|calculateTime|calculate time|no argument|

<!-- @vuese:BanItem:methods:end -->


## Computed

<!-- @vuese:BanItem:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|show|`boolean`|at searching check if it is the value of seacrhing or not|No|
|subredditName|`string`|return subreddit name|No|

<!-- @vuese:BanItem:computed:end -->



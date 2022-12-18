# AddBan

## Props

<!-- @vuese:AddBan:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|banNameEdit|return edited ban name|`String`|`true`|-|
|banPeriodEdit|return ban period edit|`String`|`true`|-|
|banModNoteEdit|return ban mod note to edit|`String`|`true`|-|
|banNoteIncludeEdit|return ban note include tiedit|`String`|`true`|-|
|banReasonForEdit|return ban reason For to edit|`String`|`true`|None|
|edited|return if there is an edited rule|`Boolean`|`true`|false|

<!-- @vuese:AddBan:props:end -->


## Events

<!-- @vuese:AddBan:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|exit|Fire emit to close create community dialog|-|
|doneSuccessfully|-|-|

<!-- @vuese:AddBan:events:end -->


## Methods

<!-- @vuese:AddBan:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|hideBan|Hide dialog|no argument|
|charCount|Decrease characters count while typing|The argument is a string value representing the title of input we want to count char|
|loadListOfRules|load Rules list from the store|no argument|
|submitBan|handle submit ban user|no argument|
|unbanUser|handle submit ban user|no argument|
|deleteBan|handle delete ban|no argument|

<!-- @vuese:AddBan:methods:end -->


## Computed

<!-- @vuese:AddBan:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|
|listOfRules|`object`|return list of Rules|Yes|
|title|`object`|return title of popup|No|

<!-- @vuese:AddBan:computed:end -->



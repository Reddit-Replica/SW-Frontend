# AddFlair

## Props

<!-- @vuese:AddFlair:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|flairNameEdit|return edited flair name|`String`|`true`|-|
|backgroundColorEdit|return ed backgroundColor|`String`|`true`|posts and comments|
|textColorEdit|return report textColor edit|`String`|`true`|-|
|edit|return if there is an edited rule|`Boolean`|`true`|false|
|flairId|return flair id|`String`|`true`|-|

<!-- @vuese:AddFlair:props:end -->


## Events

<!-- @vuese:AddFlair:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|exit|Fire emit to close create community dialog|-|
|doneSuccessfully|-|-|

<!-- @vuese:AddFlair:events:end -->


## Methods

<!-- @vuese:AddFlair:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|hideAddFlair|Hide add flair|no argument|
|changeColor|Used to change pick color|the argument is the color picked|
|toggleTextColor|Used toggle text color|the argument is the type of the oldest color|
|viewPickerFunction|Used to toggle view picker|no argument|
|charCount|Decrease characters count while typing|no argument|
|submitFlair|handle submit adding flair|no argument|
|updateFlair|handle update flair|no argument|

<!-- @vuese:AddFlair:methods:end -->


## Computed

<!-- @vuese:AddFlair:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|

<!-- @vuese:AddFlair:computed:end -->



# GrowComponent

## Props

<!-- @vuese:GrowComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|index|Index of grow your community element|`Number`|`false`|0|
|color|Color of grow your community element|`String`|`false`|-|
|title|Main title of grow your community element|`String`|`false`|-|
|content|Description of grow your community element|`String`|`false`|-|
|link|Link to where of grow your community element should go|`String`|`false`|-|
|button|Button text of grow your community element|`String`|`false`|-|
|isShown|Is grow option shown/hidden|`Boolean`|`false`|true|

<!-- @vuese:GrowComponent:props:end -->


## Events

<!-- @vuese:GrowComponent:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|exit|this.shownAlone = !this.shownAlone;|-|

<!-- @vuese:GrowComponent:events:end -->


## Slots

<!-- @vuese:GrowComponent:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:GrowComponent:slots:end -->


## Methods

<!-- @vuese:GrowComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|hideAlone|Hide element when clicking on exit icon|no argument|

<!-- @vuese:GrowComponent:methods:end -->


## Computed

<!-- @vuese:GrowComponent:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|styleBack|-|Set background color with chosen color|No|
|styleFill|-|Set filling color with chosen color|No|

<!-- @vuese:GrowComponent:computed:end -->



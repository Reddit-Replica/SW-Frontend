# BaseDialog

## Props

<!-- @vuese:BaseDialog:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|show|Is dialog shown or not|`Boolean`|`true`|-|
|title|Title in dialog header|`String`|`false`|-|
|center|Is dialog title aligned to center or to left by default|`Boolean`|`false`|false|
|dialogClass|Style dialog|`String`|`false`|-|
|transparentBackground|Is dialog background transparent or not|`Boolean`|`false`|false|

<!-- @vuese:BaseDialog:props:end -->


## Events

<!-- @vuese:BaseDialog:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|close|Fire exit event when clicking on exit icon|-|

<!-- @vuese:BaseDialog:events:end -->


## Slots

<!-- @vuese:BaseDialog:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|header|-|-|
|default|-|-|

<!-- @vuese:BaseDialog:slots:end -->


## Methods

<!-- @vuese:BaseDialog:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|tryClose|Close dialog|-|
|isMobile|Check if screen is mobile|-|

<!-- @vuese:BaseDialog:methods:end -->



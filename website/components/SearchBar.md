# SearchBar

## Props

<!-- @vuese:SearchBar:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|emptyInput|if clicked in see all then value of searching should be ''|`String`|`true`|-|
|before|return if there is moderators before|`String`|`true`|-|
|after|return if there is moderators after|`String`|`true`|-|

<!-- @vuese:SearchBar:props:end -->


## Events

<!-- @vuese:SearchBar:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|enterSearch|Fire when entered search value|The argument is a string value representing search input|
|fetchBefore|Fire when fetch more moderators before|no argument|
|fetchAfter|Fire when fetch more moderators after|no argument|

<!-- @vuese:SearchBar:events:end -->


## Methods

<!-- @vuese:SearchBar:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|enterSearch|used to take action at entering value of search|no argument|
|fetchBefore|used to fetch more moderators before|no argument|
|fetchAfter|used to fetch more moderators after|no argument|

<!-- @vuese:SearchBar:methods:end -->


## Watch

<!-- @vuese:SearchBar:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|emptyInput|watch if clicked in see all then value of searching should be ''|no parameters|

<!-- @vuese:SearchBar:watch:end -->



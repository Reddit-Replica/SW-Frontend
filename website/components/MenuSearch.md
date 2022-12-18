# MenuSearch

## Props

<!-- @vuese:MenuSearch:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|titles|titles in sub menu|`Array`|`true`|-|
|display|should sub menu display or not|`Boolean`|`true`|-|
|clickedProp|choosen title|`String`|`true`|-|

<!-- @vuese:MenuSearch:props:end -->


## Events

<!-- @vuese:MenuSearch:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|change-title|this.$router.push({ query: { q: this.$route.query.q, sort: this.clicked }, });|-|
|change-sort|-|-|
|change-time|setTimeout(() => this.$router.replace('/main'), 1000); if (response == 200) { }|-|

<!-- @vuese:MenuSearch:events:end -->


## Methods

<!-- @vuese:MenuSearch:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|clickedFunction|handle choosen title|The argument is a string value representing choosen value from user|

<!-- @vuese:MenuSearch:methods:end -->



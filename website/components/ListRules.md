# ListRules

## Props

<!-- @vuese:ListRules:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|rule|details of moderator|`Object`|`true`|{"ruleId":"","ruleName":"","ruleOrder":"","createdAt":"","appliesTo":"","reportReason":"","description":""}|

<!-- @vuese:ListRules:props:end -->


## Events

<!-- @vuese:ListRules:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|doneSuccessfully|-|-|

<!-- @vuese:ListRules:events:end -->


## Methods

<!-- @vuese:ListRules:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|viewDetailsFunction|Used to show rule details|no argument|
|showAddRuleFunction|Used to show add rule popup|no argument|
|loadListOfRules|load Rules list from the store|no argument|
|doneSuccessfully|handle load rules instead of refreshing|no argument|
|clickDelete|Used to show delete rule popup|no argument|

<!-- @vuese:ListRules:methods:end -->


## Computed

<!-- @vuese:ListRules:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|subredditName|`string`|return subreddit name|No|
|listOfRules|`object`|return list of Rules|Yes|

<!-- @vuese:ListRules:computed:end -->



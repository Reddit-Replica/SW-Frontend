# MYComment

## Props

<!-- @vuese:MYComment:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|identifier|-|`String`|`true`|-|
|type|-|`String`|`true`|-|
|parentId|-|`String`|`false`|-|
|parentType|-|`String`|`false`|-|
|level|-|`Number`|`false`|1|
|currentText|-|`String`|`false`|-|
|subredditName|-|`String`|`false`|-|

<!-- @vuese:MYComment:props:end -->


## Events

<!-- @vuese:MYComment:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|newComment|-|-|
|saveEditing|-|-|
|cancelEditing|-|-|

<!-- @vuese:MYComment:events:end -->


## Methods

<!-- @vuese:MYComment:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|writeNewComment|adds new comment|-|

<!-- @vuese:MYComment:methods:end -->


assign comment's old value back to it|-|
|saveEditing|save edittings done to comment|-|
|deleteComment|delete comment|-|

<!-- @vuese:MyComment:methods:end -->


## Computed

<!-- @vuese:MyComment:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|getuserName|-|get userName|No|
|noComment|-|chceks if there is a written text in text area or not to edit the comment|No|

<!-- @vuese:MyComment:computed:end -->



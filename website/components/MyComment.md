# MyComment

## Props

<!-- @vuese:MyComment:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|comment|the comment data object that will get displayed in this component|`Object`|`true`|{}|

<!-- @vuese:MyComment:props:end -->


## Methods

<!-- @vuese:MyComment:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|displaySubmenu|show services submenu of comments|-|
|upClick|called when upvote is clicked to change the style of upvote icon and increment vote counter|-|
|downClick|called when downvote is clicked to change the style of downvote icon and decrement vote counter|-|
|edit|sets comment in editting mode (stlye is changed)|-|
|cancelEditing|cancel editting done to comment and assign comment's old value back to it|-|
|saveEditing|save edittings done to comment|-|
|deleteComment|delete comment|-|

<!-- @vuese:MyComment:methods:end -->


## Computed

<!-- @vuese:MyComment:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|noComment|-|chceks if there is a written text in text area or not to edit the comment|No|

<!-- @vuese:MyComment:computed:end -->



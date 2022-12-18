# SaveUnsavePopupMessage

## Props

<!-- @vuese:SaveUnsavePopupMessage:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|type|type component being saved or unsaved|`String`|`false`|-|
|state|the state of component save or unsave|`String`|`false`|-|
|typeid|id of pot/comment|`String`|`false`|-|

<!-- @vuese:SaveUnsavePopupMessage:props:end -->


## Events

<!-- @vuese:SaveUnsavePopupMessage:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|undoAction|Fire when the action is undone|The argument are a string value representing state, a string value representing id|

<!-- @vuese:SaveUnsavePopupMessage:events:end -->


## Slots

<!-- @vuese:SaveUnsavePopupMessage:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:SaveUnsavePopupMessage:slots:end -->


## Methods

<!-- @vuese:SaveUnsavePopupMessage:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|closeMessage|closing the message|-|
|undo|undo action|-|

<!-- @vuese:SaveUnsavePopupMessage:methods:end -->



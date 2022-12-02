# SaveUnsavePopupMessage

## Props

<!-- @vuese:SaveUnsavePopupMessage:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|type|type component being saved or unsaved|`String`|`true`|-|
|state|the state of component save or unsave|`String`|`true`|-|
|typeid|id of pot/comment|`String`|`true`|-|

<!-- @vuese:SaveUnsavePopupMessage:props:end -->


## Events

<!-- @vuese:SaveUnsavePopupMessage:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|undoAction|Fire when the action is undone|The argument are a string value representing state, a string value representing id|

<!-- @vuese:SaveUnsavePopupMessage:events:end -->


## Methods

<!-- @vuese:SaveUnsavePopupMessage:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|closeMessage|closing the message|-|
|undo|undo action|-|

<!-- @vuese:SaveUnsavePopupMessage:methods:end -->



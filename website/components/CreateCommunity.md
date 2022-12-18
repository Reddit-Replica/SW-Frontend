# CreateCommunity

## Events

<!-- @vuese:CreateCommunity:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|exit|Fire emit to close create community dialog|-|

<!-- @vuese:CreateCommunity:events:end -->


## Methods

<!-- @vuese:CreateCommunity:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|loadCategories|Loading Community suggested categories|no argument|
|hidecreateCommunity|Hide dialog|no argument|
|showInfoBox|Show Info box when hovering on title|no argument|
|chooseType|Set chosen community type (public, restricted, private)|index to indicate chosen type|
|chooseNSFW|Check if NSFW chosen or not|no argument|
|validateCommunityCategory|Check on community category not to be empty|no argument|
|resetName|Reset Validatation of  Subreddits Name.|no argument|
|validateCommunityName|Validate Subreddits Name (Name should be between 3:20 characters and include only letters, numbers and underscores).|no argument|
|charCount|Decrease characters count while typing|no argument|
|submitCommunity|Validate create community form and submit it.|no argument|
|showMore|Show Error dialog when click on more when subreddit name contain symbols or not in range of 3:20 characters|no argument|
|showSelect|Show/Hide suggested categories list|no argument|

<!-- @vuese:CreateCommunity:methods:end -->



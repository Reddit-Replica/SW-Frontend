# PrivacySettings

## Methods

<!-- @vuese:PrivacySettings:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|requestStatusHandler|handles the status code of requested data|no arg|
|getMoment|convert the date to the moment from now|no arg|
|RequestListOfBlockedUsersData|make request to get blocked user data|no arg|
|addBlockedUser|make a request to block new user|no arg|
|removeBlockedUser|make request to remove block from a user|blockUsername  the name of the user that  want to remove the block from him|
|focusOut|change the state of the block user input text box|no arg|

<!-- @vuese:PrivacySettings:methods:end -->


## Computed

<!-- @vuese:PrivacySettings:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|activeAddButton|-|active the add button in the block user text box|No|
|blockedUsersData|-|get block users data|Yes|

<!-- @vuese:PrivacySettings:computed:end -->



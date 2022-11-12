# ProfileCard

## Props

<!-- @vuese:ProfileCard:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|userName|user Name of the user|`String`|`true`|-|
|userData|Data of user page ( name , photo url , birth date ,karma , .....)|`Object`|`true`|-|
|state|state profile page  or other user page|`String`|`true`|-|

<!-- @vuese:ProfileCard:props:end -->


## Methods

<!-- @vuese:ProfileCard:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|toggleShowMoreOptions|it toggle to Show or Hide user Options|no arg|
|addProfileImage|this function act as a path when it get clicked to will reflect this click to input field to open box for adding Profile Image|no arg|
|addCoverImage|this function act as a path when it get clicked to will reflect this click to input field to open box for adding Profile Cover Image|no arg|
|loadProfilePic|this function for upload an Profile Image for testing only after connecting to APi it will be removed|no arg|
|loadCoverPic|this function for upload an Cover Image for testing only after connecting to APi it will be removed|no arg|
|getMonthName|change month date from number to its name|no arg|

<!-- @vuese:ProfileCard:methods:end -->


## Computed

<!-- @vuese:ProfileCard:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|profileOptions|-|change options from profile user options state to other user options state|No|

<!-- @vuese:ProfileCard:computed:end -->



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
|profileOptionsClickHandler|it handles when you click on the profile options block  for example block user ...|state this state to know if it is your profile page or other user page profileOption this profileOption to know which option you want to click|
|blockUser|this methods handle a request for blocking a user|no|
|profileOptionsToHandler|it handles profile option routing href(to)|no|
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



# SignupPage

## Methods

<!-- @vuese:SignupPage:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|validatEmail|Validate Email for having (@(gmail).(com) in their domain)|email input|
|validatepass|Validate new password to users (not to short)|no argument|
|handleSubmit|In SignUp page to show second Page|no argument|
|togglepages|In SignUp page to show second Page or return to the first one|no argument|
|validateUser|Validate User Input (Not too long or too Short)|no argument|
|usr_available|Check if User is available or not|no argument|
|verifyRec|Verify Do Recpatcha|no argument|
|email_available|Check if Email is available or not|no argument|
|handleSignClick|post new user and email and password to server|no argument|
|doRandom|Get Request to get Random Names|no argument|
|doPutUserName|Put username a Random Name that selected|Random UserName|

<!-- @vuese:SignupPage:methods:end -->


## Computed

<!-- @vuese:SignupPage:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|RandomUsers|-|Get Random Names from store get|Yes|

<!-- @vuese:SignupPage:computed:end -->



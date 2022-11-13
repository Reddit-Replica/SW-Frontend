# UserPage

## Methods

<!-- @vuese:UserPage:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|RequestUserData|this function send  call an action function from the store to make a get request to get user data|no arg|

<!-- @vuese:UserPage:methods:end -->


## Computed

<!-- @vuese:UserPage:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|getUserName|-|we get the userName from the getter store|Yes|
|getUserData|-|this function gets the user Data from the getter store|Yes|
|checkInOverviewPage|-|this function for the current route if it the Overview Page or not|No|

<!-- @vuese:UserPage:computed:end -->


## Watch

<!-- @vuese:UserPage:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|undefined|we watch the changes of the route when the userName changes we reload the page|no arg|

<!-- @vuese:UserPage:watch:end -->



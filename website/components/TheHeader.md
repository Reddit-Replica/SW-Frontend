# TheHeader

## Props

<!-- @vuese:TheHeader:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|headerTitle|header title ex: Home, User Settings, u/username...|`String`|`false`|Home|

<!-- @vuese:TheHeader:props:end -->


## Methods

<!-- @vuese:TheHeader:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|showSettingsSubMenu|Used to show or hide settings menu|no argument|
|showHomeSubMenu|Used to show or hide home menu|no argument|
|goToSettings|Used to go to settings page|no argument|
|goToLogin|Used to go to login page|no argument|
|goToMessages|Used to go to messages page|no argument|
|goToHome|Used to go to Home page|no argument|
|goToSubmit|Used to go to submit page|no argument|
|goToUserPage|Used to go to user page|no argument|
|goToSubredditPage|Used to go to subreddit page|no argument|
|showCreateCommunity|Used to show create community popup|no argument|
|getUserSubreddits|load user subreddits|no argument|
|searchUser|Used to go to Search page|no argument|
|handlelogout|Used handle logout action|no argument|
|toggleNotificationsList|Show/Hide notifications list|no argument|
|RequestUserData|this function send  call an action function from the store to make a get request to get user data|no arg|
|loadAllNotifications|this function send call an action function from the store to load user notifications|no arg|

<!-- @vuese:TheHeader:methods:end -->


## Computed

<!-- @vuese:TheHeader:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|userName|`string`|Get usename|No|
|getUserData|`object`|return user data|Yes|
|listOfSubreddits|`object`|return user communities|Yes|
|unreadNotificationsCount|`Number`|return number of unread notifications|Yes|
|noUnreadNotifications|`Number`|return number of unread notifications|No|

<!-- @vuese:TheHeader:computed:end -->



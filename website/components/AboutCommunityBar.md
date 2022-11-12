# AboutCommunityBar

## Props

<!-- @vuese:AboutCommunityBar:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|topics|Array of Subreddit suggested topics|`Array`|`false`|[]|
|membersCount|Number of members in subreddit|`Number`|`false`|1|
|onlineMembersCount|Number of online members in subreddit|`Number`|`false`|1|
|communityDate|Subreddit creation date|`String`|`false`|-|
|communityType|Subreddit type (public, restricted, private)|`String`|`false`|-|

<!-- @vuese:AboutCommunityBar:props:end -->


## Methods

<!-- @vuese:AboutCommunityBar:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|dotsClick|Toogle Show/hide options list in about community bar by clicking on dots icon.|-|
|addToCustomFeed|Mark subreddit added to custom feed|-|
|addToFavourite|Mark subreddit added to favourites|-|
|charCount|Decrease characters count while typing|-|
|showTextarea|Mark text area shown|-|
|hideTextarea|Mark text area hidden|-|
|saveDescription|Save subreddit added description|-|
|setTopic|Save subreddit chosen topic and hide topic list|-|
|setSubtopic|Add subreddit subtopic if it isn't already chosen and number of chosen subtopics is less than 25|-|
|toogleTopicsList|Show/Hide topics list|-|
|toogleSubtopics|Show/Hide subtopics list|-|
|deleteSubtopic|Delete subtopics from chosen subtopics list|-|
|saveSubtopics|save chosen subtopics list|-|
|toogleSaveDialog|Show/Hide Save or Discard dialog|-|
|toogleSubtopicsCancel|Cancel chosen subtopics list and show dialog save or discard|-|
|toogleDateBox|Show/Hide date box while hovering on subreddit creation date|-|
|toogleMembersCountBox|Show/Hide members count box while hovering on subreddit members count|-|
|toogleOnlineMembersCountBox|Show/Hide online members count box while hovering on subreddit online members count|-|
|toogleTopicsArrrowBox|Show/Hide topics info box while hovering on subreddit topics title|-|
|toogleNew|Show/Hide subreddit new mark|-|

<!-- @vuese:AboutCommunityBar:methods:end -->



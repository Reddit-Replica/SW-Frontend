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
|subredditName|-|`String`|`false`|-|
|communityDescriptionProp|-|`String`|`false`|-|
|communityTopicProp|-|`Object`|`false`|{"mainTopic":"","subtopics":[]}|

<!-- @vuese:AboutCommunityBar:props:end -->


## Methods

<!-- @vuese:AboutCommunityBar:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|dotsClick|Toogle Show/hide options list in about community bar by clicking on dots icon.|no argument|
|addToCustomFeed|Mark subreddit added to custom feed|no argument|
|addToFavourite|Mark subreddit added to favourites|no argument|
|charCount|Decrease characters count while typing|no argument|
|showTextarea|Mark text area shown|no argument|
|hideTextarea|Mark text area hidden|no argument|
|saveDescription|Save subreddit added description|no argument|
|setTopic|Save subreddit chosen topic and hide topic list|chosen topic to be saved|
|setSubtopic|Add subreddit subtopic if it isn't already chosen and number of chosen subtopics is less than 25|chosen subtopic to be added to list|
|toogleTopicsList|Show/Hide topics list|no argument|
|toogleSubtopics|Show/Hide subtopics list|no argument|
|deleteSubtopic|Delete subtopics from chosen subtopics list|no argument|
|saveSubtopics|save chosen subtopics list|no argument|
|toogleSaveDialog|Show/Hide Save or Discard dialog|no argument|
|toogleSubtopicsCancel|Cancel chosen subtopics list and show dialog save or discard|no argument|
|toogleDateBox|Show/Hide date box while hovering on subreddit creation date|no argument|
|toogleMembersCountBox|Show/Hide members count box while hovering on subreddit members count|-|
|toogleOnlineMembersCountBox|Show/Hide online members count box while hovering on subreddit online members count|no argument|
|toogleTopicsArrrowBox|Show/Hide topics info box while hovering on subreddit topics title|no argument|
|toogleNew|Show/Hide subreddit new mark|no argument|

<!-- @vuese:AboutCommunityBar:methods:end -->



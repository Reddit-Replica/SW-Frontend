# SociallinksBlock

## Props

<!-- @vuese:SociallinksBlock:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|socialData|Array of user social link data (displayed name , toLink)|`Array`|`true`|-|

<!-- @vuese:SociallinksBlock:props:end -->


## Methods

<!-- @vuese:SociallinksBlock:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|openSocialLinkDialog|this function triggered when clicking on the Add social link  button in profile card  to open social link dialog|no arg|
|closeSocialLinkDialog|this function triggered when clicking on the close x button in social link dialog|no arg|
|getImgSrc|this function take the type of social link and return its image link social link dialog|id unique id of the social link item (image text)|

<!-- @vuese:SociallinksBlock:methods:end -->


## Computed

<!-- @vuese:SociallinksBlock:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|socialLinkCount|-|return count of social link to check its maximum number of social links social link dialog|No|

<!-- @vuese:SociallinksBlock:computed:end -->



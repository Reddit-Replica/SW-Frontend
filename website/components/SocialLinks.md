# SocialLinks

## Props

<!-- @vuese:SocialLinks:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|show|for showing or hiding the dialog|`Boolean`|`true`|false|

<!-- @vuese:SocialLinks:props:end -->


## Events

<!-- @vuese:SocialLinks:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|close|-|-|
|open|-|-|

<!-- @vuese:SocialLinks:events:end -->


## Methods

<!-- @vuese:SocialLinks:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|tryClose|this function triggered at clicking on closing button on dialog will emits event and parent component will listen on it and make show to false to hide the dialog|no arg|
|tryOpen|this function triggered at clicking on back button on configuration dialog will emits open event and parent component will listen on to show it|no arg|
|openSocialLinkConfig|this function triggered at choosing a SociallinkItem to open its configuration dialog|text argument unique for Knowing which socialLinkItem I clicked on|
|backToSociallinkDialog|this function triggered when clicking on the back button in sociallinkConfiguration to back to social link dialog|no arg|
|saveSocialLink|this function triggered when clicking on the save button in sociallinkConfiguration to save item to user social link|no arg|

<!-- @vuese:SocialLinks:methods:end -->



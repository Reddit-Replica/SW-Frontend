# LogIn

## Methods

<!-- @vuese:LogIn:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|handleSubmit|Validation for UserName validateUser(value) { this.showSignuser = false; this.messageErrorShowUser = false; this.showSignPass = false; this.messageErrorShowPass = false; document.querySelector('#user-name').style.border = '1px solid rgba(0, 0, 0, 0.1)'; if (value.length < 3 || value.length > 20) { this.showSignuser = true; this.checkedUser = false; this.messageErrorShowUser = true; this.error_message = 'Username must be between 3 and 20 characters'; document.querySelector('#user-name').style.border = '0.5px solid #ea0027'; } else { fetch(this.$baseurl + '/userTest') .then((response) => { if (response.ok) { return response.json(); } }) .then((data) => { data.forEach((element) => { if (element.username == this.username) { this.showSignuser = true; this.checkedUser = true; document.querySelector('#user-name').style.border = '0.5px solid #0079d3'; } }); }) .catch((error) => { console.log(error); }); } }, posting username and password and wait for token|-|

<!-- @vuese:LogIn:methods:end -->


## Watch

<!-- @vuese:LogIn:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|username|watch username if it's not empty|-|

<!-- @vuese:LogIn:watch:end -->



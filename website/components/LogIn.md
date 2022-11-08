# LogIn

## Methods

<!-- @vuese:LogIn:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|validateUser|Validation for UserName|-|
|handleSubmit|else { fetch(this.$baseurl + '/userTest') .then((response) => { if (response.ok) { return response.json(); } }) .then((data) => { data.forEach((element) => { if (element.username == this.username) { this.showSignuser = true; this.checkedUser = true; document.querySelector('#user-name').style.border = '0.5px solid #0079d3'; } }); }) .catch((error) => { console.log(error); }); } }, posting username and password and wait for token|-|

<!-- @vuese:LogIn:methods:end -->


## Watch

<!-- @vuese:LogIn:watch:start -->
|Name|Description|Parameters|
|---|---|---|
|username|watch username if it's not empty|-|

<!-- @vuese:LogIn:watch:end -->



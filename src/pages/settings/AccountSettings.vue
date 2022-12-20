<template>
	<div>
		<div class="settings-page">
			<div class="settings-block">
				<h2 class="h2-main-title">Account settings</h2>
				<h3 class="h3-main-title">ACCOUNT PREFERENCES</h3>
				<div class="section">
					<div>
						<h3 class="h3-title">Email address</h3>
						<p class="p-title-description">{{ email }}</p>
					</div>
					<div>
						<base-button
							class="blue-button"
							button-text="Change"
							id="change"
							@click="openChangeEmailDialog"
						/>
					</div>
					<div>
						<h3 class="h3-title">Change Password</h3>
						<p class="p-title-description">here write description</p>
					</div>
					<div>
						<base-button
							class="blue-button"
							button-text="Change"
							id="change"
							@click="showChangePasswordDialog"
						/>
					</div>
				</div>
				<div class="section">
					<div>
						<h3 class="h3-title">Gender</h3>
						<p class="p-title-description">
							Reddit will never share this information and only uses it to
							improve what content you see.
						</p>
					</div>
					<div @click="showGenderMenu" id="gender-menu">
						<span class="span-blue">{{ gender }}</span>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-caret-down-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
								/>
							</svg>
						</span>
						<subMenu
							:titles="[
								'Woman',
								'Man',
								'Non-Binary',
								'I Refer To Myself As....',
								'I Prefer Not To Say',
							]"
							:display="genderMenuDisplayed"
							@change-title="changeGender"
							:clicked-prop="gender"
						/>
					</div>
				</div>
				<div class="section">
					<div>
						<h3 class="h3-title">Country</h3>
						<p class="p-title-description">
							This is your primary location.
							<router-link to="/hc/en-us/articles/360062429491" id="learn-more"
								>Learn more</router-link
							>
						</p>
					</div>
					<div>
						<select id="select1" @change="changeCountry()" :value="country">
							<option value="xx">No country identified</option>
							<option value="Afghanistan">Afghanistan</option>
							<option value="Åland Islands">Åland Islands</option>
							<option value="Albania">Albania</option>
							<option value="Algeria">Algeria</option>
							<option value="American Samoa">American Samoa</option>
							<option value="Andorra">Andorra</option>
							<option value="Angola">Angola</option>
							<option value="Anguilla">Anguilla</option>
							<option value="Antarctica">Antarctica</option>
							<option value="Antigua and Barbuda">Antigua and Barbuda</option>
							<option value="Argentina">Argentina</option>
							<option value="Armenia">Armenia</option>
							<option value="Aruba">Aruba</option>
							<option value="Australia">Australia</option>
							<option value="Austria">Austria</option>
							<option value="Azerbaijan">Azerbaijan</option>
							<option value="Bahamas">Bahamas</option>
							<option value="Bahrain">Bahrain</option>
							<option value="Bangladesh">Bangladesh</option>
							<option value="Barbados">Barbados</option>
							<option value="Belarus">Belarus</option>
							<option value="Belgium">Belgium</option>
							<option value="Belize">Belize</option>
							<option value="Benin">Benin</option>
							<option value="Bermuda">Bermuda</option>
							<option value="Bhutan">Bhutan</option>
							<option value="Bolivia">Bolivia</option>
							<option value="Bosnia and Herzegovina">
								Bosnia and Herzegovina
							</option>
							<option value="Botswana">Botswana</option>
							<option value="Bouvet Island">Bouvet Island</option>
							<option value="Brazil">Brazil</option>
							<option value="British Indian Ocean Territory">
								British Indian Ocean Territory
							</option>
							<option value="Brunei Darussalam">Brunei Darussalam</option>
							<option value="Bulgaria">Bulgaria</option>
							<option value="Burkina Faso">Burkina Faso</option>
							<option value="Burundi">Burundi</option>
							<option value="Cambodia">Cambodia</option>
							<option value="Cameroon">Cameroon</option>
							<option value="Canada">Canada</option>
							<option value="Cape Verde">Cape Verde</option>
							<option value="Cayman Islands">Cayman Islands</option>
							<option value="Central African Republic">
								Central African Republic
							</option>
							<option value="Chad">Chad</option>
							<option value="Chile">Chile</option>
							<option value="China">China</option>
							<option value="Christmas Island">Christmas Island</option>
							<option value="Cocos (Keeling) Islands">
								Cocos (Keeling) Islands
							</option>
							<option value="Colombia">Colombia</option>
							<option value="Comoros">Comoros</option>
							<option value="Congo">Congo</option>
							<option value="Congo, The Democratic Republic of The">
								Congo, The Democratic Republic of The
							</option>
							<option value="Cook Islands">Cook Islands</option>
							<option value="Costa Rica">Costa Rica</option>
							<option value="Cote D'ivoire">Cote D'ivoire</option>
							<option value="Croatia">Croatia</option>
							<option value="Cuba">Cuba</option>
							<option value="Cyprus">Cyprus</option>
							<option value="Czech Republic">Czech Republic</option>
							<option value="Denmark">Denmark</option>
							<option value="Djibouti">Djibouti</option>
							<option value="Dominica">Dominica</option>
							<option value="Dominican Republic">Dominican Republic</option>
							<option value="Ecuador">Ecuador</option>
							<option value="Egypt">Egypt</option>
							<option value="El Salvador">El Salvador</option>
							<option value="Equatorial Guinea">Equatorial Guinea</option>
							<option value="Eritrea">Eritrea</option>
							<option value="Estonia">Estonia</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="Falkland Islands (Malvinas)">
								Falkland Islands (Malvinas)
							</option>
							<option value="Faroe Islands">Faroe Islands</option>
							<option value="Fiji">Fiji</option>
							<option value="Finland">Finland</option>
							<option value="France">France</option>
							<option value="French Guiana">French Guiana</option>
							<option value="French Polynesia">French Polynesia</option>
							<option value="French Southern Territories">
								French Southern Territories
							</option>
							<option value="Gabon">Gabon</option>
							<option value="Gambia">Gambia</option>
							<option value="Georgia">Georgia</option>
							<option value="Germany">Germany</option>
							<option value="Ghana">Ghana</option>
							<option value="Gibraltar">Gibraltar</option>
							<option value="Greece">Greece</option>
							<option value="Greenland">Greenland</option>
							<option value="Grenada">Grenada</option>
							<option value="Guadeloupe">Guadeloupe</option>
							<option value="Guam">Guam</option>
							<option value="Guatemala">Guatemala</option>
							<option value="Guernsey">Guernsey</option>
							<option value="Guinea">Guinea</option>
							<option value="Guinea-bissau">Guinea-bissau</option>
							<option value="Guyana">Guyana</option>
							<option value="Haiti">Haiti</option>
							<option value="Heard Island and Mcdonald Islands">
								Heard Island and Mcdonald Islands
							</option>
							<option value="Holy See (Vatican City State)">
								Holy See (Vatican City State)
							</option>
							<option value="Honduras">Honduras</option>
							<option value="Hong Kong">Hong Kong</option>
							<option value="Hungary">Hungary</option>
							<option value="Iceland">Iceland</option>
							<option value="India">India</option>
							<option value="Indonesia">Indonesia</option>
							<option value="Iran, Islamic Republic of">
								Iran, Islamic Republic of
							</option>
							<option value="Iraq">Iraq</option>
							<option value="Ireland">Ireland</option>
							<option value="Isle of Man">Isle of Man</option>
							<option value="Israel">Israel</option>
							<option value="Italy">Italy</option>
							<option value="Jamaica">Jamaica</option>
							<option value="Japan">Japan</option>
							<option value="Jersey">Jersey</option>
							<option value="Jordan">Jordan</option>
							<option value="Kazakhstan">Kazakhstan</option>
							<option value="Kenya">Kenya</option>
							<option value="Kiribati">Kiribati</option>
							<option value="Korea, Democratic People's Republic of">
								Korea, Democratic People's Republic of
							</option>
							<option value="Korea, Republic of">Korea, Republic of</option>
							<option value="Kuwait">Kuwait</option>
							<option value="Kyrgyzstan">Kyrgyzstan</option>
							<option value="Lao People's Democratic Republic">
								Lao People's Democratic Republic
							</option>
							<option value="Latvia">Latvia</option>
							<option value="Lebanon">Lebanon</option>
							<option value="Lesotho">Lesotho</option>
							<option value="Liberia">Liberia</option>
							<option value="Libyan Arab Jamahiriya">
								Libyan Arab Jamahiriya
							</option>
							<option value="Liechtenstein">Liechtenstein</option>
							<option value="Lithuania">Lithuania</option>
							<option value="Luxembourg">Luxembourg</option>
							<option value="Macao">Macao</option>
							<option value="Macedonia, The Former Yugoslav Republic of">
								Macedonia, The Former Yugoslav Republic of
							</option>
							<option value="Madagascar">Madagascar</option>
							<option value="Malawi">Malawi</option>
							<option value="Malaysia">Malaysia</option>
							<option value="Maldives">Maldives</option>
							<option value="Mali">Mali</option>
							<option value="Malta">Malta</option>
							<option value="Marshall Islands">Marshall Islands</option>
							<option value="Martinique">Martinique</option>
							<option value="Mauritania">Mauritania</option>
							<option value="Mauritius">Mauritius</option>
							<option value="Mayotte">Mayotte</option>
							<option value="Mexico">Mexico</option>
							<option value="Micronesia, Federated States of">
								Micronesia, Federated States of
							</option>
							<option value="Moldova, Republic of">Moldova, Republic of</option>
							<option value="Monaco">Monaco</option>
							<option value="Mongolia">Mongolia</option>
							<option value="Montenegro">Montenegro</option>
							<option value="Montserrat">Montserrat</option>
							<option value="Morocco">Morocco</option>
							<option value="Mozambique">Mozambique</option>
							<option value="Myanmar">Myanmar</option>
							<option value="Namibia">Namibia</option>
							<option value="Nauru">Nauru</option>
							<option value="Nepal">Nepal</option>
							<option value="Netherlands">Netherlands</option>
							<option value="Netherlands Antilles">Netherlands Antilles</option>
							<option value="New Caledonia">New Caledonia</option>
							<option value="New Zealand">New Zealand</option>
							<option value="Nicaragua">Nicaragua</option>
							<option value="Niger">Niger</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Niue">Niue</option>
							<option value="Norfolk Island">Norfolk Island</option>
							<option value="Northern Mariana Islands">
								Northern Mariana Islands
							</option>
							<option value="Norway">Norway</option>
							<option value="Oman">Oman</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Palau">Palau</option>
							<option value="Palestinian Territory, Occupied">
								Palestinian Territory, Occupied
							</option>
							<option value="Panama">Panama</option>
							<option value="Papua New Guinea">Papua New Guinea</option>
							<option value="Paraguay">Paraguay</option>
							<option value="Peru">Peru</option>
							<option value="Philippines">Philippines</option>
							<option value="Pitcairn">Pitcairn</option>
							<option value="Poland">Poland</option>
							<option value="Portugal">Portugal</option>
							<option value="Puerto Rico">Puerto Rico</option>
							<option value="Qatar">Qatar</option>
							<option value="Reunion">Reunion</option>
							<option value="Romania">Romania</option>
							<option value="Russian Federation">Russian Federation</option>
							<option value="Rwanda">Rwanda</option>
							<option value="Saint Helena">Saint Helena</option>
							<option value="Saint Kitts and Nevis">
								Saint Kitts and Nevis
							</option>
							<option value="Saint Lucia">Saint Lucia</option>
							<option value="Saint Pierre and Miquelon">
								Saint Pierre and Miquelon
							</option>
							<option value="Saint Vincent and The Grenadines">
								Saint Vincent and The Grenadines
							</option>
							<option value="Samoa">Samoa</option>
							<option value="San Marino">San Marino</option>
							<option value="Sao Tome and Principe">
								Sao Tome and Principe
							</option>
							<option value="Saudi Arabia">Saudi Arabia</option>
							<option value="Senegal">Senegal</option>
							<option value="Serbia">Serbia</option>
							<option value="Seychelles">Seychelles</option>
							<option value="Sierra Leone">Sierra Leone</option>
							<option value="Singapore">Singapore</option>
							<option value="Slovakia">Slovakia</option>
							<option value="Slovenia">Slovenia</option>
							<option value="Solomon Islands">Solomon Islands</option>
							<option value="Somalia">Somalia</option>
							<option value="South Africa">South Africa</option>
							<option value="South Georgia and The South Sandwich Islands">
								South Georgia and The South Sandwich Islands
							</option>
							<option value="Spain">Spain</option>
							<option value="Sri Lanka">Sri Lanka</option>
							<option value="Sudan">Sudan</option>
							<option value="Suriname">Suriname</option>
							<option value="Svalbard and Jan Mayen">
								Svalbard and Jan Mayen
							</option>
							<option value="Swaziland">Swaziland</option>
							<option value="Sweden">Sweden</option>
							<option value="Switzerland">Switzerland</option>
							<option value="Syrian Arab Republic">Syrian Arab Republic</option>
							<option value="Taiwan">Taiwan</option>
							<option value="Tajikistan">Tajikistan</option>
							<option value="Tanzania, United Republic of">
								Tanzania, United Republic of
							</option>
							<option value="Thailand">Thailand</option>
							<option value="Timor-leste">Timor-leste</option>
							<option value="Togo">Togo</option>
							<option value="Tokelau">Tokelau</option>
							<option value="Tonga">Tonga</option>
							<option value="Trinidad and Tobago">Trinidad and Tobago</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="Turkmenistan">Turkmenistan</option>
							<option value="Turks and Caicos Islands">
								Turks and Caicos Islands
							</option>
							<option value="Tuvalu">Tuvalu</option>
							<option value="Uganda">Uganda</option>
							<option value="Ukraine">Ukraine</option>
							<option value="United Arab Emirates">United Arab Emirates</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="United States">United States</option>
							<option value="United States Minor Outlying Islands">
								United States Minor Outlying Islands
							</option>
							<option value="Uruguay">Uruguay</option>
							<option value="Uzbekistan">Uzbekistan</option>
							<option value="Vanuatu">Vanuatu</option>
							<option value="Venezuela">Venezuela</option>
							<option value="Viet Nam">Viet Nam</option>
							<option value="Virgin Islands, British">
								Virgin Islands, British
							</option>
							<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
							<option value="Wallis and Futuna">Wallis and Futuna</option>
							<option value="Western Sahara">Western Sahara</option>
							<option value="Yemen">Yemen</option>
							<option value="Zambia">Zambia</option>
							<option value="Zimbabwe">Zimbabwe</option>
						</select>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-caret-down-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
							/>
						</svg>
					</div>
				</div>
				<h3 class="h3-main-title">CONNECTED ACCOUNTS</h3>
				<div class="section">
					<div>
						<h3 class="h3-title">Connect to Facebook</h3>
						<div>
							<p class="p-title-description">
								Connect account to log in to Reddit with Facebook
							</p>
						</div>
					</div>
					<div>
						<base-button
							button-text="Connect to Facebook"
							id="apple"
							v-if="!connectedToFacebook"
							class="connect-button"
							@click="connectToFacebook"
						>
							<font-awesome-icon icon="fa-brands fa-facebook-f" />
						</base-button>
						<base-button
							button-text="(disconnect)"
							id="google"
							class="disconnect-button"
							@click="connectToFacebook"
							v-else
						/>
					</div>
				</div>
				<div class="section">
					<div>
						<h3 class="h3-title">Connect to Google</h3>
						<p class="p-title-description">
							Connect account to log in to Reddit with Google
						</p>
					</div>
					<div>
						<base-button
							button-text="Connect to Google"
							id="apple"
							v-if="!connectedToGoogle"
							class="connect-button"
							@click="connectToGoogle"
						>
							<font-awesome-icon icon="fa-brands fa-google" />
						</base-button>
						<base-button
							button-text="(disconnect)"
							id="google"
							class="disconnect-button"
							@click="disconnectToGoogle"
							v-else
						/>
					</div>
				</div>
				<!-- <h3 class="h3-main-title">BETA TESTS</h3>
				<div class="section">
					<div>
						<h3 class="h3-title">Opt into beta tests</h3>
						<p class="p-title-description">
							See the newest features from Reddit and join the r/beta community
						</p>
					</div>
					<div>
						<switch-button id="sb-2" />
					</div>
				</div>
				<div class="section">
					<div>
						<h3 class="h3-title">Opt out of the redesign</h3>
						<p class="p-title-description">
							Revert back to old Reddit for the time being
						</p>
					</div>
					<div>
						<switch-button id="sb-1" />
					</div>
				</div> -->
				<h3 class="h3-main-title">DELETE ACCOUNT</h3>
				<div class="section">
					<div id="delete-account" @click="deletingAccount">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-trash-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
							/>
						</svg>
						DELETE ACCOUNT
					</div>
				</div>
			</div>
		</div>
		<base-dialog
			:show="deleting"
			title="Delete account"
			@close="cancelDelete"
			dialog-class="delete-account"
		>
			<div class="body">
				<p>We're sorry to see you go</p>
				<p>
					Once you delete your account, your profile and username are
					permanently removed from Reddit and your posts, comments, and messages
					are disassociated (not deleted) from your account unless you delete
					them beforehand.<router-link
						to="https://www.reddithelp.com/hc/en-us/articles/360043047932-If-I-deactivate-my-account-what-happens-to-my-username-posts-and-comments-"
						>Learn more</router-link
					>
				</p>
				<p>HELP IMPROVE REDDIT (OPTIONAL)</p>
				<textarea type="text" placeholder="Let us know why you're leaving" />
				<p>HELP IMPROVE REDDIT (OPTIONAL)</p>
				<input type="text" placeholder="USERNAME" v-model="userName" />
				<input type="password" placeholder="PASSWORD" v-model="password" />
				<p>
					<input type="checkbox" id="checkbox" v-model="agreement" /> I
					understand that deleted accounts aren't recoverable
				</p>
				<div class="buttons">
					<base-button button-text="CANCEL" @click="cancelDelete" />
					<base-button
						button-text="DELETE"
						@click="confirmAccountDeletion"
						:disable-button="enableDelete"
					/>
				</div>
			</div>
		</base-dialog>
		<base-dialog
			:show="confirmDeletion"
			title="Delete account"
			@close="cancelDelete"
			dialog-class="delete-account"
		>
			<div class="body">
				<p>Be absolutely sure before deleting your account</p>
				<p>
					Deleting your account removes it from Reddit and our administrators
					won’t be able to bring it back for you.
				</p>
				<div class="buttons">
					<base-button button-text="CANCEL" @click="cancelDelete" />
					<base-button button-text="DELETE" @click="deleteAccount" />
				</div>
			</div>
		</base-dialog>
		<base-dialog :show="changePasswordDialog" @close="cancelChangePassword">
			<div class="delete-account">
				<img src="" alt="" />
				<p>Update your password</p>
				<input
					type="password"
					placeholder="OLD PASSWORD"
					v-model="oldPassword"
				/>
				<span v-if="fieldEmpty" class="error">This field is required</span>
				<span v-if="incorrectPassword" class="error">incorrect password</span>
				<input
					type="password"
					placeholder="NEW PASSWORD"
					v-model="newPassword"
				/>
				<span v-if="shortPassword" class="error">
					Password must be at least 8 characters long
				</span>
				<span v-if="oldMatchNew" class="error">
					New and old passwords must not match
				</span>
				<input
					type="password"
					placeholder="CONFIRM PASSWORD"
					v-model="confirmPassword"
				/>
				<span v-if="dntMatch" class="error">Password must match</span>
				<div class="buttons">
					<base-button button-text="Save" @click="savePassword" id="save" />
				</div>
			</div>
		</base-dialog>
		<base-dialog :show="changeEmailDialog" @close="cancelChangeEmail">
			<template #header>
				<div class="d-flex CE-header">
					<div>
						<font-awesome-icon
							icon="fa-solid fa-envelope-circle-check"
							class="change-email-header-icon"
						/>
						<p class="change-email-header">Update your email</p>
					</div>
					<div>
						<font-awesome-icon
							icon="fa-solid fa-x"
							@click="cancelChangeEmail"
						/>
					</div>
				</div>
			</template>
			<div class="change-email">
				<p>
					Update your email below. There will be a new verification email sent
					that you will need to use to verify this new email.
				</p>
				<input
					type="password"
					placeholder="CURRENT PASSWORD"
					v-model="newPass"
				/>
				<p class="change-email-error">{{ changeEmailError }}</p>
				<input type="email" placeholder="NEW EMAIL" v-model="newEmail" />
				<base-button
					button-text="Save email"
					@click="saveEmail"
					id="saveEmailid"
					:disabled="newEmail == '' || newEmail == ''"
				/>
			</div>
		</base-dialog>
	</div>
</template>

<script>
import SubMenu from '../../components/BaseComponents/SubMenu.vue';
import BaseDialog from '../../components/BaseComponents/BaseDialog.vue';
export default {
	components: {
		SubMenu,
		BaseDialog,
	},
	data() {
		return {
			changeEmailError: '',
			changeEmailDialog: false,
			incorrectPassword: '',
			fieldEmpty: '',
			shortPassword: '',
			dntMatch: '',
			oldPassword: '',
			newPassword: '',
			newPass: '',
			confirmPassword: '',
			gender: 'select gender',
			genderMenuDisplayed: false,
			country: '',
			email: '',
			connectedToFacebook: false,
			connectedToGoogle: false,
			deleting: false,
			confirmDeletion: false,
			userName: '',
			password: '',
			agreement: false,
			changePasswordDialog: false,
			oldMatchNew: false,
			newEmail: '',
		};
	},
	created() {},
	beforeMount() {
		if (localStorage.getItem('accessToken') == null)
			this.$router.push('/login');
		else this.fetchAccountSettings();
	},
	methods: {
		async saveEmail() {
			try {
				let response = await this.$store.dispatch('setting/changeEmail', {
					baseurl: this.$baseurl,
					currentPassword: this.newPass,
					newEmail: this.newEmail,
				});
				if (response.status != 200)
					this.changeEmailError =
						response.responseData.error != undefined
							? response.responseData.error
							: response.responseData;
				console.log(response);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		cancelChangeEmail() {
			this.changeEmailDialog = false;
		},
		openChangeEmailDialog() {
			this.changeEmailDialog = true;
		},
		cancelChangePassword() {
			this.changePasswordDialog = false;
			this.shortPassword = false;
			this.dntMatch = false;
			this.incorrectPassword = false;
			this.oldMatchNew = false;
		},
		async changePassword() {
			this.changePasswordDialog = false;
			localStorage.setItem('Password', this.newPassword);
			try {
				await this.$store.dispatch('setting/changePassword', {
					baseurl: this.$baseurl,
					currentPassword: this.oldPassword,
					newPassword: this.newPassword,
					confirmNewPassword: this.confirmPassword,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		savePassword() {
			if (this.oldPassword == '') {
				this.fieldEmpty = true;
				this.incorrectPassword = false;
			} else if (this.oldPassword != localStorage.getItem('Password')) {
				this.fieldEmpty = false;
				this.incorrectPassword = true;
			} else {
				this.fieldEmpty = false;
				this.incorrectPassword = false;
			}
			if (this.newPassword.length < 8) {
				this.shortPassword = true;
				this.oldMatchNew = false;
			} else if (this.newPassword == this.oldPassword) {
				this.shortPassword = false;
				this.oldMatchNew = true;
			} else {
				this.shortPassword = false;
				this.oldMatchNew = false;
			}
			if (this.confirmPassword == this.newPassword) {
				this.dntMatch = false;
			} else {
				this.dntMatch = true;
			}
			if (
				!this.shortPassword &&
				!this.dntMatch &&
				!this.incorrectPassword &&
				!this.oldMatchNew
			)
				this.changePassword();
		},
		showChangePasswordDialog() {
			this.changePasswordDialog = true;
		},
		confirmAccountDeletion() {
			this.deleting = false;
			this.confirmDeletion = true;
		},
		cancelDelete() {
			this.deleting = false;
			this.confirmDeletion = false;
		},
		async connectToGoogle() {
			this.connectedToGoogle = !this.connectedToGoogle;
			try {
				const googleUser = await this.$gAuth.signIn();
				console.log(localStorage.getItem('Password'));
				await this.$store.dispatch('setting/connect', {
					baseurl: this.$baseurl,
					type: 'google',
					accessToken: googleUser.Bc.id_token,
					password: localStorage.getItem('Password'),
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async disconnectToGoogle() {
			this.connectedToGoogle = !this.connectedToGoogle;
			try {
				const googleUser = await this.$gAuth.signIn();
				console.log(localStorage.getItem('Password'));
				await this.$store.dispatch('setting/disconnect', {
					baseurl: this.$baseurl,
					type: 'google',
					accessToken: googleUser.Bc.id_token,
					password: localStorage.getItem('Password'),
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async connectToFacebook() {
			this.connectedToFacebook = !this.connectedToFacebook;
			try {
				await this.$store.dispatch('setting/connect', {
					baseurl: this.$baseurl,
					type: 'facebook',
					accessToken: '',
					password: '',
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async fetchAccountSettings() {
			try {
				const accessToken = localStorage.getItem('accessToken');
				await this.$store.dispatch('setting/fetchAccountSettings', {
					baseurl: this.$baseurl,
					token: accessToken,
				});
			} catch (error) {
				this.error = error.message || 'Something failed!';
			}
			const accountSettings = this.$store.getters['setting/getAccountSettings'];
			this.country = accountSettings.country;
			this.gender = accountSettings.gender;
			this.email = accountSettings.email;
		},
		//@vuese
		//show gender menu
		showGenderMenu() {
			this.genderMenuDisplayed = !this.genderMenuDisplayed;
		},
		//@vuese
		//change gender
		async changeGender(gender) {
			this.gender = gender;
			console.log(gender);
			const actionPayload = {
				gender: this.gender,
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changeGender',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
		deletingAccount() {
			this.deleting = true;
		},
		async deleteAccount() {
			this.confirmDeletion = false;
			const payload = {
				username: localStorage.getItem('userName'),
				password: localStorage.getItem('Password'),
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/deleteAccount',
					payload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
			try {
				await this.$store.dispatch('logout_handle');
				location.reload();
			} catch (error) {
				console.log('error');
				// this.error = err;
			}
		},
		async changeCountry() {
			const selectElement = document.querySelector('#select1');
			const value = selectElement.options[selectElement.selectedIndex].value;
			this.country = value;
			console.log(value);
			const actionPayload = {
				country: this.country,
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changeCountry',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
	},
	computed: {
		enableDelete() {
			return !(
				this.userName == localStorage.getItem('userName') &&
				this.password == localStorage.getItem('Password') &&
				this.agreement
			);
		},
	},
};
</script>

<style scoped>
.section {
	display: flex;
	flex-flow: row wrap;
	margin-bottom: 32px;
	justify-content: space-between;
}
.section div:first-of-type {
	max-width: 100%;
}
.section div:first-of-type h3 span {
	color: #ff2c00;
}
.section:nth-of-type(2) .span-blue {
	font-size: 11.2px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 24px;
	text-transform: uppercase;
	border: none;
	padding: 4px;
	color: var(--color-blue);
}
.section svg.bi-caret-down-fill {
	height: 12px;
	margin-left: 2px;
	width: 20px;
	vertical-align: middle;
}
.section:nth-of-type(2) ul {
	position: absolute;
	background-color: white;
	padding: 0px;
	left: 0px;
	box-shadow: 0px 2px 4px var(--color-grey-dark-2);
	border-radius: 5px;
}
.section:nth-of-type(2) li {
	color: var(--color-grey-dark-2);
	font-size: 15px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px 10px;
	height: 35px;
	width: 100%;
}
.section:nth-of-type(2) li:hover {
	color: black;
	background-color: var(--color-blue-light-2);
}
.section:nth-of-type(2) li:not(:last-of-type) {
	border-bottom: 1px solid var(--color-grey-light-3);
}
.section:nth-of-type(2) li.blue {
	color: var(--color-blue);
}
.section select {
	color: var(--color-blue);
	fill: var(--color-blue);
	border: none;
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	appearance: none;
	padding-left: 4px;
	padding-right: 20px;
}
.section select:focus {
	outline: none;
}
.section:nth-of-type(2) div:last-of-type,
.section:nth-of-type(3) div:last-of-type,
.section:nth-of-type(4) div:last-of-type {
	position: relative;
	cursor: pointer;
}
.section:nth-of-type(3) div:last-of-type::before,
.section:nth-of-type(4) div:last-of-type::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background: var(--color-blue);
	opacity: 0;
	pointer-events: none;
}
.section:nth-of-type(3) div:last-of-type:hover::before {
	opacity: 0.1;
}
.section:nth-of-type(3) div:last-of-type:active::before {
	opacity: 0.3;
}
.section:nth-of-type(3) div:last-of-type {
	margin-left: 32px;
}
.section:nth-of-type(3) div:last-of-type {
	width: 362px;
}
.section:nth-of-type(3) div:last-of-type select {
	padding-right: 0px;
	width: 340px;
}
.section:nth-of-type(3) {
	flex-direction: column;
}
.section:nth-of-type(5) div:first-of-type {
	max-width: 100%;
}
.section:nth-of-type(3) svg.bi-caret-down-fill,
.section:nth-of-type(4) svg.bi-caret-down-fill {
	fill: var(--color-blue);
}
.section:nth-of-type(5) div:last-of-type {
	margin-left: auto;
}
/* button.disconnect-button {
	background-color: #00a4f3;
	color: white;
	fill: white;
	border: none;
}
button.disconnect-button:hover {
	background-color: #14abf4;
} */
.section button svg {
	margin: 0px 8px 0px 0px;
}
/* .section:nth-of-type(6) {
	opacity: 0.4;
} */
.section:nth-of-type(7) {
	max-width: 100%;
}
button.connect-button {
	background-color: black;
	color: white;
	fill: white;
	border: none;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	height: 32px;
	width: 195px;
	padding: 4px 16px;
}
button.disconnect-button {
	color: var(--color-blue);
	border: none;
	padding: 0px;
	font-size: 12px;
	font-weight: 200;
	background-color: white;
	height: 22px;
}
button.disconnect-button:hover {
	background-color: #f5fafd;
}
.section:last-of-type {
	justify-content: flex-end;
	color: #fc4e4f;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.5px;
	cursor: pointer;
}
.section:last-of-type svg {
	margin-right: 4px;
	width: 20px;
	fill: #fc4e4f;
}
.delete-account .body {
	max-width: 445px;
}
.delete-account p {
	font-size: 14px;
}
.delete-account p:nth-of-type(3),
.delete-account p:nth-of-type(4) {
	font-size: 7px;
	color: var(--color-grey-dark-2);
}
.delete-account textarea {
	height: 70px;
	width: 100%;
	border: 1px solid var(--color-grey-dark-2);
	font-size: 12px;
	padding: 5px;
}
.delete-account input[type='text']::placeholder,
.delete-account input[type='password']::placeholder {
	font-size: 8px;
	font-weight: bold;
}
.delete-account input[type='text'],
.delete-account input[type='password'] {
	height: 40px;
	width: 100%;
	border: 1px solid var(--color-grey-dark-2);
	font-size: 14px;
	padding: 2px;
	margin-bottom: 5px;
}
.delete-account .buttons {
	display: flex;
	justify-content: end;
	margin-top: 30px;
}
.delete-account .buttons button {
	font-weight: bolder;
	height: 50px;
	width: 100px;
	font-size: 14px;
}
.delete-account .buttons button:first-of-type {
	border: 1px solid var(--color-blue-2);
	background-color: white;
	color: var(--color-blue-2);
}
.delete-account .buttons button:last-of-type {
	border: 2px solid white;
	background-color: var(--button-color);
	color: white;
	margin-left: 5px;
}
.delete-account .buttons button:last-of-type:disabled {
	background-color: var(--color-grey-dark-4);
}
.delete-account .buttons button#save {
	background-color: var(--color-blue);
}
span.error {
	color: red;
	font-size: 8px;
}
.change-email {
	display: flex;
	align-items: end;
	flex-direction: column;
	width: 350px;
}
.change-email button {
	width: 92px;
	height: 32px;
	font-size: 12px;
	font-weight: 800;
	color: white;
	background-color: var(--color-blue-3);
}
.change-email button:disabled {
	background-color: var(--color-grey-dark-4);
}
.change-email input {
	width: 100%;
	height: 40px;
	padding: 10px;
	border: 1px solid var(--color-grey-dark-5);
	border-radius: 6px;
	margin: 10px 0;
	font-size: 12px;
}
.change-email p {
	font-size: 14px;
}
.change-email-header {
	font-size: 17px;
	font-weight: 600;
}
.change-email-header-icon {
	font-size: 34px;
	color: var(--color-blue-3);
	padding: 2px;
}
p.change-email-error {
	margin-right: auto;
	font-size: 8px;
	color: red;
}
.CE-header {
	width: 100%;
	justify-content: space-between;
}
.CE-header div:first-of-type {
	display: flex;
}
</style>

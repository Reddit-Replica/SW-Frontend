export default {
	/**
	 * The module 'listing' object.
	 * @name ListingGetters
	 * @type {object}
	 * @getter {list} getPosts=Posts Returns a list property.
	 * @getter {object} getPostDetails=postDetails Returns an object property.
	 */
	//@vuese
	//posts array getter
	getPosts(state) {
		return state.Posts;
	},
	//@vuese
	//post details getter
	getPostDetails(state) {
		return state.postDetails;
	},
};

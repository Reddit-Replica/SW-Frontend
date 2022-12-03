export default {
	/**
	 * The module 'setters' object.
	 * @name ListingMutations
	 * @type {object}
	 * @mutator {list} setPosts=Posts Sets the state list property.
	 * @mutator {object} setPostDetails=postDetails Sets the state object property.
	 */
	setPosts(state, payload) {
		state.Posts = payload;
	},
	//@vuese
	//post details mutator
	setPostDetails(state, payload) {
		state.postDetails = payload;
	},
};

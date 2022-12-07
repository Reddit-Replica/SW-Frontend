export default {
	// addRequest(state, payload) {
	//     state.statename= payload
	// }
	// to edit a state
	/**
	 * The module 'setters' object.
	 * @name PostsMutations
	 * @type {object}
	 * @mutator {object} setTitle={title} Sets the title of the post.
	 * @mutator {Boolean} setNsfw={Nsfw} Sets the Nsfw of the post.
	 * @mutator {Boolean} setSpoiler={spoiler} Sets the spoiler info of the post.
	 * @mutator {object} setFlairId={FlairId} Sets the FlairId of post.
	 * @mutator {Boolean} setsendReplies={sendReplies} Sets the sendReplies of the post.
	 * @mutator {object} ssetContent={Content} Sets content of the post.
	 * @mutator {Array} setallSubreddits={allSubreddits} Sets allsunreddits.
	 * @mutator {object} setSubreddit={Subreddit} Sets the Subreddit.
	 * @mutator {Boolean} setinSubreddit={inSubreddit} Sets the inSubreddit of the post.
	 */
	setTitle(state, payload) {
		console.log(payload);
		state.title = payload.title;
	},
	setNsfw(state, payload) {
		console.log(payload);
		state.nsfw = payload.nsfw;
	},
	setSpoiler(state, payload) {
		console.log(payload);
		state.spoiler = payload.spoiler;
	},
	setFlairId(state, payload) {
		console.log(payload);
		state.flairId = payload.flairId;
	},
	setsendReplies(state, payload) {
		console.log(payload);
		state.sendReplies = payload.sendReplies;
	},
	setContent(state, payload) {
		console.log(payload);
		state.content = payload.content;
	},
	setallSubreddits(state, payload) {
		console.log(payload);
		state.allSubreddits = payload;
	},
	setSubreddit(state, payload) {
		console.log(payload);
		state.subreddit = payload.subreddit;
	},
	setinSubreddit(state, payload) {
		console.log(payload);
		state.inSubreddit = payload.inSubreddit;
	},
	setImages(state, payload) {
		console.log(payload);
		state.images = payload.images;
	},
	setImageCaptions(state, payload) {
		console.log(payload);
		state.imageCaptions = payload.imageCaptions;
	},
	setImageLinks(state, payload) {
		console.log(payload);
		state.imageLinks = payload.imageLinks;
	},
	setVideo(state, payload) {
		console.log(payload);
		state.video = payload.video;
	},
	setvideoOrimage(state, payload) {
		console.log(payload);
		state.videoOrimage = payload.videoOrimage;
	},
};

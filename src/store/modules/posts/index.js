import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
	namespaced: true,
	state() {
		return {
			kind: '',
			ubreddit: '',
			title: '',
			content: '',
			files: [{}],
			nsfw: true,
			spoiler: true,
			flairId: '',
			imageCaptions: [''],
			imageLinks: [''],
		};
	},
	actions,
	mutations,
	getters,
};

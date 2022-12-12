/**
 * The module 'setters' object.
 * @module UserPostsMutations
 * @type {object}
 * @mutator {object} setUserPostData=strProp Sets the post Data.
 */

export default {
	setUserPostData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.postData, payload.responseData); // assign data to user Data
		return payload.responseStatus;
	},
	setUserPinnedPostData(state, payload) {
		if (payload.responseStatus == 200)
			Object.assign(state.pinnedPostData, payload.responseData); // assign data to user Data
		return payload.responseStatus;
	},
	setInsightsData(state, payload) {
		Object.assign(state.insightsData, payload.responseData); // assign data to user Data
	},
	ApprovePostOrComment(state, payload) {
		console.log('st', payload.ApprovePostOrCommentData.id);
		let fIndex = -1;
		if (payload.ApprovePostOrCommentData.type == 'post') {
			state.postData.children.forEach((element, index) => {
				// console.log(element);
				if (element.id == payload.ApprovePostOrCommentData.id) {
					fIndex = index;
				}
			});
		}
		if (fIndex != -1) {
			console.log(fIndex);
			console.log(state.postData);
			state.postData.children[fIndex].data.moderation =
				state.postData.children[fIndex].data.moderation || {};
			state.postData.children[fIndex].data.moderation.approve =
				state.postData.children[fIndex].data.moderation.approve || {};
			state.postData.children[fIndex].data.moderation.approve.approvedBy =
				payload.ApprovePostOrCommentData.username;
			state.postData.children[fIndex].data.moderation.approve.approvedDate =
				'now';
			if (state.postData.children[fIndex].data.moderation.remove) {
				delete state.postData.children[fIndex].data.moderation.remove;
			}
			if (state.postData.children[fIndex].data.moderation.spam) {
				delete state.postData.children[fIndex].data.moderation.spam;
			}
			console.log('mut approved');
		}
	},
	removePostOrComment(state, payload) {
		console.log('st', payload.removePostOrCommentData.id);
		let fIndex = -1;
		if (payload.removePostOrCommentData.type == 'post') {
			state.postData.children.forEach((element, index) => {
				// console.log(element);
				if (element.id == payload.removePostOrCommentData.id) {
					fIndex = index;
				}
			});
		}
		if (fIndex != -1) {
			console.log(fIndex);
			console.log(state.postData);
			state.postData.children[fIndex].data.moderation =
				state.postData.children[fIndex].data.moderation || {};

			state.postData.children[fIndex].data.moderation.remove =
				state.postData.children[fIndex].data.moderation.remove || {};

			state.postData.children[fIndex].data.moderation.remove.removedBy =
				payload.removePostOrCommentData.username;
			state.postData.children[fIndex].data.moderation.remove.removedDate =
				'now';
			if (state.postData.children[fIndex].data.moderation.approve) {
				delete state.postData.children[fIndex].data.moderation.approve;
			}
			if (state.postData.children[fIndex].data.moderation.spam) {
				delete state.postData.children[fIndex].data.moderation.spam;
			}
			console.log('bo');
		}
	},
	markPostAsNSFW(state, payload) {
		console.log('st', payload.nsfwData.id);
		let fIndex = -1;
		state.postData.children.forEach((element, index) => {
			// console.log(element);
			if (element.id == payload.nsfwData.id) {
				fIndex = index;
			}
		});
		if (fIndex != -1) {
			console.log(fIndex);
			console.log(state.postData);
			state.postData.children[fIndex].data.nsfw =
				state.postData.children[fIndex].data.nsfw || {};
			if (payload.nsfwData.type == 'mark')
				state.postData.children[fIndex].data.nsfw = true;
			else state.postData.children[fIndex].data.nsfw = false;
			console.log('bo');
		}
	},
	markUnMarkPostAsSpoiler(state, payload) {
		console.log('st', payload.spoilerData.id);
		let fIndex = -1;
		state.postData.children.forEach((element, index) => {
			// console.log(element);
			if (element.id == payload.spoilerData.id) {
				fIndex = index;
			}
		});
		if (fIndex != -1) {
			console.log(fIndex);
			console.log(state.postData);
			state.postData.children[fIndex].data.spoiler =
				state.postData.children[fIndex].data.spoiler || {};
			if (payload.spoilerData.type == 'mark')
				state.postData.children[fIndex].data.spoiler = true;
			else state.postData.children[fIndex].data.spoiler = false;
			console.log('bo');
		}
	},
	lockUnLockPostOrComment(state, payload) {
		console.log('st', payload.lockUnlockData.id);
		let fIndex = -1;
		if (payload.lockUnlockData.type == 'post') {
			state.postData.children.forEach((element, index) => {
				// console.log(element);
				if (element.id == payload.lockUnlockData.id) {
					fIndex = index;
				}
			});
			if (fIndex != -1) {
				console.log(fIndex);
				console.log(state.postData);
				console.log(payload.key);
				state.postData.children[fIndex].data.moderation =
					state.postData.children[fIndex].data.moderation || {};
				if (payload.key == 'lock')
					state.postData.children[fIndex].data.moderation.lock = true;
				else state.postData.children[fIndex].data.moderation.lock = false;
				console.log('bo');
			}
		}
	},
	pinUnpinPost(state, payload) {
		console.log('st', payload.pinUnpinData.id);
		let fIndex = -1;
		state.postData.children.forEach((element, index) => {
			// console.log(element);
			if (element.id == payload.pinUnpinData.id) {
				fIndex = index;
			}
		});
		if (fIndex != -1) {
			console.log(fIndex);
			console.log(state.postData, payload.pinUnpinData.pin);
			// console.log(payload.key);
			state.postData.children[fIndex].data.pin =
				state.postData.children[fIndex].data.pin || {};
			state.postData.children[fIndex].data.pin = payload.pinUnpinData.pin;
			console.log('bo');
			console.log(state.postData, payload.pinUnpinData.pin);
		}
	},
	markSpam(state, payload) {
		console.log('st', payload);
		console.log('st', payload.payload.markSpamData);
		let fIndex = -1;
		if (payload.payload.markSpamData.type == 'post') {
			console.log('st', payload);
			state.postData.children.forEach((element, index) => {
				// console.log(element);
				if (element.id == payload.payload.markSpamData.id) {
					fIndex = index;
				}
			});
			if (fIndex != -1) {
				console.log(fIndex);
				console.log(state.postData);
				state.postData.children[fIndex].data.moderation =
					state.postData.children[fIndex].data.moderation || {};

				state.postData.children[fIndex].data.moderation.spam =
					state.postData.children[fIndex].data.moderation.spam || {};

				state.postData.children[fIndex].data.moderation.spam.spammedBy =
					payload.payload.username;
				state.postData.children[fIndex].data.moderation.remove.spammedDate =
					'now';
				if (state.postData.children[fIndex].data.moderation.approve) {
					delete state.postData.children[fIndex].data.moderation.approve;
				}
				if (state.postData.children[fIndex].data.moderation.remove) {
					delete state.postData.children[fIndex].data.moderation.remove;
				}
				console.log('bo');
			}
		}
	},
};

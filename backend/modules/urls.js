const { ACCESS_TOKEN, ACCESS_TOKEN_USER, VERSION } = require('./constants');

const url = "https://api.vk.com/method";
const commonInfo = `access_token=${ACCESS_TOKEN}&v=${VERSION}`;
const commonInfoUser = `access_token=${ACCESS_TOKEN_USER}&v=${VERSION}`;

module.exports = {
    addLike: (postId, ownerId) => `${url}/wall.addLike?owner_id=${ownerId}&post_id=${postId}&${commonInfoUser}`,
    deleteLike: (postId, ownerId) => `${url}/wall.deleteLike?owner_id=${ownerId}&post_id=${postId}&${commonInfoUser}`,
    getLikes: (postId, ownerId) => `${url}/wall.getLikes?owner_id=${ownerId}&post_id=${postId}&${commonInfoUser}`,
    getPosts: (ownerId) => `${url}/wall.get?owner_id=${ownerId}&${commonInfoUser}`,
    getGroupMembers: (groupId) => `${url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${commonInfo}`,
}
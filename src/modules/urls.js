import { Constants } from "./constants.js";

class Urls {
    constructor() {
        this.url = "https://api.vk.com/method";
        this.commonInfo = `access_token=${Constants.ACCESS_TOKEN}&v=${Constants.VERSION}`;
        this.commonInfoUser = `access_token=${Constants.ACCESS_TOKEN_USER}&v=${Constants.VERSION}`;
    }

    addLike(postId, ownerId) {
        return `${this.url}/wall.addLike?owner_id=${ownerId}&post_id=${postId}&${this.commonInfoUser}`;
    }

    deleteLike(postId, ownerId) {
        return `${this.url}/wall.deleteLike?owner_id=${ownerId}&post_id=${postId}&${this.commonInfoUser}`
    }

    getLikes(postId, ownerId) {
        return `${this.url}/wall.getLikes?owner_id=${ownerId}&post_id=${postId}&${this.commonInfoUser}`;
    }

    getPosts(ownerId) {
        return `${this.url}/wall.get?owner_id=${ownerId}&${this.commonInfoUser}`;
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig,online,country&${this.commonUserInfo}`;
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`;
    }
}

export const urls = new Urls();

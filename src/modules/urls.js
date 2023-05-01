import { Constants } from "./constants.js";

class Urls {
    constructor() {
        this.url = "https://api.vk.com/method";
        this.commonInfo = `access_token=${Constants.ACCESS_TOKEN}&v=${Constants.VERSION}`;
        this.commonInfoUser = `access_token=${Constants.ACCESS_TOKEN_USER}&v=${Constants.VERSION}`;
    }

    getPosts() {
        return `${this.url}/?&${this.commonInfoUser}`;
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig,online,country&${this.commonInfo}`;
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`;
    }
}

export const urls = new Urls();

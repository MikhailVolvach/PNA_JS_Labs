import { Constants } from "./constants.js";

class Urls {
    constructor() {
        this.url = "https://api.vk.com/method";
        this.commonInfo = `access_token=${Constants.ACCESS_TOKEN}&v=${Constants.VERSION}`;
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_100,online&${this.commonInfo}`;
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_100&${this.commonInfo}`;
    }
}

export const urls = new Urls();

class Urls {
    constructor() {
        this.url = "http://localhost:8000";
    }

    // addLike(postId, ownerId) {
    //     return `${this.url}/wall.addLike?owner_id=${ownerId}&post_id=${postId}&${this.commonInfoUser}`;
    // }

    // deleteLike(postId, ownerId) {
    //     return `${this.url}/wall.deleteLike?owner_id=${ownerId}&post_id=${postId}&${this.commonInfoUser}`
    // }

    // getLikes(postId, ownerId) {
    //     return `${this.url}/wall.getLikes?owner_id=${ownerId}&post_id=${postId}&${this.commonInfoUser}`;
    // }

    getPosts(ownerId) {
        return `${this.url}/users/${ownerId}`;
    }

    getGroupMembers() {
        return `${this.url}/users`;
    }
}

export const urls = new Urls();

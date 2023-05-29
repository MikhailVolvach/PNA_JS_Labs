const { PostsDAO } = require('./PostsDAO');

class PostsService {
    static async findPosts(id = null) {
        if (!id) {
            throw new Error("Invalid id");
        }
        const res = await PostsDAO.findUserPostsById(id);
        console.log(res);
        return res;
    }
}

module.exports = {
    PostsService,
};

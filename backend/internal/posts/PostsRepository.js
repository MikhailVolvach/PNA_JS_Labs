const { ApiConnector } = require('../../modules/ApiConnector');
const { getPosts } = require('../../modules/urls');


class PostsRepository {
    static async connect(id = -2) {
        if (id === -2) {
            throw new Error("Invalud ID");
        }

        this.ac = new ApiConnector(getPosts(id));

        let res = await this.ac.connect();

        return res;
    }
}

module.exports = {
    PostsRepository,
};

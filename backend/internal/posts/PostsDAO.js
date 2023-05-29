const { PostsRepository } = require('./PostsRepository');

class PostsDAO {
    constructor(items) {
        this.items = items;
    }

    static _validateId(id) {
        const numberId = Number.parseInt(id);
        if (Number.isNaN(numberId)) {
            throw new Error(`Invalid id: ${id}`);
        }
    }

    static _validate(stock) {
        if (
            stock.items === undefined 
        ) {
            throw new Error('Invalid stock data');
        }
    }

    static async findUserPostsById(id) {
        this._validateId(id);

        const posts = await PostsRepository.connect(id);

        return new this(posts.items);
    }
}

module.exports = {
    PostsDAO,
}

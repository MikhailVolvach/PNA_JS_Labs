const { PostsService } = require('./PostsService');

class PostsController {

    static async findPostsById(req, res) {
        console.log('findPosts');
        try {
            const id = Number.parseInt(req.params.id);
            const response = await PostsService.findPosts(id);
            res.send(response);
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message});
        }
    }
}

module.exports = {
    PostsController,
};

const { UsersService } = require('./UsersService');

class UsersController {
    static async findUsers(req, res) {
        console.log('findUsers');
        try {
            const response = await UsersService.findUsers();
            res.send(response);
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message});
        }
    }
}

module.exports = {
    UsersController,
};

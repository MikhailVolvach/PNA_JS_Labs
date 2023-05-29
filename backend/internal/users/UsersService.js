const { UsersDAO } = require('./UsersDAO');

class UsersService {
    static async findUsers() {
        const res = await UsersDAO.findUsers();

        return res.map((user) => user);
    }
}

module.exports = {
    UsersService,
};

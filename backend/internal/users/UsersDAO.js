const { UsersRepository } = require('./UsersRepository');

class UsersDAO {
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

    static async findUsers() {
        const users = await UsersRepository.connect();

        return users.items;
    }
}

module.exports = {
    UsersDAO,
}
